import { anvilProducts, anvilUpgradeCost, bonuses, classFamilyBonuses } from "../data/website-data";
import {
  getAllCapsBonus,
  getAllSkillExp,
  getGoldenFoodBonus,
  getGoldenFoodMulti,
  getHighestLevelOfClass,
  getSpeedBonusFromAgility
} from "./misc";
import {getBribeBonus} from './bribes';
import { getActiveBubbleBonus, getBubbleBonus } from "./alchemy";
import { getTalentBonus, getTalentBonusIfActive, talentPagesMap } from "./talents";
import { getStarSignBonus } from "./starSigns";
import { getEquippedCardBonus, getTotalCardBonusById } from "./cards";
import { getFamilyBonusBonus } from "./family";
import { getStatFromEquipment } from "./items";
import { getStampBonus } from "./stamps";
import { getAchievementStatus } from "./achievements";
import { getShrineBonus } from "./shrines";
import { getStatueBonus } from "./statues";
import { getPrayerBonusAndCurse } from "./prayers";
import { getSaltLickBonus } from "./saltLick";
import { getDungeonStatBonus } from "./dungeons";
import { getPostOfficeBonus } from "./postoffice";
import { getGuildBonusBonus } from "./guild";
import { getPlayerCapacity, getSmithingExpMulti } from "./character";

export const getAnvilSpeed = (agility = 0, speedPoints, stampBonus = 0, poBoxBonus = 0, hammerHammerBonus = 0, statueBonus = 0, starSignTownSpeed = 0, talentTownSpeed = 0) => {
  const boxAndStatueMath = 1 + ((poBoxBonus + statueBonus) / 100);
  const agilityBonus = getSpeedBonusFromAgility(agility);
  return (1 + (stampBonus + (2 * speedPoints)) / 100) * boxAndStatueMath * (1 + (hammerHammerBonus / 100)) * agilityBonus * (1 + (starSignTownSpeed + talentTownSpeed) / 100);
}

export const getTotalMonsterMatCost = ({ costThreshold, startingIndex } = {}, pointsFromMats, anvilCostReduction) => {
  if (!costThreshold) return 0;
  let totalMaterials = 0;
  for (let point = startingIndex; point < pointsFromMats; point++) {
    totalMaterials += getMonsterMatCost(point, anvilCostReduction);
  }
  return totalMaterials;
}

export const getMonsterMatCost = (pointsFromMats, anvilCostReduction) => {
  return Math.round((Math.pow(pointsFromMats + 1, 1.5) + pointsFromMats) * Math.max(0.1, 1 - anvilCostReduction / 100))
}

export const getAnvilUpgradeCostItem = (pointsFromMats) => {
  const costIndex = anvilUpgradeCost.findIndex(({ costThreshold }, index) => (pointsFromMats < costThreshold) || (index === anvilUpgradeCost?.length - 1)) || {};
  const costObject = anvilUpgradeCost?.[costIndex];
  const startingIndex = costIndex === 0 ? 1 : pointsFromMats < costObject?.costThreshold ? anvilUpgradeCost?.[costIndex - 1]?.costThreshold : costObject?.costThreshold;
  return costObject ? {
    ...costObject,
    startingIndex: startingIndex
  } : { costThreshold: null, itemName: null };
}


export const getTotalCoinCost = (pointsFromMats, anvilCostReduction) => {
  let totalMaterials = 0;
  for (let point = 0; point < pointsFromMats; point++) {
    totalMaterials += getCoinCost(point, anvilCostReduction);
  }
  return totalMaterials;
}

export const getCoinCost = (pointsFromCoins, anvilCostReduction, format) => {
  const baseCost = Math.pow(pointsFromCoins, 3) + 50;
  const cost = Math.round(baseCost * (1 + pointsFromCoins / 100) * Math.max(0.1, 1 - anvilCostReduction / 100));
  return cost;
}

export const getAnvilExp = (xpPoints, smithingExpMulti) => {
  const baseMath = (1 + (3 * xpPoints / 100)) * smithingExpMulti;
  if (baseMath < 20) return baseMath;
  return Math.min(20 + ((baseMath - 20) / (baseMath - 20 + 70) * 50), 75);
}

export const getPlayerAnvil = (char, character, account, charactersLevels) => {
  // crafting material in production
  // AnvilPA - production
  // AnvilPAstats - stats
  // AnvilPAselect - selected

  let anvilProduction = char?.[`AnvilPA`];
  let [availablePoints,
    pointsFromCoins,
    pointsFromMats,
    xpPoints,
    speedPoints,
    capPoints] = char?.[`AnvilPAstats`];

  let anvilSelected = char?.[`AnvilPAselect`];
  if (!Array.isArray(anvilSelected)) {
    anvilSelected = [anvilSelected];
  }

  const production = anvilProduction?.reduce((res, item, index) => {
    const [currentAmount, currentXP, currentProgress, totalProduced] = item;
    return [
      ...res,
      {
        currentAmount,
        currentXP,
        currentProgress: parseFloat(currentProgress),
        totalProduced,
        ...(anvilProducts[index] || {}),
        hammers: anvilSelected?.filter((item) => item === index)?.length
      }
    ]
  }, []);

  const stats = {
    availablePoints,
    pointsFromCoins,
    pointsFromMats,
    xpPoints,
    speedPoints,
    capPoints
  };

  const anvilnomicsBubbleBonus = getBubbleBonus(account?.alchemy?.bubbles, 'quicc', 'ANVILNOMICS');
  const isArcher = talentPagesMap[character.class].includes('Archer');
  const archerMultiBubble = isArcher ? getBubbleBonus(account?.alchemy?.bubbles, 'quicc', 'ARCHER_OR_BUST') : 1;
  const anvilCostReduction = anvilnomicsBubbleBonus * archerMultiBubble;
  const anvilCost = getAnvilUpgradeCostItem(pointsFromMats);
  stats.anvilCost = {
    ...anvilCost,
    totalMats: getTotalMonsterMatCost(anvilCost, pointsFromMats, anvilCostReduction),
    nextMatUpgrade: getMonsterMatCost(pointsFromMats, anvilCostReduction),
    totalCoins: getTotalCoinCost(pointsFromCoins, anvilCostReduction),
    nextCoinUpgrade: getCoinCost(pointsFromCoins, anvilCostReduction, true),
  };

  // const worldTour = account?.lab?.labBonuses?.find((bonus) => bonus.name === 'World_Tour')?.active
  // account.shrines = account?.shrines?.map((shrine) => ({ ...shrine, worldTour }));
  // ANVIL EXP
  const sirSavvyStarSign = getStarSignBonus(character?.starSigns, 'Sir_Savvy', 'Skill_Exp');
  const cEfauntCardBonus = getEquippedCardBonus(character?.cards, 'Z7');

  const goldenHam = character?.food?.find(({ name }) => name === 'Golden_Ham');
  const highestLevelShaman = getHighestLevelOfClass(charactersLevels, 'Shaman');
  const familyBonus = getFamilyBonusBonus(classFamilyBonuses, 'GOLDEN_FOODS', highestLevelShaman);
  const equipmentGoldFoodBonus = character?.equipment?.reduce((res, item) => res + getStatFromEquipment(item, bonuses?.etcBonuses?.[8]), 0);
  const hungryForGoldTalentBonus = getTalentBonus(character?.talents, 1, 'HAUNGRY_FOR_GOLD');
  const goldenAppleStamp = getStampBonus(account?.stamps, 'misc', 'StampC7', 0);
  const goldenFoodAchievement = getAchievementStatus(account?.achievements, 37);
  const goldenGoodMulti = getGoldenFoodMulti(
    familyBonus,
    equipmentGoldFoodBonus,
    hungryForGoldTalentBonus,
    goldenAppleStamp,
    goldenFoodAchievement
  );
  const goldenFoodBonus = getGoldenFoodBonus(goldenGoodMulti, goldenHam?.Amount, goldenHam?.amount);

  const skillExpCardSetBonus = character?.cards?.cardSet?.rawName === 'CardSet3' ? character?.cards?.cardSet?.bonus : 0;
  const summereadingShrineBonus = getShrineBonus(account?.shrines, 5, char?.[`CurrentMap`], character.cards, 'Z9');
  const ehexpeeStatueBonus = getStatueBonus(account?.statues, 'StatueG18', character?.talents);
  const unendingEnergyBonus = getPrayerBonusAndCurse(character?.activePrayers, 'Unending_Energy')?.bonus
  const skilledDimwitCurse = getPrayerBonusAndCurse(character?.activePrayers, 'Skilled_Dimwit')?.curse;
  const theRoyalSamplerCurse = getPrayerBonusAndCurse(character?.activePrayers, 'The_Royal_Sampler')?.curse;
  const equipmentBonus = character?.equipment?.reduce((res, item) => res + getStatFromEquipment(item, bonuses.etcBonuses?.[27]), 0);
  const maestroTransfusionTalentBonus = getTalentBonusIfActive(character?.activeBuffs, 'MAESTRO_TRANSFUSION');
  const duneSoulLickBonus = getSaltLickBonus(account?.saltLick, 3);
  const dungeonSkillExpBonus = getDungeonStatBonus(account?.dungeons?.upgrades, 'Class_Exp');
  const allSkillExp = getAllSkillExp(
    sirSavvyStarSign,
    cEfauntCardBonus,
    goldenFoodBonus,
    skillExpCardSetBonus,
    summereadingShrineBonus,
    ehexpeeStatueBonus,
    unendingEnergyBonus,
    skilledDimwitCurse,
    theRoyalSamplerCurse,
    equipmentBonus,
    maestroTransfusionTalentBonus,
    duneSoulLickBonus,
    dungeonSkillExpBonus,
  );

  const focusedSoulTalentBonus = getTalentBonus(character?.talents, 0, 'FOCUSED_SOUL');
  const happyDudeTalentBonus = getTalentBonus(character?.talents, 0, 'HAPPY_DUDE');
  const smithingCards = getTotalCardBonusById(character?.cards?.equippedCards, 49);
  const blackSmithBoxBonus0 = getPostOfficeBonus(character?.postOffice, 'Blacksmith_Box', 0);
  const leftHandOfLearningTalentBonus = getTalentBonus(character?.talents, 2, 'LEFT_HAND_OF_LEARNING');
  const smithingExpMulti = getSmithingExpMulti(
    focusedSoulTalentBonus,
    happyDudeTalentBonus,
    smithingCards,
    blackSmithBoxBonus0,
    allSkillExp,
    leftHandOfLearningTalentBonus);

    stats.anvilExp = allSkillExp;

  // ANVIL SPEED MATH;
  const anvilZoomerBonus = getStampBonus(account?.stamps, 'skills', 'StampB3', character?.skillsInfo?.smithing?.level);
  const blackSmithBoxBonus1 = getPostOfficeBonus(character?.postOffice, 'Blacksmith_Box', 1);
  const hammerHammerBonus = getActiveBubbleBonus(character?.equippedBubbles, 'aUpgradesG2');
  const anvilStatueBonus = getStatueBonus(account?.statues, 'StatueG12', character?.talents);
  const bobBuildGuyStarSign = getStarSignBonus(character?.starSigns, 'Bob_Build_Guy', 'Speed_in_Town');
  const talentTownSpeedBonus = getTalentBonus(character?.talents, 0, 'BROKEN_TIME');
  stats.anvilSpeed = 3600 * getAnvilSpeed(character?.stats.agility, speedPoints, anvilZoomerBonus, blackSmithBoxBonus1, hammerHammerBonus, anvilStatueBonus, bobBuildGuyStarSign, talentTownSpeedBonus);

  let guildCarryBonus = 0;
  let zergPrayerBonus = getPrayerBonusAndCurse(character?.activePrayers, 'Zerg_Rushogen')?.curse;
  let ruckSackPrayerBonus = getPrayerBonusAndCurse(character?.activePrayers, 'Ruck_Sack')?.bonus;

  if (account?.guild?.guildBonuses.length > 0) {
    guildCarryBonus = getGuildBonusBonus(account?.guild?.guildBonuses, 2);
  }
  const telekineticStorageBonus = getTalentBonus(character?.starTalents, null, 'TELEKINETIC_STORAGE');
  const carryCapShrineBonus = getShrineBonus(account?.shrines, 3, char?.[`CurrentMap`], character.cards, 'Z9');
  const bribeCapBonus = getBribeBonus(account?.bribes, 'Bottomless_Bags');
  const allCapacity = getAllCapsBonus(guildCarryBonus, telekineticStorageBonus, carryCapShrineBonus, zergPrayerBonus, ruckSackPrayerBonus, bribeCapBonus);

  const mattyBagStampBonus = getStampBonus(account?.stamps, 'skills', 'StampB8', character?.skillsInfo?.smithing?.level);
  const masonJarStampBonus = getStampBonus(account?.stamps, 'misc', 'StampC2', character?.skillsInfo?.smithing?.level);
  const gemShopCarryBonus = account?.gemShopPurchases?.find((value, index) => index === 58) ?? 0;
  const extraBagsTalentBonus = getTalentBonus(character?.talents, 1, 'EXTRA_BAGS');
  const starSignExtraCap = getStarSignBonus(character?.starSigns, 'Pack_Mule', 'Carry_Cap');

  const charMaterialBag = character?.carryCapBags?.find(({ Class }) => Class === 'bCraft');
  const playerCapacity = getPlayerCapacity(charMaterialBag, {
    allCapacity,
    mattyBagStampBonus,
    masonJarStampBonus,
    gemShopCarryBonus,
    extraBagsTalentBonus,
    starSignExtraCap
  })

  stats.anvilCapacity = Math.round(playerCapacity * (2 + 0.1 * capPoints));
  const selectedProducts = anvilSelected
    .sort((a, b) => a - b)
    .map((item) => anvilProducts[item]);

  return {
    guild: account?.guild?.guildBonuses.length > 0,
    stats,
    production,
    selected: selectedProducts,
  };
}

export const calcAnvilExp = (characters, character, anvilExp, xpPoints) => {
  const focusedSoulTalentBonus = getTalentBonus(character?.talents, 0, "FOCUSED_SOUL");
  const happyDudeTalentBonus = getTalentBonus(character?.talents, 0, "HAPPY_DUDE");
  const smithingCards = getTotalCardBonusById(character?.cards?.equippedCards, 49);
  const blackSmithBoxBonus0 = getPostOfficeBonus(character?.postOffice, "Blacksmith_Box", 0);
  const mman = characters?.find(({ class: charClass }) => charClass === "Maestro");
  let leftHandOfLearningTalentBonus = 0;
  if (mman) {
    leftHandOfLearningTalentBonus = getTalentBonus(mman?.talents, 2, "LEFT_HAND_OF_LEARNING");
  }
  const smithingExpMulti = getSmithingExpMulti(focusedSoulTalentBonus, happyDudeTalentBonus, smithingCards, blackSmithBoxBonus0, anvilExp, leftHandOfLearningTalentBonus);
  const tempAnvilExp = getAnvilExp(xpPoints, smithingExpMulti);
  return 100 * (tempAnvilExp - 1);
};
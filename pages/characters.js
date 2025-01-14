import React, { useContext, useMemo } from 'react';
import { Checkbox, FormControlLabel, Grid, Stack, Typography } from '@mui/material';
import Character from 'components/characters';
import { AppContext } from 'components/common/context/AppProvider';
import { NextSeo } from 'next-seo';

const Characters = () => {
  const { state, dispatch } = useContext(AppContext);
  const numberOfCharacters = useMemo(() => Object.values(state?.displayedCharacters || [])?.filter((val) => val).length, [state]);
  const characterCols = Math.max(3, 12 / numberOfCharacters);
  const hasSkillsFilter = state?.filters?.Skills;

  return <>
    <NextSeo
      title="Idleon Toolbox | Characters"
      description="Characters overview for a lot of the game aspects"
    />
    {numberOfCharacters > 0 ? (
      <>
        {hasSkillsFilter ? <FormControlLabel
          control={<Checkbox name={'mini'} checked={state.showRankOneOnly}
                             onChange={() => dispatch({ type: 'showRankOneOnly', data: !state.showRankOneOnly })}
                             size={'small'}
          />}
          label={'Show rank 1 only'}/> : null}
        <Grid container sx={{ gap: { xs: 2 } }} columns={12.5}>
          {state?.characters?.map((character, index) => {
            return state?.displayedCharacters?.[character?.name]
              ? <Character filters={state?.filters}
                           account={state?.account}
                           character={character}
                           characters={state?.characters}
                           cols={characterCols}
                           lastUpdated={state?.lastUpdated}
                           showSkillsRankOneOnly={state.showRankOneOnly}
                           key={`${character?.name}-${index}`}/>
              : null;
          })}
        </Grid>
      </>
    ) : (
      <Stack alignItems={'center'} justifyContent={'center'}>
        <Typography variant={'h4'}>Please select a character</Typography>
      </Stack>
    )}
  </>
};

export default Characters;

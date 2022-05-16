
   
import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Poem from '../Poems/Poem/Poem'
import useStyles from './styles';

const Poems = ({ setCurrentId }) => {
  const poem = useSelector((state) => state.poems);
  const classes = useStyles();

  if (poem.title !== '' ) {
    return (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          <Grid key={poem._id} >
            <Poem poem={poem} setCurrentId={setCurrentId} />
          </Grid>
      </Grid>
    
  );
  } else return null;
  
};

export default Poems;
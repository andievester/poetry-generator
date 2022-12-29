
   
import React from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Poem from '../Poems/Poem/Poem'

const Poems = ({ setCurrentId }) => {
  const poem = useSelector((state) => state.poems);

  if (poem.title !== '' ) {
    return (
      <Grid container>
          <Grid key={poem._id} >
            <Poem poem={poem} setCurrentId={setCurrentId} />
          </Grid>
      </Grid>
    
  );
  } else return null;
  
};

export default Poems;
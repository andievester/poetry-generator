import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Poem from "../Poems/Poem/Poem";

const Poems = ({ setCurrentId }) => {
  const poem = useSelector((state) => state.poems);;

  if (poem.title === "" && !poem.isLoading) {
    return null;
  } else if (poem.title === "" && poem.isLoading) {
    return <CircularProgress />
  } else if (poem.title !== "") {
    return (
      <Grid container>
        <Grid key={poem._id}>
          <Poem poem={poem} setCurrentId={setCurrentId} />
        </Grid>
      </Grid>
    );
  }
};

export default Poems;

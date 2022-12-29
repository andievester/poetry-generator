import React from "react";
import { Card, CardMedia, Typography } from "@material-ui/core";

import useStyles from "./styles";

const Poem = ({ poem, setCurrentId }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.cardHeader} />
      <div className={classes.poemTitle}>
        <Typography variant="h4" className={classes.titleFont}>{poem.title}</Typography>
        <Typography variant="h6" className={classes.titleFont}>
          {`${poem.author.first} `}
          {poem.author.last}
        </Typography>
      </div>
      <div className={classes.poemLines}>
        <Typography variant="body1" color="textSecondary" className={classes.font}>
          {poem.stanzas.map((lines) => lines.join("\n")).join("\n\n")}
        </Typography>
      </div>
    </Card>
  );
};

export default Poem;

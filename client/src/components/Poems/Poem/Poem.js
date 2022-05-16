import React from 'react';
import { Card, CardMedia, Button, Typography } from '@material-ui/core';

import useStyles from './styles';

const Poem = ({ poem, setCurrentId }) => {
    const classes = useStyles();
    
    return (
            <Card className={classes.card}>
            <div className={classes.poemTitle2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(poem._id)}></Button>
      </div>
      <CardMedia 
      className={classes.cardContent} />
            <div className={classes.poemTitle}>
            <Typography variant="h4">
                {poem.title}
                </Typography>
                <Typography variant="h6">
                {`${poem.author.first} `}
                {poem.author.last}
                </Typography>
            </div>
            <div className={classes.poemLines}>
                <Typography
                variant="body1"
                color="textSecondary"
                >
                    {poem.stanzas.map(lines => lines.join("\n")).join("\n\n")}
                </Typography>
            </div>
            </Card>   
    );
}

export default Poem;
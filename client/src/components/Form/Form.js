import React from "react";
import { Button, Typography, Paper } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { getSinglePoem } from "../../actions/poems";

import useStyles from "./styles";

const Form = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [valueA, setValueA] = React.useState();

  const [valueB, setValueB] = React.useState();

  const onChangeA = (event) => {
    const target = event.target;
    if (target.checked) {
      setValueA(target.value);
    }
  };

  const onChangeB = (event) => {
    const target = event.target;

    if (target.checked) {
      setValueB(target.value);
    }
  };

  const moodQuestions = {
    Inspired: "inspired",
    Hopeless: "hopeless",
    Apathetic: "apathetic",
    Joyous: "joyous",
    Angry: "angry",
    Content: "content",
    Lonely: "lonely",
    Empowered: "empowered",
    Melancholy: "melancholy",
    Anxious: "anxious",
  };

  Object.freeze(moodQuestions);

  const moodChangeQuestions = {
    Affirmation: "affirmation",
    Transformation: "transformation",
  };
  Object.freeze(moodChangeQuestions);

  const onSubmit = (event) => {
    event.preventDefault();

    if (
      (valueA === moodQuestions.Joyous &&
        valueB === moodChangeQuestions.Transformation) ||
      (valueA === moodQuestions.Melancholy &&
        valueB === moodChangeQuestions.Affirmation)
    ) {
      getPoem("6269f94c02336003aef3d018");
    } else if (
      valueA === moodQuestions.Content &&
      valueB === moodChangeQuestions.Affirmation
    ) {
      getPoem("61f898143838e139becc6619");
    } else if (
      (valueA === moodQuestions.Inspired &&
        valueB === moodChangeQuestions.Affirmation) ||
      (valueA === moodQuestions.Hopeless &&
        valueB === moodChangeQuestions.Transformation)
    ) {
      getPoem("624c50b720e5f8823bd99545");
    } else if (
      (valueA === moodQuestions.Hopeless &&
        valueB === moodChangeQuestions.Affirmation) ||
      (valueA === moodQuestions.Inspired &&
        valueB === moodChangeQuestions.Transformation)
    ) {
      getPoem("61f59268a14dceabb9ca0de7");
    } else if (
      (valueA === moodQuestions.Apathetic &&
        valueB === moodChangeQuestions.Affirmation) ||
      (valueA === moodQuestions.Melancholy &&
        valueB === moodChangeQuestions.Transformation)
    ) {
      getPoem("6274783962fbf3ce518602b0");
    } else if (
      valueA === moodQuestions.Joyous &&
      valueB === moodChangeQuestions.Affirmation
    ) {
      getPoem("61f8963f3838e139becc6618");
    } else if (
      valueA === moodQuestions.Apathetic &&
      valueB === moodChangeQuestions.Transformation
    ) {
      getPoem("624c4d9120e5f8823bd99544");
    } else if (
      (valueA === moodQuestions.Angry &&
        valueB === moodChangeQuestions.Affirmation) ||
      (valueA === moodQuestions.Content &&
        valueB === moodChangeQuestions.Transformation) ||
      (valueA === moodQuestions.Empowered &&
        valueB === moodChangeQuestions.Transformation)
    ) {
      getPoem("625190cf950f9acf1fabf702");
    } else if (
      valueA === moodQuestions.Angry &&
      valueB === moodChangeQuestions.Transformation
    ) {
      getPoem("62747ba262fbf3ce518602b1");
    } else if (
      valueA === moodQuestions.Anxious &&
      valueB === moodChangeQuestions.Transformation
    ) {
      getPoem("62747d7c62fbf3ce518602b2");
    } else if (valueA === moodQuestions.Lonely) {
      if (valueB === moodChangeQuestions.Affirmation) {
        getPoem("62518f63950f9acf1fabf701");
      } else if (valueB === moodChangeQuestions.Transformation) {
        getPoem("61f894cc3838e139becc6617");
      }
    } else if (
      valueA === moodQuestions.Empowered &&
      valueB === moodChangeQuestions.Affirmation
    ) {
      getPoem("61f89b5a3838e139becc661a");
    }
  };

  function getPoem(id) {
    dispatch(getSinglePoem(id));
  }

  return (
    <Paper className={classes.paper}>
      <Typography variant="h7" className={classes.questions}>
        How would you best describe your mood today?
      </Typography>
      <form className={`${classes.root} ${classes.form}`} onSubmit={onSubmit}>
        <div className="container">
          <div className="row mt-5">
            <div className="col-sm-12">
              {Object.keys(moodQuestions).map((optionKey) => {
                const option = moodQuestions[optionKey];
                return (
                  <div key={option} className={classes.moodOptions}>
                    <label>
                      <input
                        type="radio"
                        name={option}
                        value={option}
                        checked={valueA === option}
                        onChange={onChangeA}
                      />
                      {optionKey}
                    </label>
                  </div>
                );
              })}
              <Typography variant="h7" className={classes.questions}>
                Sometimes we turn to art to feel our existing emotions more
                intensely. Sometimes we turn to it in order to change the way we
                feel. <br></br> What are you looking for today?
              </Typography>
              {Object.keys(moodChangeQuestions).map((moodChangeQuestionKey) => {
                const moodChangeQuestionVal =
                  moodChangeQuestions[moodChangeQuestionKey];
                return (
                  <div
                    key={moodChangeQuestionVal}
                    className={classes.moodOptions}
                  >
                    <label>
                      <input
                        type="radio"
                        name={moodChangeQuestionVal}
                        value={moodChangeQuestionVal}
                        checked={valueB === moodChangeQuestionVal}
                        onChange={onChangeB}
                      />
                      {moodChangeQuestionKey}
                    </label>
                  </div>
                );
              })}
              <Button
                className={classes.buttonSubmit}
                disabled={!valueA || !valueB}
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                fullWidth
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Paper>
  );
};
export default Form;

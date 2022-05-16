import React, { Component, useEffect, useState } from 'react';
import { Button, Typography, Paper } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import { getSinglePoem } from '../../actions/poems';

import useStyles from './styles';

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
    a: "inspired", //1
    b: "hopeless", //2
    c: "apathetic", //3
    d: "joyous", //4
    e: "angry", //5
    f: "content", //6
    g: "lonely", //7
    h: "empowered", //8
    i: "melancholy", //9
    j: "anxious" //10
  }

  // add poem for angry + transformation (i go among trees)
  // change poem for melancholy + transformation (little stone)
  // add poem for anxious + transformation (wild geese)

  Object.freeze(moodQuestions);

  const moodChangeQuestions = {
    a: "affirmation",
    b: "transformation",
  }
  Object.freeze(moodChangeQuestions);

  const onSubmit = (event) => {
      event.preventDefault();
      
        if ((valueA === moodQuestions.d && valueB === moodChangeQuestions.b) ||
      (valueA === moodQuestions.i && valueB === moodChangeQuestions.a)) {
        getPoem('6269f94c02336003aef3d018');
      } else if (valueA === moodQuestions.f && valueB === moodChangeQuestions.a) {
        getPoem('61f898143838e139becc6619');
      } else if ((valueA === moodQuestions.a && valueB === moodChangeQuestions.a) || 
      (valueA === moodQuestions.b && valueB === moodChangeQuestions.b)) {
        getPoem('624c50b720e5f8823bd99545');
      } else if ((valueA === moodQuestions.b && valueB === moodChangeQuestions.a) ||
      (valueA === moodQuestions.a && valueB === moodChangeQuestions.b)) {
        getPoem('61f59268a14dceabb9ca0de7');
      } else if ((valueA === moodQuestions.c && valueB === moodChangeQuestions.a) ||
      (valueA === moodQuestions.i && valueB === moodChangeQuestions.b)) {
        getPoem('6274783962fbf3ce518602b0')
      } else if (valueA === moodQuestions.d && valueB === moodChangeQuestions.a) {
        getPoem('61f8963f3838e139becc6618');
      } else if (valueA === moodQuestions.c && valueB === moodChangeQuestions.b) {
        getPoem('624c4d9120e5f8823bd99544');
      } else if ((valueA === moodQuestions.e && valueB === moodChangeQuestions.a) ||
      (valueA === moodQuestions.f && valueB === moodChangeQuestions.b) ||
      (valueA === moodQuestions.h && valueB === moodChangeQuestions.b)) {
        getPoem('625190cf950f9acf1fabf702');
      } else if (valueA === moodQuestions.e && valueB === moodChangeQuestions.b) {
        getPoem('62747ba262fbf3ce518602b1');
      } else if (valueA === moodQuestions.j && valueB === moodChangeQuestions.b) {
        getPoem('62747d7c62fbf3ce518602b2');
      } else if (valueA === moodQuestions.g) {
        if (valueB === moodChangeQuestions.a) {
          getPoem('62518f63950f9acf1fabf701');
        } else if (valueB === moodChangeQuestions.b) {
          getPoem('61f894cc3838e139becc6617');
        } 
      } 
      else if (valueA === moodQuestions.h && valueB === moodChangeQuestions.a) {
        getPoem('61f89b5a3838e139becc661a');
      }
      
    }

  function getPoem(id) {
      dispatch(getSinglePoem(id));
    }


    return (
        <Paper className={classes.paper}>
            <Typography variant="h6" >How would you best describe your mood today?</Typography>
            <form className={`${classes.root} ${classes.form}`} onSubmit={onSubmit}>
            <div className="container">
                  <div className="row mt-5">
                    <div className="col-sm-12">
                        <div className={classes.moodOptions}>
                          <label>
                            <input
                              type="radio"
                              name="inspired"
                              value="inspired"
                              checked={valueA === 'inspired'}
                              onChange={onChangeA}
                            />
                            Inspired
                          </label>
                        </div>

                        <div className={classes.moodOptions}>
                          <label>
                            <input
                              type="radio"
                              name="hopeless"
                              value="hopeless"
                              checked={valueA === 'hopeless'}
                              onChange={onChangeA}
                            />
                            Hopeless
                          </label>
                        </div>

                        <div className={classes.moodOptions}>
                          <label>
                            <input
                              type="radio"
                              name="apathetic"
                              value="apathetic"
                              checked={valueA === 'apathetic'}
                              onChange={onChangeA}
                            />
                            Apathetic
                          </label>
                        </div>

                        <div className={classes.moodOptions}>
                          <label>
                            <input
                              type="radio"
                              name="joyous"
                              value="joyous"
                              checked={valueA === 'joyous'}
                              onChange={onChangeA}
                            />
                            Joyous
                          </label>
                        </div>

                        <div className={classes.moodOptions}>
                          <label>
                            <input
                              type="radio"
                              name="angry"
                              value="angry"
                              checked={valueA === 'angry'}
                              onChange={onChangeA}
                              className={classes.moodInput}
                            />
                            Angry
                          </label>
                        </div>

                        <div className={classes.moodOptions}>
                          <label>
                            <input
                              type="radio"
                              name="content"
                              value="content"
                              checked={valueA === 'content'}
                              onChange={onChangeA}
                            />
                            Content
                          </label>
                        </div>

                        <div className={classes.moodOptions}>
                          <label>
                            <input
                              type="radio"
                              name="lonely"
                              value="lonely"
                              checked={valueA === 'lonely'}
                              onChange={onChangeA}
                            />
                            Lonely
                          </label>
                        </div>

                        <div className={classes.moodOptions}>
                          <label>
                            <input
                              type="radio"
                              name="empowered"
                              value="empowered"
                              checked={valueA === 'empowered'}
                              onChange={onChangeA}
                            />
                            Empowered
                          </label>
                        </div>

                        <div className={classes.moodOptions}>
                          <label>
                            <input
                              type="radio"
                              name="melancholy"
                              value="melancholy"
                              checked={valueA === 'melancholy'}
                              onChange={onChangeA}
                            />
                            Melancholy
                          </label>
                        </div>

                        <div className={classes.moodOptions}>
                          <label>
                            <input
                              type="radio"
                              name="anxious"
                              value="anxious"
                              checked={valueA === 'anxious'}
                              onChange={onChangeA}
                            />
                            Anxious
                          </label>
                        </div>

                        <Typography variant="h6" className={classes.questions}>Sometimes we turn to art to feel our existing emotions more intensely. Sometimes we turn to it in order to change the way we feel. <br></br> What are you looking for today?</Typography>
                        <div className={classes.moodOptions}>
                          <label>
                            <input
                              type="radio"
                              name="affirmation"
                              value="affirmation"
                              checked={valueB === 'affirmation'}
                              onChange={onChangeB}
                            />
                            Affirmation
                          </label>
                        </div>

                        <div className={classes.moodOptions}>
                          <label>
                            <input
                              type="radio"
                              name="transformation"
                              value="transformation"
                              checked={valueB === 'transformation'}
                              onChange={onChangeB}
                            />
                            Transformation
                          </label>
                        </div>

                          <Button className={classes.buttonSubmit} 
                          disabled={!valueA || !valueB}
                          variant="contained"
                          color="primary"
                          size="large"
                          type="submit"
                          fullWidth>
                            Submit
                          </Button>

                    </div>
                  </div>
                </div>
            </form>    
        </Paper>
    );

   
}

export default Form;

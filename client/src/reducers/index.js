import { combineReducers } from 'redux';
import { createStore } from 'redux'
import poems from './poems';


const combined = combineReducers({ poems })

export default combined;
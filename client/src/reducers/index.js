import {combineReducers} from 'redux';
import Auth from './auth';
import Boards from './boards';
import Items from './items';
import {reducer} from 'redux-form';

export default combineReducers({
	Auth,
	Boards,
	Items,
	form:reducer
});
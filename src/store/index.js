import { createStore , combineReducers , applyMiddleware } from 'redux';
import { player , movie } from '../reducers';
import axios from 'axios';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleware = applyMiddleware(thunk , logger())

export const store = (createStore(combineReducers({
	player ,
	movie
})))


const fetch = () => {
	return axios.get('https://crossorigin.me/http://ufc-data-api.ufc.com/api/v1/us/fighters' , {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json',
	})
	.then(res => store.dispatch({
		type: 'RECEIVE_EVENTS',
		payload: res.data
	}))
	.catch(err => store.dispatch({
		type: 'FETCH_EVENTS_ERROR',
		payload: err
	}))
}

console.log(store.getState())

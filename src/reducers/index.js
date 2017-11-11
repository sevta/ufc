import axios from 'axios';
import {store} from '../store';

const playerState = {
	events: '',
	fetching: false,
	fetched: false,
	error: null
}

export const player = (state = playerState , action) => {
	switch (action.type) {
		case 'FETCH_EVENTS':
			return {
				...state ,
				fetcing: true
			}
		case 'FETCH_EVENTS_ERROR':
			return {
				...state ,
				fetcing: false,
				error: action.payload
			}
		case 'RECEIVE_EVENTS':
			return {
				...state ,
				fetcing: false,
				fetced: true,
				events: action.payload
			}
		default:
			return state
	}
}

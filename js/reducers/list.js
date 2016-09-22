
'use strict';

import { SET_INDEX, SET_DATA, SET_LIMIT, INCREASE_LIMIT } from '../actions/list';

// load the data from json document.

const initialState= {
    data : null,
    initialListSize: 10,
    scrollRenderAheadDistance: 1,
    removeClippedSubViews: true,
    limit: 1
}

export default function (state = initialState, action) {
    
    switch(action.type){
    	case SET_INDEX:
    	case SET_DATA:
    	case SET_LIMIT:
    		return{
    			...state,
    			...action.payload
    		}
        case INCREASE_LIMIT:
            return{
                ...state,
                limit: action.payload.incr + state.limit
            }
    	default:
    		return state;
    	}

    	return state;
    }
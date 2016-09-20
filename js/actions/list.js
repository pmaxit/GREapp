
'use strict';

import type {Action} from './types';

export const SET_INDEX = "SET_INDEX";
export const SET_LIMIT = "SET_LIMIT";

export function setIndex(index:number):Action {
    return {
        type: SET_INDEX,
        payload: {
        	index: index
        }
    }
}

export function setLimit(limit:number){
	return{
		type: SET_LIMIT,
		payload: {
			limit:limit
		}
	}
}
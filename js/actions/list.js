
'use strict';

import type {Action} from './types';

export const SET_INDEX = "SET_INDEX";
export const SET_LIMIT = "SET_LIMIT";
<<<<<<< HEAD
export const SET_DATA  = "SET_DATA";
export const INCREASE_LIMIT = "INCREASE_LIMIT";
export const PUSH_ITEM = "PUSH_ITEM"
import axios from 'axios';


export function fetchData2(){
	let promise = axios.get('https://raw.githubusercontent.com/adambom/dictionary/master/dictionary.json')
	return function(dispatch){
		promise.then((response) => dispatch({
			type: SET_DATA,
			payload: {
				data : response.data
			}
		})).catch((response) => dispatch({
			type:SET_DATA,
			payload:{
				data: response.error
			}
		}))
	}
}



export function fetchData3(itemsRef){
	
	let promise = itemsRef.orderByKey().once('value')

	return function(dispatch){
		promise.then((response) => dispatch({
			type: SET_DATA,
			payload: {
				data : response.val()
			}
		})).catch((response) => dispatch({
			type:SET_DATA,
			payload:{
				data: response.val()
			}
		}))
	}
}


export function fetchData(){
	let data = require('../../data/dict.json')
	return{
		type: SET_DATA,
		payload:{
			data: data
		}
	}
}

export function increaseLimit(incr){
	return{
		type: INCREASE_LIMIT,
		payload:{
			incr: incr
		}
	}
}
export function setLimit(limit){
	return{
		type: SET_LIMIT,
		payload:{
			limit: limit
		}
	}
}

export function pushItem(text){
	
	return{
		type: PUSH_ITEM,
		payload:text
	}
=======

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
>>>>>>> c5b126c7dc30437bc787dca7335d35e5af3d6f63
}
'use strict';

import * as firebase from 'firebase'
import { PUSH_ITEM } from '../actions/list';

var config = {
    apiKey: "AIzaSyCed6WCQ_jvCskLKFIDe25_bW4Wjkj35lk",
    authDomain: "greapp-bf451.firebaseapp.com",
    databaseURL: "https://greapp-bf451.firebaseio.com",
    storageBucket: "greapp-bf451.appspot.com",
    messagingSenderId: "177333191308"
  };

const fireBaseApp = firebase.initializeApp(config)

const initialState = {
	ref: fireBaseApp.database().ref(),
	child: fireBaseApp.database().ref().child('items')
}

export default function(state = initialState, action){
	
	switch(action.type){
		case PUSH_ITEM:
			console.log("pushing item")
			state.child.set({word: action.payload})
	}

	return state;
}
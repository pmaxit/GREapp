
'use strict';

import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import devTools from 'remote-redux-devtools'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import reducer from './reducers'
import promise from './promise';
import createLogger from 'redux-logger';

export default function configureStore(onCompletion:()=>void):any {
	// const enhancer = compose(
	// 	applyMiddleware(thunk, promise, createLogger()),
	// 	devTools({
	//      	name: 'NativeStarterKit', realtime: true
	//     }),
	// );
	const enhancer = applyMiddleware(thunk, promise, createLogger())

	let store = createStore(reducer, enhancer);
	persistStore(store, {storage: AsyncStorage}, onCompletion);

	return store
}

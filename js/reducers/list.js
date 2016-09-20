
'use strict';

import { SET_INDEX, SET_LIMIT} from '../actions/list';

// load the data from json document.

const initialState= {
    data : require("../data/dict.json"),
    initialListSize: 3,
    scrollRenderAheadDistance: 4,
    removeClippedSubViews: true,
    limit: 10
}

export default function (state = initialState, action) {
    
    return {
        ...state,
        ...action.payload
    };
}
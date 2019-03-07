import { FETCH_CAT } from '../action/type';


let initialState = {
    posts: []
}

//reduces FETCH_CAT case which is an action to call categories

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CAT:
            return {
                posts: action.category
            }

        default:
            return state
    }
}
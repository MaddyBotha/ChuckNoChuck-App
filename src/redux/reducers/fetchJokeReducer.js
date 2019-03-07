import { FETCH_JOKE } from '../action/type';


const initialState = {
    joke: []
}

//reduces FETCH_JOKE case which is an action to call categories

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_JOKE:
            return {
                joke: [action.joke]
            }

        default:
            return state
    }
}
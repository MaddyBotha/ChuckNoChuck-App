import { FETCH_JOKE } from './type';

// fetch joke action to pull all the jokes from the API
export const fetchJoke = (prop) => (dispatch) => (
    fetch('https://api.chucknorris.io' + prop.location.pathname + prop.location.search)
        .then(res => res.json())
        .then(joke => dispatch({
            type: FETCH_JOKE,
            joke: joke
        }))
)



import {
    FETCH_MOVIES,
    FILTER_MOVIES,
    STORE_MOVIES,
} from "./types";
import api from '../api';

export const fetchMovies = () => async (dispatch) => {
    const response = await api.get('/');
    dispatch({
        type: FETCH_MOVIES,
        payload: response.data,
    });
};

export const filterMovies = (term) => async (dispatch) => {
    dispatch({
        type: FILTER_MOVIES,
        payload: term.toUpperCase(),
    });
};

export const storeMovies = (movies) => async (dispatch) => {
    const response = await api.post('/', {
        movies,
    });
    dispatch({
        type: STORE_MOVIES,
        payload: response.data,
    })
}
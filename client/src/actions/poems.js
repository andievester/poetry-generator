import * as api from '../api';

// Action Creators
export const getPoems = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPoems();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const getSinglePoem = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchSinglePoem(id);
        dispatch({ type: 'FETCH', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}
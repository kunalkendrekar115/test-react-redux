
const duckRoot = 'app/groceries/';

// Constants
export const ADD_ITEM = `${duckRoot}ADD_ITEM`;
export const REMOVE_ITEM = `${duckRoot}REMOVE_ITEM`;
export const SELECT_ITEM = `${duckRoot}SELECT_ITEM`;
export const DESELECT_ITEM = `${duckRoot}DESELECT_ITEM`;

export const addItem = item => ({
    type: ADD_ITEM,
    payload: item,
});

export const selectItem = item => ({
    type: SELECT_ITEM,
    payload: item,
});

export const deselectItem = item => ({
    type: DESELECT_ITEM,
    payload: item,
});

export const removeItem = item => ({
    type: REMOVE_ITEM,
    payload: item,
});
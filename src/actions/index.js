
import Constants from './Constants'

const Actions = {

    selectItem: item => {
        return {
            type: Constants.SELECT_ITEM,
            payload: item,
        }
    },
    addItem: item => ({
        type: Constants.ADD_ITEM,
        payload: item,
    }),


    deselectItem: item => ({
        type: Constants.DESELECT_ITEM,
        payload: item,
    }),

    removeItem: item => ({
        type: Constants.REMOVE_ITEM,
        payload: item,
    })
}

export default Actions



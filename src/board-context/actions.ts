import { Board } from './models';

export enum ActionTypes {
    Add = 'ADD_NEW_BOARD',
    Remove = 'REMOVE_BOARD',
    Update = 'UPDATE_BOARD'
}

export type Actions = {
    type: ActionTypes,
    payload: Board
}

// Action - ADD_TO_LIST

export const addNewBoard = (board: Board) => {
    return {
        type: ActionTypes.Add,
        payload: board
    }
}


// Action - REMOVE_ITEM

export const removeBoard = (board: Board) => {
    return {
        type: ActionTypes.Remove,
        payload: board
    }
}


// Action - UPDATE_ITEM

export const updateItem = (board: Board) => {
    return {
        type: ActionTypes.Update,
        payload: board
    }
}


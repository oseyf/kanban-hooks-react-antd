import { TodoItem } from './models';

export enum ActionTypes {
    Add = 'ADD_TO_LIST',
    Remove = 'REMOVE_ITEM',
    Move = 'MOVE_ITEM',
    Update = 'UPDATE_ITEM'
}

export type Actions = {
    type: ActionTypes,
    payload: TodoItem
}

// Action - ADD_TO_LIST

export const addToList = (item: TodoItem) => {
    return {
        type: ActionTypes.Add,
        payload: item
    }
}


// Action - REMOVE_ITEM

export const removeItem = (item: TodoItem) => {
    return {
        type: ActionTypes.Remove,
        payload: item
    }
}

// Action - MOVE_ITEM

export const moveItem = (item: TodoItem) => {
    return {
        type: ActionTypes.Move,
        payload: item
    }
}


// Action - UPDATE_ITEM

export const updateItem = (item: TodoItem) => {
    return {
        type: ActionTypes.Update,
        payload: item
    }
}


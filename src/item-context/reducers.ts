import { TodoItem } from './models';
import { ActionTypes, Actions } from './actions';

export const ItemReducer = (state: TodoItem[], action: Actions) => {
    switch (action.type) {
        case ActionTypes.Add:
            return addItem(state, action.payload);
        case ActionTypes.Move:
            return moveItem(state, action.payload);
        case ActionTypes.Remove:
            return removeItem(state, action.payload);
        case ActionTypes.Update:
            return updateItem(state, action.payload);
        default:
            return state;
    }
}


const addItem = (list: TodoItem[], item: TodoItem) => {
    return list.concat(item)
}

const moveItem = (list: TodoItem[], item: any) => {
    const itemData = item.item;
    itemData.boardId = item.toBoard;
    const index = list.findIndex((listItem: TodoItem) => listItem.id === itemData.id);
    list[index] = itemData
    debugger; return [...list]
}

const removeItem = (list: TodoItem[], item: TodoItem) => {
    return list.filter((listItem: TodoItem) => listItem.id !== item.id)
}

const updateItem = (list: TodoItem[], item: TodoItem) => {
    const index = list.findIndex((listItem: TodoItem) => listItem.id === item.id);
    list[index] = item;
    return [...list];
}






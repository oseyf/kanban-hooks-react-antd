import { Board } from './models';
import { ActionTypes, Actions } from './actions';

export const BoardReducer = (state: Board[], action: Actions) => {
    switch(action.type) {
        case ActionTypes.Add:
            return addBoard(state, action.payload);
        // case ActionTypes.Move:
        //     return moveBoard(state, action.payload);
        // case ActionTypes.Remove: 
        //     return removeBoard(state, action.payload);
        // case ActionTypes.Update: 
        //     return updateBoard(state, action.payload);
        default: 
            return state;
    }
}


const addBoard = (list: Board[], board: Board) => {
    return list.concat(board)
}

// const moveBoard = (list: Board[], board: Board) => {
//     return
// }

// const removeBoard = (list: Board[], board: Board) => {
//     return
// }

// const updateBoard = (list: Board[], board: Board) => {
//     return
// }






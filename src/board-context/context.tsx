import React, {useReducer} from "react";
import { Actions } from "./actions";
import { Board } from "./models";
import { BoardReducer } from "./reducers";

export const BoardState = React.createContext<Board[] | undefined>(undefined);
export const BoardDispatch = React.createContext<React.Dispatch<Actions> | undefined>(undefined);

export const BoardProvider = ({children} : {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(BoardReducer, []);
    return(
        <BoardState.Provider value={state}>
            <BoardDispatch.Provider value={dispatch}>
            {children}
            </BoardDispatch.Provider>
        </BoardState.Provider>
    )

}

export const useBoardState = (): Board[] => {
    const context = React.useContext(BoardState);
    if(context === undefined)  {
        throw new Error('useboardState hatası');
    }
    return context;
}

export const useBoardDispatch = (): React.Dispatch<Actions> => {
    const context = React.useContext(BoardDispatch);
    if(context === undefined)  {
        throw new Error('useboardDispatch hatası');
    }
    return context;
}

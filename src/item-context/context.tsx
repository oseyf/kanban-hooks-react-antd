import React, {useReducer} from "react";
import { Actions } from "./actions";
import { TodoItem } from "./models";
import { ItemReducer } from "./reducers";

export const ItemState = React.createContext<TodoItem[] | undefined>(undefined);
export const ItemDispatch = React.createContext<React.Dispatch<Actions> | undefined>(undefined);

export const ItemProvider = ({children} : {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(ItemReducer, []);
    return(
        <ItemState.Provider value={state}>
            <ItemDispatch.Provider value={dispatch}>
            {children}
            </ItemDispatch.Provider>
        </ItemState.Provider>
    )

}

export const useItemState = (): TodoItem[] => {
    const context = React.useContext(ItemState);
    if(context === undefined)  {
        throw new Error('useItemState hatası');
    }
    return context;
}

export const useItemDispatch = (): React.Dispatch<Actions> => {
    const context = React.useContext(ItemDispatch);
    debugger; if(context === undefined)  {
        throw new Error('useItemDispatch hatası');
    }
    return context;
}

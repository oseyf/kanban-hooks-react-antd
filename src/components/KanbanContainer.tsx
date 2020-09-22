import React from 'react'
import { useBoardState } from '../board-context/context';
import { Board } from '../board-context/models';
import { useItemState } from '../item-context/context';
import { TodoItem } from '../item-context/models';
import { DropContainer } from './DropContainer';


export const KanbanContainer = () => {
    const boardList = useBoardState();
    const itemList = useItemState();
    return (

        <div className="container-fluid">
            <div className="container-fluid">               
                <div className="row">
                    {
                        boardList.map((x: Board) => {
                            const items = itemList.filter((item: TodoItem) => item.boardId === x.id)
                            return <DropContainer key={x.id} board={x} items={items} />
                        })
                    }
                </div>
            </div>

        </div>
    )
}

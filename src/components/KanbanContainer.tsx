import React from 'react'
import { useBoardState } from '../board-context/context';
import { Board } from '../board-context/models';
import useModal from '../hooks/useModal';
import { addToList } from '../item-context/actions';
import { useItemDispatch, useItemState } from '../item-context/context';
import { TodoItem } from '../item-context/models';
import AddModal from './AddModal';
import { DropContainer } from './DropContainer';


export const KanbanContainer = () => {
    const boardList = useBoardState();
    const itemList = useItemState();
    const { isShowing, toggle } = useModal();
    const itemDispatch = useItemDispatch();
    const addItemToWishlist = async () => {
        itemDispatch(
            addToList({
                id: 8,
                title: 'Ömer bu bir',
                content: 'Örnek',
                date: new Date(),
                boardId: 1
            })
        )
        toggle();

    } 
    return (

        <div className="container-fluid">
            <div className="row bg-dark-blue p-2">
                <div className="col-6 pt-2 my-auto ">
                    <h4 className=" text-white">Kanban App</h4>
                </div>
            </div>
            <div className="container-fluid">
                <button className="btn btn-primary" onClick={toggle}>Show Modal</button>
                <AddModal addFunc={addItemToWishlist}
                    isShowing={isShowing}
                    hide={toggle}
                />
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

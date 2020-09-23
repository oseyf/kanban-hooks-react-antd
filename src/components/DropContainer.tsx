import React, { useEffect, useState } from 'react'
import { Board } from '../board-context/models';
import { moveItem, updateItem } from '../item-context/actions';
import { useItemDispatch, useItemState } from '../item-context/context';
import { TodoItem } from '../item-context/models';
import { DragItem } from './DragItem';


export function DropContainer({ board, items }: { board: Board, items: TodoItem[] }) {
    const itemDispatch = useItemDispatch();
    const itemList = useItemState();

    const drop = (e: any) => {
        e.preventDefault();
        const data = JSON.parse(e.dataTransfer.getData('transfer'));
        const id = data.id;
        const existItem = data.item;


        itemDispatch(
            moveItem({
                item: existItem,
                toBoard: board.id
            }));
    }
    const allowDropData = (e: any) => {
        e.preventDefault();
    }

    return (
        <div className="col-3 p-3 flex-board" >
            <div className="bg-gray-light py-2 board rounded"
                onDrop={drop}
                onDragOver={allowDropData}
            >
                <div className="row px-3">
                    <div className="col-6 text-left">
                        <h4 className="p-3">  {board.name}</h4>
                    </div>
                    <div className="col-6 text-right">
                        <h4 className="p-3">  {items.length} Items</h4>
                    </div>
                </div>
                {items.map((item: TodoItem) => {
                    return <DragItem key={item.id} item={item}></DragItem>
                })}


            </div>
        </div>
    )
}

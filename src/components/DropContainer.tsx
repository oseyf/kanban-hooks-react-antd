import React from 'react'
import { Board } from '../board-context/models';
import { useItemDispatch } from '../item-context/context';
import { TodoItem } from '../item-context/models';
import { DragItem } from './DragItem';


export function DropContainer({ board, items }: { board: Board, items: TodoItem[] }) {
    const itemDispatch = useItemDispatch();
    const drop = (e: any) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('transfer');
        const item: TodoItem = JSON.parse(e.dataTransfer.getData('data'));
        console.log(item);
        
        e.target.appendChild(document.getElementById(data));
    }

    const allowDropData = (e: any) => {
        e.preventDefault();
        console.log('allowDrop(): DraggableItem kendi containerinden çıktığı an buraya girer.');
    }


    return (
        <div className="col-4 p-3 " >
            <div className="bg-white py-2 board rounded"
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

import React from 'react'
import { Board } from '../board-context/models';
import { TodoItem } from '../item-context/models';
import { DragItem } from './DragItem';

const drop = (e: any) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('transfer');
    e.target.appendChild(document.getElementById(data));
    console.log('drop(): itemi bir diğer containere bıraktığında bu fonksiyon çalışır.');
}

const allowDropData = (e: any) => {
    e.preventDefault();
    console.log('allowDrop(): DraggableItem kendi containerinden çıktığı an buraya girer.');
}

export function DropContainer({ board, items }: { board: Board, items: TodoItem[] }) {
    return (
        <div className="col-4 p-3 " >
            <div className="bg-white py-2 board rounded"
                onDrop={drop}
                onDragOver={allowDropData}
            >
               <h4 className="text-center p-3">  {board.name}</h4>
                {items.map((item: TodoItem) => {
                    return <DragItem key={item.id} item={item}></DragItem>
                })}
            </div>
        </div>
    )
}

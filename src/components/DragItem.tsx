import React from 'react'
import { TodoItem } from '../item-context/models';



const drag = (e: any) => {
    e.dataTransfer.setData('transfer', e.target.id);
    console.log('drag(): tutup taşımaya başladığında buraya girer.');
}

const notAllowDrop = (e: any) => {
    e.stopPropagation();
    console.log('notAllowDrop(): drag() fonksiyonu ile beragber çalışır.');
}


export function DragItem({ item }: { item: TodoItem }) {


    return (
        <div draggable="true"
            id={item.id.toString()}
            onDragStart={drag}
            onDragOver={notAllowDrop} className="p-2 m-3 bg-primary rounded">
            <h4>{item.title}</h4>
            <h6>{item.content}</h6>
        </div>
    )
}

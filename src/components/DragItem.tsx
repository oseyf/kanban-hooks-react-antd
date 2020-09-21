import moment from 'moment';
import React from 'react'
import { TodoItem } from '../item-context/models';



const drag = (e: any) => {
    e.dataTransfer.setData('transfer', e.target.id);
    console.log('drag(): tutup taşımaya başladığında buraya girer.');
}

const notAllowDrop = (e: any) => {
    e.stopPropagation();
    console.log('notAllowDrop(): drag() fonksiyonu ile beraber çalışır.');
}


export function DragItem({ item }: { item: TodoItem }) {


    return (
        <div draggable="true"
            id={item.id.toString()}
            onDragStart={drag}
            onDragOver={notAllowDrop} className="p-2 m-3 bg-light shadow shadow-sm rounded">
            <div className="row px-3">
                <div className="col-6">
                    <h5>{item.title}</h5>
                </div>
                <div className="col-6 text-right text-dark">
                <i className="fas fa-calendar-week"></i> {moment(item.date).format('DD/MM/YYYY')}
                </div>
                <div className="col-12">
                    <p>{item.content}</p>
                </div>
            </div>
        </div>
    )
}

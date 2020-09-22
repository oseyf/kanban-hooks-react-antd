import moment from 'moment';
import React from 'react'
import { useItemModal } from '../hooks/useModal';
import { removeItem } from '../item-context/actions';
import { useItemDispatch } from '../item-context/context';
import { TodoItem } from '../item-context/models';
import AddItemModal from './AddItemModal';





export function DragItem({ item }: { item: TodoItem }) {



    const drag = (e: any) => {
        e.dataTransfer.setData('transfer', e.target.id);
        const sendedItem = JSON.stringify(item);
        e.dataTransfer.setData('data', sendedItem);
    }

    const notAllowDrop = (e: any) => {
        e.stopPropagation();
        console.log('notAllowDrop(): drag() fonksiyonu ile beraber çalışır.');
    }
    const { itemModalIsShowing, toggleItemModal } = useItemModal();
    const itemDispatch = useItemDispatch();
    const deleteItem = () => {
        itemDispatch(
            removeItem(item)
        )
    }

    return (
        <div>
            <div draggable="true"
                id={item.id.toString()}
                onDragStart={drag}
                onDragOver={notAllowDrop} className="p-2 m-3 bg-light shadow shadow-sm rounded "
            >
                <div className="row px-3">
                    <div className="col-6 pointer-cursor" onClick={toggleItemModal}
                    >
                        <h5>{item.title}</h5>
                    </div>
                    <div className="col-6 text-right text-dark">
                        <i className="fas fa-trash-alt text-danger px-3 pointer-cursor" onClick={deleteItem}></i>
                        <i className="fas fa-calendar-week"></i> {moment(item.date).format('DD/MM/YYYY')}
                    </div>
                    <div className="col-12">
                        <p>{item.content}</p>
                    </div>
                </div>
            </div>

            <AddItemModal isShowing={itemModalIsShowing} dataItem={item} isReadable={true} hide={toggleItemModal} />

        </div>

    )
}

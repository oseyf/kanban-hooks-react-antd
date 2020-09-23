import moment from 'moment';
import React from 'react'
import { useItemModal } from '../hooks/useModal';
import { removeItem } from '../item-context/actions';
import { useItemDispatch } from '../item-context/context';
import { TodoItem } from '../item-context/models';
import AddItemModal from './AddItemModal';





export function DragItem({ item }: { item: TodoItem }) {



    const drag = (e: any) => {
        const sendedItem = JSON.stringify({ id: e.target.id, item: item });
        e.dataTransfer.setData('transfer', sendedItem);
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
                <div className="row p-2">
                    <div className="col-6 pointer-cursor" onClick={toggleItemModal}
                    >
                        <h5>{item.title}</h5>
                    </div>
                    <div className="col-6 text-right">
                        <span className="fa-stack text-danger fa-10px ">
                            <i className="fa fa-circle fa-stack-2x icon-background"></i>
                            <i className="fas fa-trash-alt fa-stack-1x text-white pointer-cursor" onClick={deleteItem}></i>
                        </span>
                        <i className="fas fa-calendar-week"></i> {moment(item.date).format('DD-MM-YYYY')}
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

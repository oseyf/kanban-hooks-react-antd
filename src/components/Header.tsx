import React from 'react'
import useModal from '../hooks/useModal';
import { addToList } from '../item-context/actions';
import { useItemDispatch } from '../item-context/context';
import AddModal from './AddModal';
import { Button } from './Button'

export const Header = () => {
    const { isShowing, toggle } = useModal();
    const toggleAddModal = () => {
        toggle();
    }
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
                <div className="col-6 my-auto">
                <Button icon="plus-circle" buttonClass="primary" float="right" buttonType="" content={"Add new Item to Wishlist"} onClick={toggleAddModal} />  
                <Button icon="list" buttonClass="warning" float="right" buttonType="" content={"Add new Board"} onClick={toggleAddModal} />  

                </div>
            </div> 
            <AddModal addFunc={addItemToWishlist}
                    isShowing={isShowing}
                    hide={toggle}
                />
        </div>
    )
}

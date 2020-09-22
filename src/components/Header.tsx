import React from 'react'
import { useBoardModal, useItemModal } from '../hooks/useModal';
import { addToList } from '../item-context/actions';
import { useItemDispatch } from '../item-context/context';
import { AddBoardModal } from './AddBoardModal';
import AddItemModal from './AddItemModal';
import { Button } from './Button'
import Logo from '../logo.png'
export const Header = () => {
    const { boardModalIsShowing, toggleBoardModal } = useBoardModal();
    const { itemModalIsShowing, toggleItemModal } = useItemModal();
    return (
        <div className="container-fluid">
            <div className="row bg-dark-blue p-2">
                <div className="col-6 pt-2 my-auto ">
                    <h4 className=" text-white">
                        <img src={Logo} alt=""/>
                    </h4>
                </div>
                <div className="col-6 my-auto">
                    <Button icon="plus-circle" buttonClass="primary" float="right" buttonType="" content={"Add new Item"} onClick={toggleBoardModal} />
                    <Button icon="list" buttonClass="warning" float="right" buttonType="" content={"Add new Board"} onClick={toggleItemModal} />

                </div>
            </div>
            <AddItemModal isShowing={boardModalIsShowing} hide={toggleBoardModal} />
            <AddBoardModal isShowing={itemModalIsShowing} hide={toggleItemModal} />
        </div>
    )
}

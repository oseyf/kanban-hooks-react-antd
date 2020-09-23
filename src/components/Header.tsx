import React from 'react'
import { useBoardModal, useItemModal } from '../hooks/useModal';
import { AddBoardModal } from './AddBoardModal';
import AddItemModal from './AddItemModal';
import { Button } from './Button'
import Logo from '../logo.png'
import { Dropdown, Menu } from 'antd';
import { useItemState } from '../item-context/context';
import { TodoItem } from '../item-context/models';
import moment from 'moment';
export const Header = () => {
    const { boardModalIsShowing, toggleBoardModal } = useBoardModal();
    const { itemModalIsShowing, toggleItemModal } = useItemModal();
    const itemList = useItemState();
    const menu = (
        <Menu>
            <Menu.Item>
                <Button icon="plus-circle" buttonClass="primary" float="" buttonType="block" content={"Add new Item"} onClick={toggleBoardModal} />
            </Menu.Item>
            <Menu.Item>
                <Button icon="list" buttonClass="warning" float="" buttonType="block" content={"Add new Board"} onClick={toggleItemModal} />
            </Menu.Item>
        </Menu>
    );
    let notificationCount = 0;



    const notificationList = (
        <Menu className="py-2">
            {itemList.map((item: TodoItem) => {
                var diff = Math.abs(new Date().getTime() - new Date(item.date).getTime());
                var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
                if (diffDays < 5) {
                    notificationCount++
                    return (
                        <Menu.Item>
                            <div className="rounded bg-light col-12 ">
                                <span> <i className="fas fa-info-circle text-danger"></i> <b>{item.title}</b> is {diffDays} days to expire.
                             </span>
                            </div>
                        </Menu.Item>
                    )
                }
            })
            }

        </Menu>
    )

    const notNotification = (
        <Menu className="py-2">
            <Menu.Item>
                <div className="rounded bg-light col-12 ">
                🎉Not notification is here.
                </div>
            </Menu.Item>
        </Menu>
    )

    const notifications = (
        <div>
            {notificationCount > 0 ? notificationList : notNotification}
        </div>
    )


    return (
        <div className="container-fluid">
            <div className="row bg-dark-blue p-2">
                <div className="col-6 pt-2 my-auto ">
                    <h4 className=" text-white">
                        <img src={Logo} alt="" />
                    </h4>
                </div>
                <div className="col-6 my-auto">


                    <Dropdown overlay={menu} className="float-right">
                        <span className="btn btn-light btn-sm">Transactions <i className="fas fa-arrow-circle-down"></i></span>
                    </Dropdown>
                    <Dropdown overlay={notifications} className="float-right mx-2 ">
                        <div>
                            <span className="btn btn-light btn-sm"><i className="fas fa-bell text-warning "></i>
                            </span>
                            {notificationCount > 0 ?
                                <span className="badge badge-danger notification-count"> {notificationCount} </span>
                                : ''}
                        </div>
                    </Dropdown>
                </div>
            </div>
            <AddItemModal isShowing={boardModalIsShowing} hide={toggleBoardModal} />
            <AddBoardModal isShowing={itemModalIsShowing} hide={toggleItemModal} />
        </div>
    )
}

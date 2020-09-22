import { DatePicker, Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';
import { useItemDispatch, useItemState } from '../item-context/context'
import { addToList } from '../item-context/actions';
import moment from 'moment';
import { TodoItem } from '../item-context/models';
import { updateItem } from '../item-context/actions';


const AddItemModal = ({ isShowing, hide, isReadable, dataItem }: { isShowing: boolean, hide: any, addFunc?: any, isReadable?: boolean, dataItem?: TodoItem }) => {
    const [readable, setReadable] = useState(isReadable);
    const [data, setData] = useState(dataItem);
    const [title, setTitle] = React.useState<string>('');
    const [content, setContent] = React.useState<string>('');
    const [date, setDate] = React.useState<Date>(new Date());
    const itemList = useItemState();
    const itemDispatch = useItemDispatch();
    const readableInput = readable ? 'plaintext-input' : '';
    const onSubmitHandler = (event: any) => {
        debugger;
        event.preventDefault();
        console.log(title, content, date)
        if (title !== '' && content !== '' && date !== null) {
            if (isReadable) {
                itemDispatch(
                    updateItem({
                        id: data ? data.id : 99,
                        title: title,
                        content: content,
                        date: date,
                        boardId: data ? data.boardId : 99
                    })
                )
                setReadable(!readable);
            } else {
                itemDispatch(
                    addToList({
                        id: itemList.length > 0 ? itemList[itemList.length - 1].id + 1 : 1,
                        title: title,
                        content: content,
                        date: date,
                        boardId: 1
                    })
                );
            }
            setTitle('');
            setContent('');
            setDate(new Date());
            hide();
        }
    };
    useEffect(() => {
        setTitle(data ? data.title : '');
        setContent(data ? data.content : '');
        setDate(data ? data.date : new Date());
    }, [])
    const editExitsingItem = () => {
        debugger;
        setReadable(!readable)

    }

    return (

        isShowing ? ReactDOM.createPortal(

            <React.Fragment>
                <Modal
                    title="Add New Item to Wishlist"
                    visible={isShowing}
                    onCancel={hide}
                    footer={null}
                >
                    <div className="form-group">
                        {readable ? <span className="font-weight-bold">Title</span> : null}
                        <Input size="large" placeholder='Title'
                            name='title'
                            id='title'
                            value={title}
                            className={readableInput + ''}
                            onChange={event => setTitle(event.target.value)} />
                    </div>
                    <div className="form-group">
                        {readable ? <span className="font-weight-bold">Content</span> : null}
                        <Input size="large" placeholder="Content" name='content'
                            id='content'
                            value={content}
                            className={readableInput}
                            onChange={event => setContent(event.target.value)} />
                    </div>
                    <div className="form-group">
                        {readable ? <span className="font-weight-bold">Date</span> : null}
                        <DatePicker disabled={readable} value={moment(date)} bordered={readable ? !isReadable : undefined} className="mb-3 form-control" onChange={event => setDate(event ? event.toDate() : new Date())} size="large" />

                    </div>

                    {data ?
                        <Button float="" buttonClass="warning" buttonType="block" onClick={readable ? editExitsingItem : onSubmitHandler} content="Edit Item" icon="plus-circle" /> :
                        <Button float="" buttonClass="warning" buttonType="block" onClick={onSubmitHandler} content="Add New Item" icon="plus-circle" />
                    }



                </Modal>
            </React.Fragment>, document.body
        ) : null


    )
}

export default AddItemModal;

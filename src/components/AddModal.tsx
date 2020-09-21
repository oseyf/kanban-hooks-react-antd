import { DatePicker, Input, Modal } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';
import { useItemDispatch, useItemState } from '../item-context/context'
import { addToList } from '../item-context/actions';


const AddModal = ({ isShowing, hide, addFunc }: { isShowing: boolean, hide: any, addFunc: any }) => {
    const [title, setTitle] = React.useState<string>('');
    const [content, setContent] = React.useState<string>('');
    const [date, setDate] = React.useState<Date>(new Date());
    const itemList = useItemState();
    const itemDispatch = useItemDispatch();

    const onSubmitHandler = (event: any) => {
        event.preventDefault();
        console.log(title, content, date)
        if (title !== '' && content !== '' && date !== null) {
            itemDispatch(
                addToList({
                    id: itemList.length + 1,
                    title: title,
                    content: content,
                    date: date,
                    boardId: 1
                })
            );
            setTitle('');
            setContent('');
            setDate(new Date());
            hide();
        }
    };

    return (

        isShowing ? ReactDOM.createPortal(

            <React.Fragment>
                <Modal
                    title="Add New Item to Wishlist"
                    visible={isShowing}
                    onOk={addFunc}
                    onCancel={hide}
                    footer={null}
                >

                   
                    {/* <input
                        type='text'
                        placeholder='Content'
                        name='content'
                        id='content'
                        value={content}
                        className='form-control mt-3'
                        onChange={event => setContent(event.target.value)}
                    /> */}
                    <Input size="large" placeholder="Content" name='content'
                        id='content'
                        value={content}
                        className='form-control mt-3'
                        onChange={event => setContent(event.target.value)} />
                    <Input size="large"   placeholder='Title'
                        name='title'
                        id='title'
                        value={title}
                        className='form-control mt-3'
                        onChange={event => setTitle(event.target.value)}/>
                    <DatePicker className="my-3 form-control" onChange={event => setDate(event ? event.toDate() : new Date())} size="large" />

                    <br />
                    <Button float="" buttonClass="warning" buttonType="block" onClick={onSubmitHandler} content="Add New Item" icon="plus-circle" />
                </Modal>
            </React.Fragment>, document.body
        ) : null


    )
}

export default AddModal;

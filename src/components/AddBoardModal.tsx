import { Input } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React from 'react'
import ReactDOM from 'react-dom';
import { addNewBoard } from '../board-context/actions';
import { useBoardDispatch, useBoardState } from '../board-context/context';
import { Button } from './Button';

export const AddBoardModal = ({ isShowing, hide, addFunc }: { isShowing: boolean, hide: any, addFunc?: any }) => {
    const [name, setName] = React.useState<string>('');
    const boardList = useBoardState();
    const boardDispatch = useBoardDispatch();

    const onSubmitHandler = (event: any) => {
        event.preventDefault();
        if (name !== '') {
            boardDispatch(
                addNewBoard({
                    id: boardList.length + 1 ,
                    name: name
                })
            );
            setName('');
            hide();
        }
    };

    return (

        isShowing ? ReactDOM.createPortal(

            <React.Fragment>
                <Modal
                    title="Add New Board"
                    visible={isShowing}
                    onCancel={hide}
                    footer={null}
                >
                    <Input size="large" placeholder="Board Name" name='name'
                        id='name'
                        value={name}
                        className='mb-3'
                        onChange={event => setName(event.target.value)} />
                    
                    <br />
                    <Button float="" buttonClass="warning" buttonType="block" onClick={onSubmitHandler} content="Add New Item" icon="plus-circle" />
                </Modal>
            </React.Fragment>, document.body
        ) : null


    )
}

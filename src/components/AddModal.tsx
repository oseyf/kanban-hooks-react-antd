import { DatePicker, Modal } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';



const AddModal = ({ isShowing, hide, addFunc }: { isShowing: any, hide: any, addFunc: any }) => {
    const [title, setTitle] = React.useState<string>('');
    const [content, setContent] = React.useState<string>('');
    const [date, setDate] = React.useState<Date>(new Date());
    const onSubmitHandler = (event: any) => {
        event.preventDefault();
        if (title !== '' && content !== '' ) {

            setTitle('');
            setContent('');
            setDate(new Date());
        }
    };

    return (
        isShowing ? ReactDOM.createPortal(
            <React.Fragment>
                <Modal
                    title="Yeni Ekle"
                    visible={isShowing}
                    onOk={addFunc}
                    onCancel={hide}
                >
                    <form onSubmit={onSubmitHandler}>
                        <input
                            type='text'
                            placeholder='Title'
                            name='title'
                            id='title'
                            value={title}
                            className='form-control'
                            onChange={event => setTitle(event.target.value)}
                        />
                        <br />
                        <input
                            type='text'
                            placeholder='Content'
                            name='content'
                            id='content'
                            value={content}
                            className='form-control'
                            onChange={event => setContent(event.target.value)}
                        />
                            <DatePicker className="my-3 form-control" onChange={event => setDate(new Date())} size="large" />

                        <br />
                        <input type='submit' className='btn btn-primary' name='submit' />
                    </form>

                </Modal>
            </React.Fragment>, document.body
        ) : null
    )
}

export default AddModal;

import { useState } from "react";

const CreateJob= ({onAdd}) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if(!title) {
            alert('Please add title!');
            return;
        }
        onAdd({ title, description});

        setTitle('');
        setDescription('');
    }

    return [
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Title</label>
                <input type='text'placeholder='Add Title'
                value={title} onChange={(e) => {
                    setTitle(e.target.value)
                }}/>
            </div>
            <div className='form-control'>
                <label>Description</label>
                <input type='text'placeholder='Description'
                      value={description} onChange={(e) => {
                        setDescription(e.target.value)
                    }}/>
            </div>
            <input className='btn btn-block' type='submit' value='Save Job'/>
        </form>
        
    ]
}
export default CreateJob;
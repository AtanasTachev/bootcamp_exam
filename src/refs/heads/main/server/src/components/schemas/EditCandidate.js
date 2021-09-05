import { useState } from "react";

const EditCandidate= ({onUpdate, candidate}) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();

        if(!firstName) {
            alert('Please add first name!');
            return;
        }
        onUpdate({ firstName, lastName, email});

        setFirstName('');
        setLastName('');
        setEmail('');
    }

    return [

        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>First Name</label>
                <input type='text'
                value={candidate.firstName} onChange={(e) => {
                    setFirstName(e.target.value)
                }}/>
            </div>
            <div  className='form-control'>
                <label>Last Name</label>
                <input type='text'
                      value={candidate.lastName} onChange={(e) => {
                        setLastName(e.target.value)
                    }}/>
            </div>
            <div className='form-control'>
                <label>Email</label>
                <input type='text'
                      value={candidate.email} onChange={(e) => {
                        setEmail(e.target.value)
                    }}/>
            </div>
            <input className='btn btn-block' type='submit' value='Update Candidate'/>
        </form>
        
    ]
}
export default EditCandidate;
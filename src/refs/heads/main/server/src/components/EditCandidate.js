import { useState } from "react";

const EditCandidate= ({onUpdate, id, candidate}) => {
    
    id =  Math.floor(Math.random() * 10000) + 1;
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

        <form key={id} className='add-form' onSubmit={onSubmit}>
            <div key={id+1} className='form-control'>
                <label>First Name</label>
                <input type='text'
                value={candidate.firstName} onChange={(e) => {
                    setFirstName(e.target.value)
                }}/>
            </div>
            <div key={id+2} className='form-control'>
                <label>Last Name</label>
                <input type='text'
                      value={candidate.lastName} onChange={(e) => {
                        setLastName(e.target.value)
                    }}/>
            </div>
            <div key={id+3} className='form-control'>
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
import { useState } from "react";


const CandidateCreate = ({onCreateC}) => {
    // id =  Math.floor(Math.random() * 10000) + 1;
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();

        if(!firstName) {
            alert('Please add first name!');
            return;
        }
        onCreateC({firstName, lastName, email});

        setFirstName('');
        setLastName('');
        setEmail('');
    }

    return [

        <form  className='add-form' onSubmit={onSubmit}>
            <div  className='form-control'>
                <label>First Name</label>
                <input type='text'placeholder='Add First Name'
                value={firstName} onChange={(e) => {
                    setFirstName(e.target.value)
                }}/>
            </div>
            <div  className='form-control'>
                <label>Last Name</label>
                <input type='text'placeholder='Add Last Name'
                      value={lastName} onChange={(e) => {
                        setLastName(e.target.value)
                    }}/>
            </div>
            <div  className='form-control'>
                <label>Email</label>
                <input type='text'placeholder='Add Email'
                      value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }}/>
            </div>
            <input className='btn btn-block' type='submit' value='Save Candidate'/>
        </form>
        
    ]
}
export default CandidateCreate;
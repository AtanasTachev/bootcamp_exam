import { Link } from "react-router-dom";

const Candidates = () => {

    return (
        <>
             <ul>
            <li>
     <Link to='/createJob'>Create Candidate</Link>
            </li>
            <li>
     <Link to='/editJob'>Edit Candidate</Link>
            </li>
            <li>
     <Link to='/deleteJob'>Delete Candidate</Link>
     </li>
     <li>
     <Link to='/'>Go back</Link>
     </li>
     </ul>
        </>)
}

export default Candidates;
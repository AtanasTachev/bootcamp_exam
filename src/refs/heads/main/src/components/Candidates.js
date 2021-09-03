import { Link } from "react-router-dom";

const Candidates = () => {

    return (
        <>
            <ul>
                <li>
                    <Link to='/createCandidate'>Create Candidate</Link>
                </li>
                <li>
                    <Link to='/editCandidate'>Edit Candidate</Link>
                </li>
                <li>
                    <Link to='/deleteCandidate'>Delete Candidate</Link>
                </li>
                <li>
                    <Link to='/'>Go back</Link>
                </li>
            </ul>
        </>)
}

export default Candidates;
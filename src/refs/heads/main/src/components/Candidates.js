import { Link } from "react-router-dom";

const Candidates = () => {

    return (
        <>
            <ul>
            <li>
                    <Link to='/showAllCandidates'>Show All Candidates</Link>
                </li>
                <li>
                    <Link to='/createCandidate'>Create Candidate</Link>
                </li>
                <li>
                    <Link to='/'>Home</Link>
                </li>
            </ul>
        </>)
}

export default Candidates;
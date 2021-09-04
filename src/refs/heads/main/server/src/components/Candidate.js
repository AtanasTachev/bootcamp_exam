import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';

const Candidate = ({ candidate }) => {
    return (
        <div className='reminder'>
            <h3>Full Name: {candidate.firstName} {candidate.lastName}</h3>
            <h3>Email: {candidate.email}</h3>
            <li>
                <Link to='/editCandidate' className='btn' style={{backgroundColor: 'orange'}}>Edit Candidate</Link>
            </li>
            <li>
                <Link to='/deleteCandidate' className='btn' style={{backgroundColor: 'red'}}>Delete Candidate</Link>
            </li>
            {/* <button className='btn' style={{backgroundColor: color, color: 'red'}}>Delete</button> */}
        </div>
    )
}
Candidate.defaultProps = {
    color: 'steelblue'
}

// Candidate.propTypes = {
//     color: PropTypes.string,
//     onDelete: PropTypes.func
// }
export default Candidate;
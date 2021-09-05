import { Link } from "react-router-dom";
import Button from "./Button.js";
// import PropTypes from 'prop-types';

const Candidate = ({ candidate, onDelete, onUpdate }) => {
    return (
        <div className='header'>
            <h5 style={{ color: 'blue' }}>Full Name: </h5>
            <p>{candidate.firstName} {candidate.lastName}</p>
            <h5 style={{ color: 'blue' }}>Email: </h5>
            <p>{candidate.email}</p>
            <Link to='/editCandidate' className='btn' style={{ backgroundColor: 'orange' }} onClick={() => onUpdate(candidate.id)}>Edit Candidate</Link>
            <Button className='btn' style={{ backgroundColor: 'red' }} onClick={() => onDelete(candidate._id)} text='Delete Candidate' />
        </div>
    )
}
// Candidate.defaultProps = {
//     color: 'steelblue'
// }

// Candidate.propTypes = {
//     color: PropTypes.string,
//     onDelete: PropTypes.func
// }
export default Candidate;

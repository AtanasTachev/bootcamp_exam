import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Candidate = ({ firstName, lastName, color, onDelete }) => {
    return (
        <div className='reminder' onClick={onDelete}>
            <h3>{firstName} {lastName}</h3>
            <li>
                <Link to='/editCandidate' className='btn' style={{backgroundColor: color}}>Edit Candidate</Link>
            </li>
            <li>
                <Link to='/deleteCandidate' className='btn' style={{backgroundColor: color}}>Delete Candidate</Link>
            </li>
            <button className='btn' style={{backgroundColor: color, color: 'red'}}>Delete</button>
        </div>
    )
}
Candidate.defaultProps = {
    color: 'steelblue'
}

Candidate.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    color: PropTypes.string,
    onDelete: PropTypes.func
}
export default Candidate;
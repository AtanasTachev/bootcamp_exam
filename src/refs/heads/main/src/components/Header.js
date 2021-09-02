import PropTypes from 'prop-types'
import Button from './Button.js'
import { Link } from "react-router-dom";

const Header = ({title}) => {


    return (
        <header className="header">
            <h1>{title}</h1>
            <Link to='/Jobs'>JOBS</Link>
            <Link to='/Candidates'>CANDIDATES</Link>
            <Link to='/Interviews'>INTERVIEWS</Link>
        </header>
    )
}
Header.defaultProps = {
    title: 'Recruitment tool'
}
Header.propTypes = {
    title: PropTypes.string
}
export default Header;
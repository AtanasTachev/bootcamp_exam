import PropTypes from 'prop-types'
import Button from './Button.js'
import { Link } from "react-router-dom";

const Header = ({title}) => {


    return (
        <header className="header">
            <h1>{title} <p><Link to='/'>Home</Link></p></h1>
            <Link to='/jobs'>JOBS</Link>
            <Link to='/candidates'>CANDIDATES</Link>
            <Link to='/interviews'>INTERVIEWS</Link>
            
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
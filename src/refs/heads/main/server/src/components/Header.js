import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Header = ({title}) => {


    return (
        <header className="header">
            <h1>{title} <p><Link to='/'>Home</Link></p></h1>
            <Link to='/jobsView'>JOBS</Link>
            <Link to='/candidatesView'>CANDIDATES</Link>
            <Link to='/interviewsView'>INTERVIEWS</Link>
            
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
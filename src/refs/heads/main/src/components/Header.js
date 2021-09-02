import PropTypes from 'prop-types'
import Button from './Button.js';

const Header = ({title}) => {


    return (
        <header className="header">
            <h1>{title}</h1>
            <Button />
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
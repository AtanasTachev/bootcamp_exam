import { Link } from "react-router-dom";

const Interviews = () => {

    return (
        <>
            <ul>
                <li>
                    <Link to='/createJob'>Create Interview</Link>
                </li>
                <li>
                    <Link to='/editJob'>Edit Interview</Link>
                </li>
                <li>
                    <Link to='/deleteJob'>Delete Interview</Link>
                </li>
                <li>
                    <Link to='/'>Go back</Link>
                </li>
            </ul>
        </>)
}

export default Interviews;
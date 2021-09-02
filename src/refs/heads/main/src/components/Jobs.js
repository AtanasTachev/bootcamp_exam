import { Link } from "react-router-dom";

const Jobs = () => {

    return (
        <>
        <ul>
            <li>
     <Link to='/createJob'>Create Job</Link>
            </li>
            <li>
     <Link to='/editJob'>Edit Job</Link>
            </li>
            <li>
     <Link to='/deleteJob'>Delete Job</Link>
            </li>
            <li>
     <Link to='/'>Go back</Link>
            </li>
        </ul>
        </>)
}

export default Jobs;
import Candidate from "./Candidate.js";

const Candidates = ({candidates, onDelete, onUpdate}) => {
    // console.log(candidates);
    return (
        <> 
            {candidates.map((candidate, index) => (
                <Candidate key={index} onDelete={onDelete} onUpdate={() => onUpdate(candidate._id)} candidate = {candidate}/>)) }
        </>
    )
}

export default Candidates;

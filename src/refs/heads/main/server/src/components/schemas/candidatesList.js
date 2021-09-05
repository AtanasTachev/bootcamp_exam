import Candidate from "./candidate.js";

const Candidates = ({candidates, onDelete, onUpdate}) => {
    // console.log(candidates);
    return (
        <> 
            {candidates.map((candidate, index) => (
                <Candidate key={index} ondelete={onDelete} onUpdate={onUpdate} candidate = {candidate}/>)) }
        </>
    )
}

export default Candidates;

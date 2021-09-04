import Candidate from "./Candidate.js";

const showAllCandidates = ({candidates, onDelete}) => {
    return (
        <> 
            {candidates.map((candidate, index) => (
                <Candidate key={index} 
                candidate = {candidate}
                onDelete = {onDelete}/>
            ))}
        </>
    )
}

export default showAllCandidates;

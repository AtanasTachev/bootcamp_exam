import Candidate from "./Candidate.js";

const showAllCandidates = (candidates) => {
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

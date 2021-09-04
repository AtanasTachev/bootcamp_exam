import Candidate from "./Candidate.js";

const Candidates = ({candidates}) => {
    // console.log(candidates);
    return (
        <> 
            {candidates.map((candidate, index) => (
                <Candidate key={index} candidate = {candidate}/>)) }
        </>
    )
}

export default Candidates;

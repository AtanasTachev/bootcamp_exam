import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header.js'
import Jobs from './components/Jobs.js'
import CandidatesView from './components/CandidatesView.js'
import Interviews from './components/Interviews.js'
import CreateJob from './components/CreateJob.js'
import EditJob from './components/EditJob.js'
import CreateCandidate from './components/CreateCandidate.js'
import Candidates from './components/Candidates.js'
import EditCandidate from './components/EditCandidate.js'
import { useEffect, useState } from 'react'

function App() {
    const [candidates, setCandidates] = useState([]);
    useEffect(() => {
        const getCandidates = async () => {
            const candidatesFromServer = await getAllCandidates();
            setCandidates(candidatesFromServer)
        }
        getCandidates();
    }, []);

    const getAllCandidates = async () => {
        const res = await fetch('http://localhost:5000/candidates')
        const data = await res.json();
        console.log(data);
        return data;
    }

    const getCandidate = async (id) => {
        const res = await fetch(`http://localhost:5000/candidates/${id}`)
        const data = await res.json();
        return data;
    }

    const createCandidate = async (candidate) => {
        const res = await fetch('http://localhost:5000/candidates', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(candidate)
        })

        const data = await res.json();
        setCandidates([...candidates, data])
    }
    const deleteCandidate = async (id) => {
        const res = await fetch(`http://localhost:5000/candidates/${id}`, {
            method: 'DELETE'
        })
    }

    // const data = 

    return (
        <Router>
            <div className="container">
                <Header />
                <Switch>
                    <Route path='/jobs' component={Jobs} />
                    <Route path='/candidatesView' component={CandidatesView} />
                    <Route path='/candidates' exact render={(props) => (
                        <>
                        {candidates.length > 0 ? <Candidates candidates={candidates}/>:'No candidates to display!'}
                        </>)} />
                    <Route exact path='/createCandidate' onCreateC={createCandidate} component={CreateCandidate} />
                    <Route path='/editCandidate' component={EditCandidate} />
                    <Route path='/interviews' component={Interviews} />
                    <Route path='/createJob' component={CreateJob} />
                    <Route path='/editJob' component={EditJob} />
                </Switch>

            </div>
        </Router>
    );
}


export default App;
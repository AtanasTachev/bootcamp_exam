import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header.js'
import JobsView from './components/JobsView.js'
import CandidatesView from './components/CandidatesView.js'
import InterviewsView from './components/InterviewsView.js'
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
            setCandidates(candidatesFromServer);
        }
        getCandidates();
        // return () => {
        //     console.log('This will be logged on unmount');
        //   };
    }, []);

    const getAllCandidates = async () => {
        const res = await fetch('http://localhost:5000/candidates')
        const data = await res.json();
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
        setCandidates([...candidates, data]);
    }
    
    const candidateToUpdate = undefined; 

    const updateCandidate = async (id) => {
        candidateToUpdate = await getCandidate(id);

        const res = await fetch('http://localhost:5000/candidates/:id', {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(candidateToUpdate)
        })

        const data = await res.json();
        // setCandidates([...candidates, data]);
    }

    const deleteCandidate = async (id) => {
        const res = await fetch(`http://localhost:5000/candidates/${id}`, {
            method: 'DELETE'
        });
        res.status === 200
        ? setCandidates(candidates.filter((candidate) => candidate.id !== id))
        : alert('Error deleting this candidate!')
    }

    // const data = 

    return (
        <Router>
            <div className="container">
                <Header />
                <Switch>
                    <Route path='/jobsView' component={JobsView} />
                    <Route path='/candidatesView' component={CandidatesView} />
                    <Route path='/candidates' exact render={(props) => (
                        <>
                        {candidates.length > 0 ? <Candidates candidates={candidates} onDelete={deleteCandidate}/>:'No candidates to display!'}
                        </>)} />
                    <Route path='/createCandidate' onCreateC={createCandidate} component={CreateCandidate} />
                    <Route path='/editCandidate' onUpdate={updateCandidate} candidate={candidateToUpdate} component={EditCandidate} />
                    <Route path='/interviews' component={InterviewsView} />
                    <Route path='/createJob' component={CreateJob} />
                    <Route path='/editJob' component={EditJob} />
                </Switch>

            </div>
        </Router>
    );
}


export default App;
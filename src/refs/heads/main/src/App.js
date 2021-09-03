import {BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header.js'
import Jobs from './components/Jobs.js'
import Candidates from './components/Candidates.js'
import Interviews from './components/Interviews.js'
import CreateJob from './components/CreateJob.js'
import EditJob from './components/EditJob.js'
import CreateCandidate from './components/CreateCandidate.js'
import ShowAllCandidates from './components/ShowAllCandidates.js'
import EditCandidate from './components/EditCandidate.js'
import { useEffect, useState } from 'react'

function App() {
    const [candidates , setCandidates] = useState([]);
    useEffect( () => {
        const getCandidates = async() => {
            const candidatesFromServer = await fetchCandidates();
            setCandidates(candidatesFromServer)
        }
        getCandidates();
    }, []);

    const fetchCandidates = async () => {
        const res = await fetch('http://localhost:5000/candidates')
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
        } )

        const data = await res.json();
        setCandidates([...candidates, data])
    }
    const deleteCandidate = (id) => {
        const res = await fetch (`http://localhost:5000/candidates/${id}`, {
            method: 'DELETE'
        })
    }

    return (
        <Router>
            <div className="container">
        <Header />
        <Route path='/jobs' component={Jobs}/>
        <Route path='/candidates' component={Candidates}/>
        <Route path='/showAllCandidates' onDelete={deleteCandidate} component={ShowAllCandidates}/>
        <Route exact path='/createCandidate' onCreateC={createCandidate} component={CreateCandidate} />
        <Route path='/editCandidate' component={EditCandidate}/>
        <Route path='/interviews' component={Interviews}/>
        <Route path='/createJob' component={CreateJob}/>
        <Route path='/editJob' component={EditJob}/>


            </div>
        </Router> 
);
}


export default App;
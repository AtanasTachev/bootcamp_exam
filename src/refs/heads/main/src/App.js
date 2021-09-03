import {BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header.js'
import Jobs from './components/Jobs.js'
import Candidates from './components/Candidates.js'
import Interviews from './components/Interviews.js'
import CreateJob from './components/CreateJob.js'
import EditJob from './components/EditJob.js'
import CreateCandidate from './components/CreateCandidate.js'

function App() {
    return (
        <Router>
            <div className="container">
        <Header />
        <Route path='/jobs' component={Jobs}/>
        <Route path='/candidates' component={Candidates}/>
        <Route path='/createCandidate' component={CreateCandidate}/>
        <Route path='/interviews' component={Interviews}/>
        <Route path='/createJob' component={CreateJob}/>
        <Route path='/editJob' component={EditJob}/>


            </div>
        </Router> 
);
}


export default App;
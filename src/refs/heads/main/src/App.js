import {BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header.js'
import Jobs from './components/Jobs.js'
import Candidates from './components/Candidates.js'
import Interviews from './components/Interviews.js'


function App() {
    return (
        <Router>
            <div className="container">
        <Header />
        <Route path='/jobs' component={Jobs}/>
        <Route path='/candidates' component={Candidates}/>
        <Route path='/interviews' component={Interviews}/>
            </div>
        </Router> 
);
}


export default App;
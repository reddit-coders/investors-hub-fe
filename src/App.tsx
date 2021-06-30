import './App.scss'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Welcome from './components/welcome/Welcome'
import Select from './components/selection/Select'
import Information from './components/information/Information'

function App() {
  return (
     <Router>
        <div className="App">
           <Switch>
              <Route path='/' exact component={Welcome} />
              <Route path='/select' component={Select} />
              <Route path='/information' component={Information} />
           </Switch>
      </div>
    </Router>
  )
}

export default App;

import './App.scss'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Welcome from './components/welcome/Welcome'
import Select from './components/selection/Select'

function App() {
  return (
     <Router>
        <div className="App">
           <Switch>
              <Route path='/' exact component={Welcome} />
              <Route path='/select' component={Select} />
           </Switch>
      </div>
    </Router>
  )
}

export default App;

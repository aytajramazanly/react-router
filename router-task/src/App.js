import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Users from './Pages/Users'
function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/users" exact component={Users} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

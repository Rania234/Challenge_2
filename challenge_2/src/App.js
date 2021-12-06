
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from './components/Login';

function App() {
  return (
    <div className="App">
       <Router>
       <Switch>
       <Route exact path="/">
              {/* <Home /> */}
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>


       </Switch>
       </Router>
      
    </div>
  );
}

export default App;

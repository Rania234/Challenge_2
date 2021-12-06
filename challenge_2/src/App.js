
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from './components/Login';
import Hello from "./components/hello/Hello"
import { Provider } from 'react-redux';
import store from "./redux/store"

function App() {
  return (
    <Provider store={store} >
    <div className="App">
      
       <Router>
      
       <Route exact path="/">
             <Hello value="welcome" />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>


     
       </Router>
      
</div> </Provider>)} export default App
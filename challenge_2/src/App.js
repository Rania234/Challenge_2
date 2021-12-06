import Menu from './Components/menu/Menu'
import Hello from './Components/hello/Hello'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

function App() {
  return (
    <div className="app">
     
        <Router>
      
              <Hello value="Welcome to my web site" />
            </Router>
    </div>
  )
}

export default App
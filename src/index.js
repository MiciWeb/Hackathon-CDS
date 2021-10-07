import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage"
import Search from "./components/Search"

const Index = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/search" exact={true} component={Search} />
        </Switch >
      </Router>
    </div>
  )
}


ReactDOM.render(
  <Index />,
  // <App />,
  document.getElementById('root')
);
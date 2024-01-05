import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Info from "./components/Info";
import Project from "./components/Project";
import Contacts from "./components/Contacts";

import "./App.css";

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Info />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/contacts" component={Contacts} />
        </Switch>
      </div>
    </div>
  </div>
);

export default App;

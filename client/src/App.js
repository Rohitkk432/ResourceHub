import { React } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

//components
import Landingpage from "./components/LandingPage/landingpage";
import Loginpage from "./components/LoginPage/loginpage";
import Consolepage from "./components/ConsolePage/consolepage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Landingpage} />
        <Route path="/login" exact component={Loginpage} />
        <Route path="/console" exact component={Consolepage} />
      </Router>
    </div>
  );
}

export default App;

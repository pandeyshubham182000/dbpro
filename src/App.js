import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Notfound from './components/Notfound';
import Newuserform from './components/Newuserform';
import About from './components/About';
import AdmitkardLogo from './AdmitkardLogo';

function App() {
  return (
    <Router>
      <div>
        <AdmitkardLogo/>
        <Switch>
          <Route exact path="/" component={Newuserform} />
          <Route exact path="/about" component={About} />
          <Route component={Notfound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

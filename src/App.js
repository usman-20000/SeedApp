import './App.css';
// import reactRouterDom from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import Cart from './screens/Cart';
import Bill from './screens/Bill';
import Login from './screens/Login';
import SignUp from './screens/SignUp';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/About' component={About}/>
          <Route exa path='/Cart' component={Cart}/>
          <Route exa path='/Bill' component={Bill}/>
          <Route exa path='/Login' component={Login}/>
          <Route exa path='/SignUp' component={SignUp}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// reactRouterDom.render(<App />, document.getElementById('root'));
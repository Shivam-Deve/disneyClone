import { Route, Switch} from 'react-router-dom';
import Login from './components/LoginComponent';
import Menu from './components/MenuComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/menu" component={Menu}/>
      </Switch>
    </div>
  );
}

export default App;

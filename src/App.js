import NavBar from './components/NavBar';
import ShippingForm from './views/ShippingForm'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ListShippings from './views/ListShippings'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <NavBar />
            <ShippingForm />
          </Route>
          <Route path="/view-orders">
            <NavBar />
            <ListShippings />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

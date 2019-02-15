import React, { Component } from 'react';
import InventoryDetails from './Components/InventoryDetails';
import InventoryList from './Components/InventoryList';
import Warehouse from './Components/Warehouse.js'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className='topBarGroup'>
       
        <Router>
          <div>
            <Switch>
              <div >
                <Route path='/warehouses' exact component={ Warehouse } />                
                <Route path='/inventory' exact component={ InventoryList } />                
                <Route path='/warehouses/:id' render={ (props) => { return <InventoryList {...props} {...this.state} /> } }/>                
                <Route path='/inventory/:id' component={ InventoryDetails } />                
                <Route path='/' exact render={() => <Redirect to="/warehouses"/>} />
              </div>
            </Switch>
          </div>
        </Router>
        </div>
    </div>      
    );
  }
}

export default App;

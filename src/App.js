import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import NavBar from './components/navBar';


class App extends Component {
  render() { 
    return (
      <React.Fragment>
      <NavBar />
      <main className="container" >
        <Switch>
          <Route path="/movies" componet={Movies}></Route>
          <Route path="/customers" componet={Customers}></Route>
          <Route path="/rentals" componet={Rentals}></Route>
          <Route path="/not-found" componet={NotFound}></Route>   
          <Redirect from="/" exact to="/movies" />
          <Redirect to="not-found" />
        </Switch>
    
      </main>
      </React.Fragment>
    );
  } 
}
 
export default App;

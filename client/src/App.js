import React, {Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './Components/layout/Navbar';
import Landing from './Components/layout/Landing';
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import Alert from './Components/layout/Alert';


//Redux imports
import {Provider} from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';


if(localStorage.token){
  setAuthToken(localStorage.token);
}


const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);


  return (
    <Provider store = {store}>
      <Router> 
        <Fragment>
          <Navbar />
          <Route exact path="/" component = {Landing} />

          <section className="container">
            <Alert />
            
            <Switch>
              <Route exact path="/register" component = {Register}/>
              <Route exact path="/login" component = {Login}/>
            </Switch>

          </section>

        </Fragment>
      </Router>
    </Provider>
    
  );
}

export default App;

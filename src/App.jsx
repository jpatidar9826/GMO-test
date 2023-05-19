import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import { useAuth } from './shared/hooks/auth-hook';
import { AuthContext } from './shared/context/auth-context';
import Auth from './users/pages/Auth';
import Home from './users/pages/Home';
import AuthFloat from './shared/components/UIElements/AuthFloat';



const App = () => {
  const { token, login, logout, userId } = useAuth();

  let routes;
  if(token){
    routes=(
      <Switch>
        <Route path="/" exact>
          <Auth/>
        </Route>
        <Route path="/home" exact>
          <Home/>
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }else{
    routes=(
      <Switch>
        <Route path="/" exact>
          <Auth/>
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }



  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout
      }}
    >
      <Router>
        <AuthFloat/>
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;

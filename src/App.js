import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() =>{
    const unsubsrcibe = auth.onAuthStateChanged((userAuth) => {
      userAuth ? dispatch(
        login({
        uid: userAuth.uid,
        email: userAuth.email
      })) : dispatch(logout());
    })
    return unsubsrcibe;
  }, [dispatch]);

  return (
    <div className="app">
     
     
     <Router>
       {!user ? (
         <LoginScreen /> ) : (
          <Switch>
          <Route path='/profile'>
            <ProfileScreen />
          </Route>
          <Route exact path="/">
          <HomeScreen />
          </Route>
        </Switch>
       )}
    </Router>
    </div>
  );
}

export default App;

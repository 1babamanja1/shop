import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Homepage from '../Components/Homepage/Homepage';
import Login from '../Components/Login/Login';
import Registration from '../Components/Registration/Registration';

export default function ShopRouter() {
  return (
    // сделать /home защищенным
    // добавить редирект с индекса
    <Router>
      <Route exact path="/home" component={Homepage} />
      <Route exact path="/registration" component={Registration} />
      <Route exact path="/login" component={Login} />
    </Router>
  );
}

// const NavBar = styled.div`
// display: flex;
//   & *{
//     text-decoration: none;
//     margin: 5px;
//   }
// `;

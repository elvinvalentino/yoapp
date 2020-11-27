import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Flash from './components/Flash';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ChatPage from './pages/ChatPage';

const App = () => {
  return (
    <Router>
      <Flash />
      <Route exact path='/' component={Navbar} />
      <Route exact path='/signup' component={Navbar} />
      <Route exact path='/signin' component={Navbar} />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/signup' component={RegisterPage} />
        <Route exact path='/signin' component={LoginPage} />
        <Route exact path='/chat' component={ChatPage} />
      </Switch>
    </Router>
  )
}

export default App;
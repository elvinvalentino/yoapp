import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Flash from './components/Flash';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Chat from './pages/Chat';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Flash />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/signup' component={RegisterPage} />
        <Route exact path='/signin' component={LoginPage} />
        <Route exact path='/chat' component={Chat} />
      </Switch>
    </Router>
  )
}

export default App;
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ChatPage from './pages/ChatPage';
import Flash from './components/Flash';
import SearchModal from './components/SearchModal';
import ProfileModal from './components/ProfileModal';

const App = () => {
  const { isOpen: searchModalIsOpen } = useSelector(state => state.searchModal);
  const { isOpen: profileModalIsOpen } = useSelector(state => state.profileModal);
  return (
    <Router>
      <Route exact path='/' component={Navbar} />
      <Route exact path='/signup' component={Navbar} />
      <Route exact path='/signin' component={Navbar} />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/signup' component={RegisterPage} />
        <Route exact path='/signin' component={LoginPage} />
        <Route exact path='/chat' component={ChatPage} />
      </Switch>
      <Flash />
      {searchModalIsOpen && <SearchModal />}
      {profileModalIsOpen && <ProfileModal />}
    </Router>
  )
}

export default App;
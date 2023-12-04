
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
//import Sponsors from './components/Sponsors/Sponsors';
import Footer from './components/Footer/Footer';
import { users } from "./apis/api"

import './App.scss';

const App = () => {
  const [connectedUser, setConnectedUser] = useState(null);
  const fetchConnectedUser = async () => {
    const { data } = await users.profile();
    setConnectedUser(data)
  }
  useEffect(() => {
    fetchConnectedUser();
  }, [])
  return (
    <>
      <Router>
        <Header connectedUser={connectedUser} />
        <Routes>
          {/* <Route path="/ads" element={<Ads />} /> */}
          <Route path="/signup" element={<Signup connectedUser={connectedUser} />} />
          <Route path="/signin" element={<Signin connectedUser={connectedUser} />} />
          <Route path="/" element={<Home connectedUser={connectedUser} />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;

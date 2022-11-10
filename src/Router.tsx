import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/home/Home';
import NotFound from './pages/errors/NotFound';
import Login from './pages/login/Login';
import Signin from './pages/signin/Signin';
import Profile from './pages/profile/Profile';
import Basic from './pages/profile/Basic';
import Security from './pages/profile/Security';

const Router = () => (
  <Routes>
    <Route path="profile" element={<Profile />}>
      <Route path="security" element={<Security />} />
      <Route path="basic" element={<Basic />} />
      <Route path="" element={<Navigate to="/profile/basic" />} />
    </Route>
    <Route path="/signin" element={<Signin />} />
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Router;

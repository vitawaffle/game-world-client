import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/home/Home';
import NotFound from './pages/errors/NotFound';
import Login from './pages/login/Login';
import Signin from './pages/signin/Signin';

const Router = () => (
  <Routes>
    <Route path="/signin" element={<Signin />} />
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Router;

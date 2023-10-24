// import PrivateRoute from 'guards/PrivateRoute/PrivateRoute';
// import PrivateRoute from 'guards/PrivateRoute/PrivateRoute';
import Layout from 'layouts/Layout';
import Contacts from 'pages/Contacts/Contacts';
import Homepage from 'pages/Homepage/Homepage';
import Login from 'pages/Login/Login';
import Registration from 'pages/Registration/Registration';
// import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// const HomePage = lazy(() => import('../pages/Homepage/Homepage'));
// const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
// const Login = lazy(() => import('../pages/Login/Login'));
// const Registration = lazy(() => import('../pages/Registration/Registration'));
// const PrivateRoute = lazy(() => import('../guards/PrivateRoute/PrivateRoute'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="registration" element={<Registration />} />
    </Routes>
  );
};

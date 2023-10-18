import Layout from 'layouts/Layout';
import Homepage from 'pages/Homepage/Homepage';
import Login from 'pages/Login/Login';
import Registration from 'pages/Registration/Registration';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
      </Route>
    </Routes>
  );
};

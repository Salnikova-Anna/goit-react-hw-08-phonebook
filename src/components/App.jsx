import Layout from 'layouts/Layout';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { refreshThunk } from 'redux/auth/operations';
import { refreshSelector } from 'redux/auth/selector';

const HomePage = lazy(() => import('../pages/Homepage/Homepage'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const Login = lazy(() => import('../pages/Login/Login'));
const Registration = lazy(() => import('../pages/Registration/Registration'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(refreshSelector);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>

      <Route
        path="login"
        element={
          <Suspense>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="registration"
        element={
          <Suspense>
            <Registration />
          </Suspense>
        }
      />
    </Routes>
  );
};

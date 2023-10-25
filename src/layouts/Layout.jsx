import Header from 'components/Header/Header';
import { Suspense } from 'react';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
// import { refreshThunk } from 'redux/auth/operations';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;

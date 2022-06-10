import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/Auth';
import AppBar from './AppBar';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import HomePage from 'Pages/HomePage';

import LoginPage from 'Pages/LoginPage';
import RegisterPage from 'Pages/RegisterPage';
import ContactsPage from 'Pages/ContactsPage';
import NotFoundPage from '../Pages/NotFoundPage';
import Container from './Container';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshingCurrentUser = useSelector(
    authSelectors.getIsRefreshingCurrent
  );
  // console.log(isRefreshingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return isRefreshingCurrentUser ? (
    Loading.dots('Loading ...')
  ) : (
    <Container>
      {Loading.remove()}
      <AppBar />
      <Routes>
        <Route
          path="/goit-react-hw-08-phonebook"
          element={<Navigate to="/" />}
        />
        <Route
          path="/"
          element={
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute restricted>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute restricted>
              <RegisterPage />
            </PublicRoute>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Container>
  );
};

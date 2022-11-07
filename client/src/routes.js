import { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isAuth } from './store/actions/users';
import { Loader } from './utils/tools';

// PUBLIC ROUTES
import MainLayout from './hoc/mainLayout';
import Header from './components/navigation/header';
import Home from './components/home';
import Auth from './components/auth';

// ADMIN ROUTES
import DashboardMain from './components/dashboard/mainDashboard';
import Dashboard from './components/dashboard';
import AuthGuard from './hoc/authGuard';
import AdminArticles from './components/dashboard/articles';
import AdminProfile from './components/dashboard/profile';
import AddArticle from './components/dashboard/articles/edit_add/add';
import EditArticle from './components/dashboard/articles/edit_add/edit';
import Article from './components/articles/article';

const Router = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(isAuth());
  }, []);

  useEffect(() => {
    if (users.auth !== null) {
      setLoading(false);
    }
  }, [users]);
  return (
    <BrowserRouter>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <MainLayout>
            <Routes>
              <Route
                path='/dashboard'
                element={
                  // PROTECTION FOR ADMIN
                  <AuthGuard>
                    <Dashboard />
                  </AuthGuard>
                }
              >
                <Route index element={<DashboardMain />} />
                <Route path='profile' element={<AdminProfile />} />
                <Route path='articles' element={<AdminArticles />} />
                <Route path='articles/add' element={<AddArticle />} />
                <Route
                  path='articles/edit/:articleId'
                  element={<EditArticle />}
                />
              </Route>
              <Route path='/auth' element={<Auth />} />
              <Route path='/' element={<Home />} />
              <Route path='/articles/article/:id' element={<Article />} />
            </Routes>
          </MainLayout>
        </>
      )}
    </BrowserRouter>
  );
};

export default Router;

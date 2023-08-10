import { createRef } from 'react'
import ReactDOM from 'react-dom/client';
import{ createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

import App from './App.jsx';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import UserPage from './pages/UserPage';
import GroupPage from './pages/GroupPage';
import TaskPage from './pages/TaskPage';
import LoginPage from './pages/LoginPage';


const routes = [
  { path: '/', element: <HomePage />, nodeRef: createRef(), },
  { path: 'dashboard', element: <DashboardPage />, nodeRef: createRef(), },
  { path: 'user', element: <UserPage />, nodeRef: createRef(), },
  { path: 'group', element: <GroupPage />, nodeRef: createRef(), },
  { path: 'task', element: <TaskPage />, nodeRef: createRef(), },
  { path: 'login', element: <LoginPage />, nodeRef: createRef(), },
]


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

export default routes
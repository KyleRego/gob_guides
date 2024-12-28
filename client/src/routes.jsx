import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './Login';
import Index from './Index';

export const router = createBrowserRouter([{
    path: '/',
    element: <App />,
    children: [
        { path: '/', element: <Index /> },
        { path: '/login', element: <Login /> }
    ]
}]);

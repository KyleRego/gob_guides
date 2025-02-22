import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './Login';
import Index from './Index';
import Admin from './Admin';
import TheMess from './guides/TheMess';
import Gotr from './guides/Gotr';
import Stars from './guides/Stars';

export const router = createBrowserRouter([{
    path: '/',
    element: <App />,
    children: [
        { path: '/', element: <Index /> },
        { path: '/login', element: <Login /> },
        { path: '/admin', element: <Admin /> },
        { path: '/the-mess', element: <TheMess /> },
        { path: '/gotr-and-stars', element: <Gotr /> },
        { path: '/stars', element: <Stars /> }
    ]
}]);

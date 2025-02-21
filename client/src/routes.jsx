import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './Login';
import Index from './Index';
import Admin from './Admin';
import TheMess from './guides/TheMess';
import GotrStars from './guides/GotrStars';

export const router = createBrowserRouter([{
    path: '/',
    element: <App />,
    children: [
        { path: '/', element: <Index /> },
        { path: '/login', element: <Login /> },
        { path: '/admin', element: <Admin /> },
        { path: '/the-mess', element: <TheMess /> },
        { path: '/gotr-and-stars', element: <GotrStars /> }
    ]
}]);

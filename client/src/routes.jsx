import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './Login';
import Index from './Index';
import Admin from './Admin';
import TheMess from './guides/TheMess';
import Post1 from './posts/Post1';
import ActivityPairings from './guides/ActivityPairings';

export const router = createBrowserRouter([{
    path: '/',
    element: <App />,
    children: [
        { path: '/', element: <Index /> },
        { path: '/login', element: <Login /> },
        { path: '/admin', element: <Admin /> },
        { path: '/the-mess', element: <TheMess /> },
        { path: '/activity-pairings', element: <ActivityPairings /> },
        { path: '/2025/Feb/12', element: <Post1 /> }
    ]
}]);

import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
    return <div id="app" className="bg-dark text-white w-100 min-vh-100 h-100 d-flex flex-column">
      <div className="bg-primary d-flex p-3 justify-content-between">
        <span><Link to="/">Gob guides</Link></span>
        <span><Link to="/login">Login</Link></span>
      </div>
      <div className="flex-grow-1 container">
        <Outlet />
      </div>
      
    </div>;
}

export default App

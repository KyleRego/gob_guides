import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
    return <div id="app" className="bg-black text-white w-100 min-vh-100 h-100 d-flex flex-column">
      <div className="bg-black d-flex p-3 justify-content-between">
        <span><Link to="/">Gob guides</Link></span>
        <span><Link to="/login">Login</Link></span>
      </div>
      <div className="p-4 text-secondary flex-grow-1 container py-2 mb-4">
        <Outlet />
      </div>
      
    </div>;
}

export default App

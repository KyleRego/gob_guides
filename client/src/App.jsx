import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
    return <div id="app" className="bg-dark text-white w-100 d-flex flex-column container p-4">
      <Outlet />
    </div>;
}

export default App

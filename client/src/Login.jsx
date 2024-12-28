import { apiClient } from "./assets/axios";
import { Link } from "react-router-dom";

function Login() {

    function handleLogin(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        const dto = {
            email: formData.get("email"),
            password: formData.get("password")
        }

        apiClient.post("/api/Auth", dto);
    }

    return <div className="container mt-4">
        <form onSubmit={(e) => handleLogin(e)}>
            <div>
                <label htmlFor="email" className="form-label">Email</label>
                <input id="email" name="email" type="text" className="form-control"></input>
            </div>

            <div className="mt-4">
                <label htmlFor="password" className="form-label">Password</label>
                <input id="password" name="password" className="form-control" type="password"></input>
            </div>

            <div className="mt-4">
                <button type="submit" className="btn btn-light w-100">Login</button>
            </div>
            
        </form>

        <div className="mt-4 d-flex justify-content-start">
            <Link to={"/"}>Home</Link>
        </div>
    </div>;
}

export default Login;

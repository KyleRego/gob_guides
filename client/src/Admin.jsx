import { useState } from "react";
import { apiClient } from "./assets/axios";
import { Link } from "react-router-dom";

export default function Admin() {
    const [authResult, setAuthResult] = useState(null);

    async function testAuthState() {
        try {
            setAuthResult(null);
            await apiClient.post("/api/Auth/CheckAuthState");
            setAuthResult("authenticated");
        } catch {
            setAuthResult("unauthenticated");
        }
    }

    function handleLogout() {
        apiClient.post("/api/Auth/Logout");
    }

    return <div>
        <div className="d-flex align-items-center column-gap-3">
            <button type="button" onClick={testAuthState}>
                Test auth state
            </button>

            {authResult !== null &&
                <span>
                    You are {authResult}.
                </span>
            }
            
        </div>

        <div>
            <div className="d-flex justify-content-end">
                <div className="d-flex column-gap-3 align-items-center">
                <Link to="/login">Login</Link>

                <button onClick={handleLogout} className="btn btn-light">
                    Logout
                </button>
                </div>
                
            </div>
        </div>
    </div>;
}

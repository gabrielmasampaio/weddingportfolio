import React, { useState } from "react";
import { authenticate } from "../utils/auth";

export default function LoginScreen({ onLoginSuccess }: { onLoginSuccess: () => void }) {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (!authenticate(password)) {
            onLoginSuccess();
        } else {
            setError("");
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin} className="flex flex-col items-center">
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setError("");
                    }}
                    className="login-input"
                    autoFocus
                />
                <button type="submit" className="login-button">
                    Entrar
                </button>
                {error && <p className="login-error">{error}</p>}
            </form>
        </div>
    );
}

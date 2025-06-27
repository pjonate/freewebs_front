import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css'

const Login = ({ onLogin }) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (user === 'pjonate' && password === '123456'){
            onLogin();
        } else {
            setError('Credenciales incorrectas');
        }
    };

    return (
        <div className="login-container">
            <div className="left-panel">
                <div className="welcome-content">
                    <h1>¡Bienvenido!</h1>
                    {/* Puedes agregar subtítulo o imagen aquí si quieres */}
                </div>

                <div className="register-section">
                    <p>
                        ¿No te has registrado? <Link to="/register">Crea una cuenta</Link>
                    </p>
                </div>
            </div>

            <div className="right-panel">
                <form className="login-form" onSubmit={handleSubmit}>
                <h2>Iniciar Sesión</h2>
                {error && <p className="error">{error}</p>}
                <input
                    type="user"
                    placeholder="Usuario"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
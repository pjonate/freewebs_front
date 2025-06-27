import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Register.css"

const Register = () => {
  return (
    <div className="container-fluid bg-light vh-100">
      {/* Flecha hacia atrás */}
      <Link to="/" className="position-absolute top-0 start-0 m-4 text-white fs-4">
        <i className="bi bi-arrow-left"></i>
      </Link>

      <div className="row h-100">
        {/* Panel izquierdo azul */}
        <div className="col-2 d-none d-md-block bg-dark-blue h-100 p-0"></div>

        {/* Formulario centrado */}
        <div className="col-12 col-md-8 d-flex justify-content-center align-items-center">
          <div className="bg-white p-5 rounded shadow w-100" style={{ maxWidth: '400px' }}>
            <h2 className="mb-4 text-center text-dark blue">Crear cuenta</h2>
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Nombre" required />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" placeholder="Contraseña" required />
              </div>
              <button type="submit" className="btn btn-primary w-100">Registrarse</button>
              <div className="text-center mb-3 text-muted">— o —</div>

              <button type="button" className="btn btn-outline-danger w-100 mb-2">
                <i className="bi bi-google me-2"></i> Registrarse con Google
              </button>

              <button type="button" className="btn btn-outline-primary w-100">
                <i className="bi bi-facebook me-2"></i> Registrarse con Facebook
              </button>
            </form>
          </div>
        </div>

        {/* Panel derecho azul */}
        <div className="col-2 d-none d-md-block bg-dark-blue h-100 p-0"></div>
      </div>
    </div>
  );
};

export default Register;



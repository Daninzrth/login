import React, {useContext} from "react";
import { Link, useHistory} from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const historyHome = useHistory();
  const token = sessionStorage.getItem("token");

  const cerrarSesion = () => {
    sessionStorage.removeItem("token")
    historyHome.push('/')
    setTimeout(() => {window.location.reload()}, 300)
  }
  if (store.permiso) {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <Link to="/">
            <span className="navbar-brand mb-0 h1">Home</span>
          </Link>
          <div className="ml-auto">
		  <Link to="/privada">
            <button className="btn btn-primary mx-2">Area Privada</button>
          </Link>
            <button
              className="btn btn-primary mx-2"
              style={{ marginLeft: "15px" }}
              onClick={cerrarSesion}
            >
              Cerrar Sesión
            </button>
			
          </div>
        </div>
      </nav>
    );
  } else {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Home</span>
        </Link>
        <div className="ml-auto">
          <Link to="/login">
            <button className="btn btn-primary mx-2">Iniciar Sesión</button>
          </Link>
          <Link to="/registro">
            <button className="btn btn-primary">Registrate</button>
          </Link>
        </div>
      </div>
    </nav>
  );}
};

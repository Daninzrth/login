import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { actions } = useContext(Context);
    const token = sessionStorage.getItem("token");
    const history = useHistory();

    useEffect(()=> {
      console.log(
        email, password);
    }, [email, password])

    
    
    return <form className="mx-5 text-center mt-5 mx-5" onSubmit={(e) => { e.preventDefault()}}>
    <h1 className="h3 mb-3 fw-normal">Iniciar Sesión</h1>
    <div className="mx-5">
    <div className="form-floating mx-5">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => {e.preventDefault(); setEmail(e.target.value)}}/>
      <label for="floatingInput">Correo electrónico</label>
    </div>
    <div className="form-floating mx-5 my-3">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => {e.preventDefault(); setPassword(e.target.value)}}/>
      <label for="floatingPassword">Contraseña</label>
    </div>
    <button className="btn btn-lg btn-primary" type="submit"
     onClick={() => {
      actions.login(email, password);
    
      }}>Iniciar Sesión</button>
    <p className="my-3">¿Aún no tienes cuenta? Regístrate</p>
    </div>
    </form>
} 
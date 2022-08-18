import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory} from "react-router-dom";

export const Registro = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nombre, setNombre] = useState("");
    const { store, actions} = useContext(Context);
    const historyLogin = useHistory();

    useEffect(()=> {
      console.log(nombre, email, password);
    }, [nombre, email, password])

    return <form className="mx-5 text-center mt-5 mx-5" onSubmit={(e) => { e.preventDefault()}}>
    <h1 className="h3 mb-3 fw-normal">Registrate</h1>
    <div className="mx-5">
    <div className="form-floating mx-5 my-3">
      <input type="text" className="form-control" id="floatingInput" placeholder="Name" onChange={(e) => {e.preventDefault(); setNombre(e.target.value)}}/>
      <label for="floatingInput">Nombre completo</label>
    </div>
    <div className="form-floating mx-5 my-3">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => {e.preventDefault(); setEmail(e.target.value)}}/>
      <label for="floatingInput">Correo electrónico</label>
    </div>
    <div className="form-floating mx-5 my-3">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => {e.preventDefault(); setPassword(e.target.value)}}/>
      <label for="floatingPassword">Contraseña</label>
    </div>
    <button className="btn btn-lg btn-primary" type="submit"
     onClick={() => {
      actions.registro(nombre, email, password);
      console.log(store.mensajeReg)
      if (store.mensajeReg == 'Registro Exitoso'){
         historyLogin.push('/login')}
     }}>Registrate</button>
    <p className="my-3">¿Ya estas registrado? Inicia Sesión</p>
    </div>
    </form>
} 
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	if (store.permiso) {
		return (<div className="text-center mt-5 mx-5">
			<h1>Hola!</h1>
			<img src="https://verdecora.es/blog/wp-content/uploads/2018/05/saludo-perro.jpg"/>
		</div>)
	}
	else {
	return (
		<div className="text-center mt-5 mx-5">
			<h1>Hola!</h1>
			<img src="https://verdecora.es/blog/wp-content/uploads/2018/05/saludo-perro.jpg"/> <br></br><br></br>
			<Link to="/Login" style={{ textDecoration: "none" }}><button className="btn btn-lg btn-primary mx-3" >Iniciar Sesión</button></Link>
			<Link to="/Registro" style={{ textDecoration: "none" }}><button className="btn btn-lg btn-primary mx-3" >Registrate</button></Link>
		</div>
	);}
};

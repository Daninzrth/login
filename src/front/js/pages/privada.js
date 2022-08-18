import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Profile = () => {
    const {store, actions} = useContext(Context)
    useEffect(() => {
        actions.privado()
    }, [])
    if (store.permiso) {
        return <div className="container text-center">
        <h1>Hola, este es tu espacio privado {store.usuario}</h1>
        <img src="https://live.hsmob.io/storage/images/wakyma.com/wakyma.com_uljix6w.jpg"/>
    </div>
    } else {
        return (
          <h1>404 la pagina no existe</h1>
        );
    }
}
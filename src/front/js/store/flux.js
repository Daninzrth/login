const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      permiso: false,
	  usuario: "",
	  mensajeReg: "",
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      registro: (nombre, email, password) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          nombre: nombre,
          email: email,
          password: password,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          "https://3001-4geeksacade-reactflaskh-g16etxrm4uz.ws-eu62.gitpod.io/signup",
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            alert(result.Mensaje);
			if (result.Mensaje == 'Registro Exitoso'){
				location.href = "/login"};
          })
          .catch((error) => console.log("error", error));
      },

      login: (email, password) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          email: email,
          password: password,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          "https://3001-4geeksacade-reactflaskh-g16etxrm4uz.ws-eu62.gitpod.io/login",
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
			if (result.mensaje == "inicio de sesion correcto"){
				location.href = "/privada"
			} else {
				alert(result.mensaje);
			}
            sessionStorage.setItem("token", result.access_token);
          })
          .catch((error) => console.log("error", error));
      },
      privado: () => {
        var myHeaders = new Headers();
        myHeaders.append(
          "Authorization",
          `Bearer ${sessionStorage.getItem("token")}`
        );
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };

        fetch(
          "https://3001-4geeksacade-reactflaskh-g16etxrm4uz.ws-eu62.gitpod.io/privada",
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {console.log(result); setStore({permiso: result.permiso}); setStore({usuario: result.email})})
          .catch((error) => console.log("error", error));
      },

      getMessage: () => {
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/hello")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;

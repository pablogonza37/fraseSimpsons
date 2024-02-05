import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logosimpson.png";
import { Button, Container } from "react-bootstrap";
import Frases from "./components/Frases";
import { useEffect, useState } from "react";

function App() {
  const [personaje, setPersonaje] = useState({});

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    const respuesta = await fetch(
      "https://thesimpsonsquoteapi.glitch.me/quotes"
    );
    const datos = await respuesta.json();
    setPersonaje(datos[0]);
  };

  return (
    <>
      <Container className="text-center my-5">
        <img src={logo} alt="Logo de los simpson" className="w-50" />
        <Frases personaje={personaje}></Frases>
        <Button variant="dark" onClick={consultarAPI}>
          Obtener frase
        </Button>
      </Container>
    </>
  );
}

export default App;

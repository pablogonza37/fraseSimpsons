import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logosimpson.png";
import { Button, Container, Spinner } from "react-bootstrap";
import Frases from "./components/Frases";
import { useEffect, useState } from "react";

function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      setMostrarSpinner(true);
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      const datos = await respuesta.json();
      setPersonaje(datos[0]);
      setMostrarSpinner(false);
    } catch (error) {
      console.log(error);
    }
  };

  const mostrarComponente = mostrarSpinner ? (
    <div className="my-4">
      <Spinner animation="border" variant="dark" />
    </div>
  ) : (
    <Frases personaje={personaje}></Frases>
  );

  return (
    <>
      <Container className="text-center my-5">
        <img src={logo} alt="Logo de los simpson" className="w-50" />
        {mostrarComponente}
        <Button variant="dark" onClick={consultarAPI}>
          Obtener frase
        </Button>
      </Container>
    </>
  );
}

export default App;

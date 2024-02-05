import { Button, Container,} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'


function App() {
  

  return (
    <>
  <Container className="text-center my-5">
        <img src={logo} alt="Logo de los simpson" className="w-50" />
        <Frase personaje={personaje}></Frase>
        <Button variant="warning" onClick={consultarAPI}>
          Obtener frase
        </Button>
      </Container>
    </>
  )        
}

export default App
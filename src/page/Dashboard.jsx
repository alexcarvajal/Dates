import MyCarousel from "../components/MyCarousel";
import { Link } from "react-router-dom";
import "./../styles/dashboard.css"
function Dashboard () {
  return (
    <div className="container-dash">
    <Link to="/letter" className="buttonLetter"> Entra aquí!</Link>
    <h1> Nuestros bonitos recuerditos </h1>
    <MyCarousel />
    <div className="button-container">
    <Link to ="/home" className="buttonHome">Salir</Link>
    <Link to ="/game" className="buttonGame">Jueguito</Link>
    </div>
    </div>
    
  )
}

export default Dashboard;

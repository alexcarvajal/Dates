import Memory from "../components/Memory";
import { Link } from "react-router-dom";
import "../styles/Game.css"
function Game(){
    return(
        <div className="gameContainer">
           <h1>Encuentra el patrón en nuestras fotitos </h1>
           <br />
            <Memory />
            <Link to ="/home" className="buttonHomeGame">Salir</Link>

        </div>
    )
}

export default Game;
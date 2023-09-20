import "./../styles/Carte.css"
import { Link } from "react-router-dom";
function Carte(){
    return (
        <div className="containerCarte">
      <div className="image-container top-left">
        <img src="https://media.tenor.com/w7O6-Np0itcAAAAM/sanrio-hello-kitty.gif" alt="Imagen 1" />
{/*         <img src="https://media0.giphy.com/media/d68xnF0YQbo42WiKzk/giphy.gif?cid=6c09b9527e8c6cb2808fe6195c35ede5cbfeb36d323c4974&rid=giphy.gif&ct=s" alt="Imagen 2" />
 */}   
      </div>
      <div className="text-container">
        <p className="text">
          Mi bebé preciosa, <br />
          Hoy es un día muy especial, porque estás cumpliendo años, y aunque no puedo estar contigo en persona para celebrar, quiero que sepas que mi corazón está contigo en todo momento.
          Cada vez que pienso en ti, me llegan muchos recuerdos, algunos de los cuales viste antes, quiero que los sigamos llenando juntos. Gracias por cambiar mi vida para bien.
          Quiero que sepas que te amo con todo mi corazón y te mereces el mundo entero y haré mi mejor esfuerzo para dártelo.
          Feliz cumpleaños, mi amor.
          Con todo mi cariño,
          Alex Que te ama
        </p>
      </div>
        
      <div className="image-container bottom-right">
        <div className="BackContainer">
        <Link to = "/dashboard" className="Back">Vuelve a ver nuestras fotitos </Link>
        </div>
     
        <img src="https://media0.giphy.com/media/d68xnF0YQbo42WiKzk/giphy.gif?cid=6c09b9527e8c6cb2808fe6195c35ede5cbfeb36d323c4974&rid=giphy.gif&ct=s" alt="Imagen 3" />
        <img src="https://media.tenor.com/w7O6-Np0itcAAAAM/sanrio-hello-kitty.gif" alt="Imagen 4" />
      </div>
    </div>
  );
}

export default Carte;
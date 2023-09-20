import { useState } from "react"
import Amarilla from './../assets/Amarilla.svg'
import Morada from './../assets/Morada.svg'
import Roja from './../assets/Roja.svg'
import Verde from './../assets/Verde.svg'
import './../styles/cardFlowers.css'
import {SlArrowLeft, SlArrowRight} from 'react-icons/sl'
import { Link } from 'react-router-dom';


function CardsFlowers() {
    const [currentFlower, setCurrentFlower] = useState(0)
    const flowers = [
       {src:Amarilla, link:"/yellow/flower-yellow"},
       {src:Morada,link:"/flower-purple"},
       {src:Roja,link:"/red/flower-red"},
       {src:Verde, link:"/green/flower-green"}
    ]
    const colors = [
        'rgba(255, 255, 0, 0.5)',
        'rgba(198,115,255,0.5)',
        'rgba(255, 0, 0, 0.5)',
        'rgba(0, 255, 0, 0.15)' 
    ]

    const colorstext =[
        'rgb(255, 255, 0)',
        'rgb(87,35,100)',
        'rgb(255, 0, 0)',
        'rgb(0, 255, 0)' 
    ]

    const nextImage = () => {
        setCurrentFlower((prevImage) => (prevImage + 1) % flowers.length);
    };
    const previousImage = () => {
        setCurrentFlower((prevImage) => (prevImage - 1 + flowers.length) % flowers.length);
    };
    return (
    <div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Elige un </h1>
        <h1 className="text" style={{color: colorstext[currentFlower] }}> Color </h1>
    </div>
    <div className="slider-container" style={{backgroundColor: colors[currentFlower] }}>
        <Link to={flowers[currentFlower].link} className="link">
            <img src={flowers[currentFlower].src} alt="Flower" className="slider-image"/> 
        </Link>
        <button onClick={previousImage} className="slider-button previous"> <SlArrowLeft /> </button>
        <button onClick={nextImage} className="slider-button next"> <SlArrowRight /> </button>
    </div>
    </div>
  )
}
export default CardsFlowers
import { useState } from "react";
import { Link } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";
import '../../styles/bubble.css'
function FlowerPurple (){
  const rows = 5;
  const cols = 5;
  const totalBubbles = rows * cols;
  const [bubbles, setBubbles] = useState(
    Array.from({ length: totalBubbles }, () => true)
  );
  const [isImageOpaque, setIsImageOpaque] = useState(true);
  const handleBubbleClick = (index) => {
    const newBubbles = bubbles.slice();
    newBubbles[index] = false;
    setBubbles(newBubbles);
    const allBubblesPopped = newBubbles.every((isVisible) => !isVisible);
    setIsImageOpaque(!allBubblesPopped);
  };
  return (

<div 
    style={{
      display: 'flex',
      flexDirection:'column',
      justifyContent: 'center',
      backgroundColor: 'rgba(198,115,255,0.2)',
      alignItems: 'center',
      height: '100vh',  // Esto asegurará que tome todo el alto de la vista del navegador
    }}> 
      <button className="backbutton">
        <Link to='/yellow'>
          <SlArrowLeft /> 
        </Link>
      </button>
      <h1 style={{ margin: '20px 0 20px 0' }}>Splish Splash!</h1>
    <div
    className="container"
    style={{
      display: "grid",
      gridTemplateRows: `repeat(${rows}, 1fr)`,
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      opacity: isImageOpaque ? 0.5 : 1, 
    }}
  >
    {bubbles.map((isBubbleVisible, index) => (
        <div
          key={index}
          className={isBubbleVisible ? "bubble" : "bubble-popped"}
          onClick={() => handleBubbleClick(index)}
        ></div>
      ))}
    </div>
    </div>
  )
}
export default FlowerPurple




import { useState } from "react";
import { Link } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";
import '../../styles/bubble.css'
import Bubble from "./Bubble";
function FlowerPurple() {
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
    <div>
      <Bubble />
    </div>
  )
}
export default FlowerPurple
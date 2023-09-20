import Home from '../page/Home';
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from '../page/Dashboard';
import Letter from '../page/Letter';
import Game from '../page/Game';
import Gift from '../components/Gift';
import YellowFlowers from '../page/YellowFlowers';
import FlowerYellow from '../components/Flowers/FlowerYellow';
import FlowerPurple from '../components/Flowers/FlowerPurple';
import FlowerRed from '../components/Flowers/FlowerRed';
import FlowerGreen from '../components/Flowers/FlowerGreen';
function App() {
  return(
    <>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />}/>
                <Route path="/dashboard" element={<Dashboard />}/> 
                <Route path="/letter" element ={<Letter />}/>
                <Route path="/game" element = {<Game />} />
                <Route path='/aniversary' element = {<Gift />}/>
                <Route path='/yellow' element = {<YellowFlowers/>} />
                <Route path='/yellow/flower-yellow' element = {<FlowerYellow/>} />
                <Route path='/flower-purple' element = {<FlowerPurple/>} />
                <Route path='/red/flower-red' element = {<FlowerRed/>} />
                <Route path='/green/flower-green' element = {<FlowerGreen/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

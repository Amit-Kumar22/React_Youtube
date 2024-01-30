import React, {useState} from 'react'
import Home from "./Components/Home"
import { Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Navbaar from './Components/Navbaar';
import Embend from './Components/embend';
import Sidebaar from './Components/Sidebaar';
import History from './Components/history';

function App() {
  const [isPageOpen, setIsPageOpen] = useState(true);

  const togglePage = () => {
    setIsPageOpen(!isPageOpen);
  };
  
  function close(){
    setIsPageOpen(false);
  }
  return (
      <div>
      <Navbaar togglePage={togglePage}  />
      <Sidebaar isOpen={isPageOpen} close={close} />
      <Routes>
      <Route path="/Home" element={ <Home close={close}  /> } ></Route>
      <Route path="/embend" element={ <Embend close={close} /> } ></Route>
      <Route path="/" element={ <About close={close} /> } />
      <Route path="/History" element={ <History close={close} /> } ></Route>
     </Routes>    
    </div>
  )
}

export default App

// for searching 
//'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=75&q=query&regionCode=IN&type=video&key=[YOUR_API_KEY]

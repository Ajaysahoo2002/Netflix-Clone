import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/login/Login';
import Register from './Components/register/Register';
import Home from './Components/home/Home';
import Player from './Components/home/Player';
import Movies from './Components/home/Movies';
import TvShows from "./Components/home/TvShows";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/player' element={<Player />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/tvshows' element={<TvShows />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

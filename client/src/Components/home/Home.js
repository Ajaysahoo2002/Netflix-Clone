import React, { useEffect } from 'react'
import "./home.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";  //
import { fetchMovies, getGenres } from '../../Store';
import Slider from '../slider/Slider';
import Navbar from '../navbar/Navbar';
import backMovie from "../../Media/backMovie.jpg"
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import Footer from "../footer/Footer";
const Home = () => {
  const navigate = useNavigate();
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies);
  const dispathch = useDispatch();


  useEffect(() => {
    dispathch(getGenres());
  }, []);
  useEffect(() => {
    if (genresLoaded) {
      dispathch(fetchMovies({ type: "all" }));
    }
  }, [genresLoaded]);

  return (
    <div className='home-page'>
      <Navbar />
      <div className="hero">
        <img src={backMovie} alt="BackgroundImage" className='back-image' />
        <div className="container">
          <div className="description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque perspiciatis officia dolores enim minima asperiores in aliquid illum, </p>
          </div>
          <div className="buttons flex">
            <button className="flex j-center a-center" onClick={() => { navigate("/player") }}>
              <FaPlay />Play
            </button>
            <button className="flex j-center a-center">
              <AiOutlineInfoCircle />More Info
            </button>
          </div>
        </div>
      </div>
      <Slider movies={movies} />
      <Footer />
    </div>
  )
}

export default Home

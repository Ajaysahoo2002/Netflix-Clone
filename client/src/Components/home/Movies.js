import React, { useEffect } from 'react'
import "./movies.css"
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../../Store';
import Navbar from '../navbar/Navbar';
import NotAvailAble from './NotAvailAble';
import Slider from '../slider/Slider';
import SelectGenre from '../genre/SelectGenre';
import Footer from "../footer/Footer";

export default function Movies() {

    const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
    const movies = useSelector((state) => state.netflix.movies);
    const genres = useSelector((state) => state.netflix.genres);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getGenres());
    }, []);

    useEffect(() => {
        if (genresLoaded) dispatch(fetchMovies({ type: "movies" }));
    }, [genresLoaded]);


    return (
        <div className='movies-container'>
            <div className="navbar">
                <Navbar />
            </div>
            <div className="data">
                <SelectGenre genres={genres} type="movie" />
                {
                    movies.length ? <Slider movies={movies} /> : <NotAvailAble />
                }
            </div>
            <div className="movies-footer">
                <Footer />
            </div>

        </div>
    )
}

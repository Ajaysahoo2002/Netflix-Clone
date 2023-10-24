import React, { useEffect } from 'react'
import "./movies.css"
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../../Store';
import Navbar from '../navbar/Navbar';
import NotAvailAble from './NotAvailAble';
import Slider from '../slider/Slider';
import SelectGenre from '../genre/SelectGenre';
import Footer from "../footer/Footer";

export default function TvShows() {

    const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
    const movies = useSelector((state) => state.netflix.movies);
    const genres = useSelector((state) => state.netflix.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres());
    }, []);

    useEffect(() => {
        if (genresLoaded) dispatch(fetchMovies({ type: "tv" }));
    }, [genresLoaded]);


    return (
        <div className='movies-container'>
            <div className="navbar">
                <Navbar />
            </div>
            <div className="data">
                <SelectGenre genres={genres} type="tv" />
                {
                    movies.length ? <Slider movies={movies} /> : <NotAvailAble />
                }
            </div>
            <div className="movies-footer">
                <Footer/>
            </div>

        </div>
    )
}

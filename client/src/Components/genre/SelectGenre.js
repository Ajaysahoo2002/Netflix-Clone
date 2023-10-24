import React from 'react'
import "./selectGenre.css";
import { useDispatch } from 'react-redux'
import { fetchDataByGenre } from '../../Store'


export default function SelectGenre({ genres, type }) {
  const dispatch = useDispatch()
  return (
    <div className="genre-container">
      <select className="flex" onChange={(e) => { dispatch(fetchDataByGenre({ genre: e.target.value ,type})) }}>
        {genres.map((genre) => {
          return (
            <option value={genre.id} key={genre.id}>
              {genre.name}
            </option>
          );
        })}
      </select>
    </div>

  )
}

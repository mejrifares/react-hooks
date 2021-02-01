import React from 'react'
import { Link, Router } from 'react-router-dom'
import MovieCard from './MovieCard'

const MovieList =({movies}) => {
    return (
        <>


            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
            }}>
            {movies.map((el, i)=>(<MovieCard el={el} />
            ))}
            </div>

        </>
    )
}

export default MovieList

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Details = ({ movies, match }) => {
    const [details, setDetails] = useState({})

    useEffect(() => {
        setDetails(movies.find((details) => details.id === Number(match.params.id)))
    })


    return (
        <div>
            <img width="400px" src={details.image} />
            <div style={{color:'#fff', margin:'30px 0 30px 0'}}>
                {details.description}
            </div>

            <Link to="/">
                <button style={{ height: '40px' }} className="btn btn-primary">Back to the Home</button>
            </Link>

        </div>
    )
}

export default Details

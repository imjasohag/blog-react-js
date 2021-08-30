import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogItem({ title, des,id }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{des}</p>
            <Link to={`/blogs/details/${id}`} >Read More</Link>
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogItem({ title, des,ke }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{des}</p>
            <Link to={`/blogs/details/${ke}`} >Read More</Link>
        </div>
    )
}

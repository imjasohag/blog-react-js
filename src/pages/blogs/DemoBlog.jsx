import React from 'react'
import { Link } from 'react-router-dom'

export default function DemoBlog({ title, body,id}) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <Link to={`/details/${id}`} >Read more</Link>
        </div>
    )
}

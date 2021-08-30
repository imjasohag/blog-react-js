import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Heading() {
    return (
        <div>
            <ul>
                <li><NavLink exact to='/'>HOME</NavLink></li>
                <li><NavLink exact to='/about' >ABOUT</NavLink></li>
            <li><NavLink exact to='/blogs' >BLOGS</NavLink></li>
            </ul>
        </div>
    )
}

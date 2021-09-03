import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Heading() {
    return (
        <>
            <ul>
                <li>
                    <NavLink exact to='/'>HOME</NavLink>
                    <NavLink exact to='/about'>ABOUT</NavLink>
                    <NavLink exact to='/blog'>BLOG</NavLink>
                </li>
            </ul>
        </>
    )
}


import React, { useState, useEffect } from 'react'

export default function TestUseEffect() {

    //1. api call -> onMount/onLoad
    useEffect(() => {
        console.log("use effeeect with-> [] ");
    }, [])


    const [s, setS] = useState("")

    //2. 
    useEffect(() => {
        console.log("use effeeect with-> [s] ");
    }, [s])


    return (
        <div>
            effect
            <h1>{s}</h1>


            <button onClick={() => {
                setS("" + Math.random())
            }}>s change</button>
        </div>
    )
}

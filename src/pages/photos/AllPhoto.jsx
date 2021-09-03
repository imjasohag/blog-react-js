import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function AllPhoto() {

    const [list, setList] = useState([])

    //
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(res => {
                const data = res.data.slice(0, 10)
                if (data.length > 0) {
                    setList(data)
                }
            }).catch(e => {
                console.log(e);
            })
    }, [])



    return (
        <div>
            <h1>Images</h1>
            {
                list.map(item => {
                    return <div key={item.id}>
                        <h3>{item.title}</h3>
                        <img src={item.url} alt="" style={{ width: 50, height: 50 }} />
                        <Link to={"/img/" + item.id}>read more</Link>
                    </div>
                })
            }
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import post from '../../posts.json'

export default function SingleBlog() {

    const { id } = useParams()

    const [item, setItem] = useState({})


    useEffect(
        () => {
            //load the full post using its ID, from somewhere...
            const arr = post.filter(item => {
                if (item.id == id) {
                    return true
                } else {
                    return false
                }
            })
            if (arr.length > 0) {
                const single = arr[0]
                setItem(single)
            }


        }, []
    )

    return (
        <div>
            <h1>{item.title}</h1>
            <h1>{item.body}</h1>
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import posts from '../../posts.json'

export default function BlogItems() {
    const { id } = useParams()
    const [blog, setBlog] = useState({
        title: '',
        body: ''
    })

    useEffect(() => {
        const arr = posts.filter(item => {
            if (item.id == id) {
                return true;
            } else {
                return false;
            }
        })
        console.log(arr);

        if (arr.length > 0) {
            setBlog(arr[0])
        }

    }, [])

    return (
        <>
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
        </>
    )
}

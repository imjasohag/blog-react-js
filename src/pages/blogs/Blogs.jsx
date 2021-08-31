import React from 'react'
import Heading from '../../Heading';

import post from '../../posts.json'
import BlogItem from './BlogItem';


export default function Blogs() {
    return (
        <>

            <Heading />

            
            {post.map((item) => {
                return (<BlogItem key={item.id} ke={item.id} title={item.title} des={item.body}/>)
            })}
        
            

        </>
    )
}

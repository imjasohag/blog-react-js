import React from 'react'
import Heading from './../Heading';
import posts from '../../posts.json'
import DemoBlog from './DemoBlog';

export default function Blogs() {
    console.log(posts);
    return (
        <>
            <Heading/>
            {posts.map((item)=>{
                return <DemoBlog key={item.id} id={item.id} title={item.title} body={item.body}/>
            })}
            
            
        </>
    )
}

import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/blogs/Blogs';
import BlogItems from './pages/blogs/BlogItems';


export default function Router () {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/about' component={About}></Route>
                    <Route exact path='/blog' component={Blogs}></Route>
                    <Route path='/details/:id' component={BlogItems}></Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}

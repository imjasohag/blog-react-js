import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blogs from './pages/blogs/Blogs';
import SingleBlog from './pages/blogs/SingleBlog';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/about' component={About}></Route>
                <Route exact path='/blogs' component={Blogs}></Route>
                <Route exact path='/blogs/details/:id' component={SingleBlog}></Route>
            </Switch>
        </BrowserRouter>
    )
}

import React from 'react';
import Nav from './blog/Nav';
import Content from './blog/Content';

function Blog() {
    return (
        <div className='container__blog'>
            <Nav />
            <Content />
        </div>
    )
}

export default Blog;

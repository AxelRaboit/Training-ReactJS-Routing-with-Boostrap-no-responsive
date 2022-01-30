import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Marketing from './pages/services/marketing/Marketing';
import Development from './pages/services/development/Development';
import Services from './pages/services/Services';

function Content() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />}>
                <Route path='/services/marketing' element={<Marketing />} />
                <Route path='/services/development' element={<Development />} />
            </Route>
        </Routes>
    );
}

export default Content;

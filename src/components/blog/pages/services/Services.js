import React, { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Services() {
    return (
        <Fragment>
            <div className='m-3'>
                <h1 className='text-light'>Welcome to the Services page</h1>
                <p className='text-light'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus totam, consequatur ipsum sequi voluptatem deleniti inventore vero a illum et necessitatibus, velit doloremque quibusdam illo odio, consectetur blanditiis ab laboriosam!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus totam, consequatur ipsum sequi voluptatem deleniti inventore vero a illum et necessitatibus, velit doloremque quibusdam illo odio, consectetur blanditiis ab laboriosam!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus totam, consequatur ipsum sequi voluptatem deleniti inventore vero a illum et necessitatibus, velit doloremque quibusdam illo odio, consectetur blanditiis ab laboriosam!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus totam, consequatur ipsum sequi voluptatem deleniti inventore vero a illum et necessitatibus, velit doloremque quibusdam illo odio, consectetur blanditiis ab laboriosam!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus totam, consequatur ipsum sequi voluptatem deleniti inventore vero a illum et necessitatibus, velit doloremque quibusdam illo odio, consectetur blanditiis ab laboriosam!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus totam, consequatur ipsum sequi voluptatem deleniti inventore vero a illum et necessitatibus, velit doloremque quibusdam illo odio, consectetur blanditiis ab laboriosam!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus totam, consequatur ipsum sequi voluptatem deleniti inventore vero a illum et necessitatibus, velit doloremque quibusdam illo odio, consectetur blanditiis ab laboriosam!
                </p>
            </div>
            
            <div className='mx-2 my-5'>
                <Link className='m-2 text-light' to='/services/marketing'>Service Marketing</Link>
                <Link className='m-2 text-light' to='/services/development'>Service Developpement</Link>
            </div>

            <div>
                <Outlet />
            </div>
        </Fragment>
    );
}
import React from 'react';
import Navbar from '../components/Navbar';
import Products from './Products';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className='container space-y-2 mx-auto'>
        <Navbar></Navbar>
        <Products></Products>
        <Footer></Footer>
        </div>
    );
};

export default Home;
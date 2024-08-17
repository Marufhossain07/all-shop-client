import React from 'react';
import Navbar from '../components/Navbar';
import Products from './Products';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className=' space-y-2'>
        <Navbar></Navbar>
        <Products></Products>
        <Footer></Footer>
        </div>
    );
};

export default Home;
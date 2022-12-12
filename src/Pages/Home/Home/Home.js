import React from 'react';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Projects from '../../Projects/Projects';
import Footer from '../../Shared/Footer/Footer';
import { Header } from '../../Shared/Header/Header';
import { Hero } from '../Hero/Hero';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
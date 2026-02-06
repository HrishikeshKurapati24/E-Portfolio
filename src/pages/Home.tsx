import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Contact />
        </>
    );
};

export default Home;
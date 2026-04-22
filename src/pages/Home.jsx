import React from 'react';
import Hero from '../components/Hero';
import ClientsMarquee from '../components/ClientsMarquee';
import About from '../components/About';
import Services from '../components/Services';
import FeaturedProjects from '../components/FeaturedProjects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <ClientsMarquee />
      <About />
      <Services />
      <FeaturedProjects />
      <Contact />
    </div>
  );
};

export default Home;

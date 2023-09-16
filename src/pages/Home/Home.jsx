import React from 'react';
import Banner from './Banner';
import Results from './Results';
import Revolution from './Revolution';

const Home = () => {
  return (
    <section id="home">
      <Banner/>
      <Results/>
      <Revolution/>
    </section>
  );
};

export default Home;
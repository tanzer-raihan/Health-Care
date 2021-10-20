import React from 'react';
import Banner from '../Carousel/Banner';
import Motivs from '../Motivs/Motivs';
import Services from '../Services/Services';
import WhyToUs from '../WhyToUs/WhyToUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
          <Services></Services>
          <Motivs></Motivs>
          <WhyToUs></WhyToUs>
        </div>
    );
};

export default Home;
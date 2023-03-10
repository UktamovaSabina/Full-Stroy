import React from 'react';
import './About.scss';
import Container from '../../utils/Container';
import AboutImg from '../../assets/images/about/about.png';

const About = () => {
  return (
    <section className='about-section'>
      <Container>
        <h3>about</h3>
        <img src={AboutImg} alt="room" />
      </Container>
    </section>
  )
}

export default About
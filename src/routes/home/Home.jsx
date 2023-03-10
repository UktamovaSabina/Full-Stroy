import React from 'react';
import './Home.scss';
import Container from '../../utils/Container';
import DreamRoom from '../../assets/images/home/dream.png';
import Projects from '../projects/Projects';
import About from '../about/About';
import Posts from '../posts/Posts';
import Contact from '../contact/Contact';

const Home = () => {
  return (
    <>
      <section className='dream-section'>
        <Container>
          <h3>orzularingiz biz bilan</h3>
          <img src={DreamRoom} alt="dream room" />
        </Container>
      </section>
      <Projects />
      <About />
      <Posts />
      <Contact />
    </>
  )
}

export default Home
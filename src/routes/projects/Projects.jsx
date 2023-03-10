import React from 'react';
import './Projects.scss';
import Container from '../../utils/Container';
import Room1 from '../../assets/images/projects/room1.png';
import Room2 from '../../assets/images/projects/room2.png';
import Room3 from '../../assets/images/projects/room3.png';
import Room4 from '../../assets/images/projects/room4.png';
import Room5 from '../../assets/images/projects/room5.png';
import Room6 from '../../assets/images/projects/room6.png';

const Projects = () => {
  return (
    <section className='projects-section'>
      <Container>
        <h3>our projects</h3>
        <div className='images-wrapper'>
          <div className='img-wrapper'>
            <img src={Room1} alt="room-1" />
            <button>exteryer design</button>
          </div>
          <div className='img-wrapper'>
            <img src={Room2} alt="room-2" />
            <button>exteryer design</button>
          </div>
          <div className='img-wrapper'>
            <img src={Room3} alt="room-3" />
            <button>exteryer design</button>
          </div>
          <div className='img-wrapper'>
            <img src={Room4} alt="room-4" />
            <button>exteryer design</button>
          </div>
          <div className='img-wrapper'>
            <img src={Room5} alt="room-5" />
            <button>exteryer design</button>
          </div>
          <div className='img-wrapper'>
            <img src={Room6} alt="room-6" />
            <button>exteryer design</button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Projects
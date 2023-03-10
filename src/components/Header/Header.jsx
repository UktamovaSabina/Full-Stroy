import React, { useRef } from 'react';
import './Header.scss';
import Container from '../../utils/Container';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';

const Header = () => {
  const navbar = useRef();
  const navigate = useNavigate();

  function showNavbar() {
    navbar.current.classList.remove('d-none')
  }

  function closeNavbar() {
    navbar.current.classList.add('d-none')
  }

  function showContact() {
    navigate('/contact')
    navbar.current.classList.add('d-none')
  }

  let location = document.location.pathname;

  return (
    <header>
      <Container>
        <div className='header-wrapper'>
          <a href="/"><Logo /></a>
          <ul className='navbar'>
            <li><Link to='/' className={location === '/' ? 'underlined' : ''}>Home</Link></li>
            <li><Link to='/about' className={location === '/about' ? 'underlined' : ''}>About</Link></li>
            <li><Link to='/projects' className={location === '/projects' ? 'underlined' : ''}>Projects</Link></li>
            <li><Link to='/posts' className={location === '/posts' ? 'underlined' : ''}>Posts</Link></li>
            <li><Link to='/contact' className={location === '/contact' ? 'underlined' : ''}>Contact</Link></li>
          </ul>
          <button className='contact-btn' onClick={showContact}>Contact</button>
          <div className='burger' onClick={showNavbar}>
            <span></span>
            <span></span>
          </div>

          <div className='navbar-modal d-none' ref={navbar}>
            <div className='modal-top'>
              <h2>FULLSTROY</h2>
              <GrClose className='close-btn' onClick={closeNavbar} />
            </div>
            <ul className='modal-navbar'>
              <li><Link onClick={closeNavbar} to={'/'}>Home</Link></li>
              <li><Link onClick={closeNavbar} to={'/about'}>About</Link></li>
              <li><Link onClick={closeNavbar} to={'/projects'}>Projects</Link></li>
              <li><Link onClick={closeNavbar} to={'/posts'}>Posts</Link></li>
              <li><Link onClick={closeNavbar} to={'/contact'}>Contact</Link></li>
            </ul>
            <button onClick={showContact}>Contact</button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
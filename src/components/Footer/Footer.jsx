import React from 'react';
import Container from '../../utils/Container';
import './Footer.scss';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { BsTelegram, BsInstagram, BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="footer-wrapper">
          <Logo className='logo' />
          <div className='contact-icons'>
            <a href="https://telegram.com"><BsTelegram className='icon' /></a>
            <a href="https://instagram.com"><BsInstagram className='icon' /></a>
            <a href="https://facebook.com"><BsFacebook className='icon' /></a>
          </div>
          <a className='logo-text' href='/'>Fullstroy</a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
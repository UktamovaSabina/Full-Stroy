import React from 'react';
import './Contact.scss';
import Container from '../../utils/Container';

const Contact = () => {
  return (
    <section className='contact-section'>
      <Container>
        <h3>contact</h3>
        <div className='contact-wrapper'>
          <ul className='contact-info'>
            <li>
              <h5>Manzil</h5>
              <p>Beruniy metro archa ko'cha 12-a uy.</p>
            </li>
            <li>
              <h5>Telefon</h5>
              <a href="tel:998940994001">94 099 4001</a>
            </li>
            <li>
              <h5>Bog'lanish</h5>
              <p>9 : 00 - 18 : 00 gacha</p>
            </li>
          </ul>
          <iframe className='location-frame' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4282.789176170643!2d69.27579832809147!3d41.32818793039947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bc9e65018a5%3A0x2a8d7a33ac3b20a0!2sAZIZJON%20UY!5e0!3m2!1sru!2s!4v1678464584887!5m2!1sru!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='location of the building'></iframe>
        </div>
      </Container>
    </section>
  )
}

export default Contact
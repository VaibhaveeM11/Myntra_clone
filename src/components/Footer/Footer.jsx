import React from 'react';
import { Container, HorizontalLine } from './Footer.styled';

function Footer () {
  return (
    <Container>
      <div>
        <h5>POPULAR SEARCHES</h5>
        <HorizontalLine />
      </div>
      <div>
        <h5>Myntra</h5>
        <HorizontalLine />
      </div>
      <div>
        <p>In case of any concern, Contact Us</p>
      </div>
    </Container>
  );
}

export default Footer;

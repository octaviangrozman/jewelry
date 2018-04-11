import React from 'react';
import styled from 'styled-components';

import { Header, Avatar } from '../../components';

import {
  Container,
  AboutContainer,
  P,
  H1
} from './Styled';


function About(props) {
  return (
    <div>
      <Header dark />
      <Container>
        <AboutContainer center>
          <H1>ABOUT US</H1>
          <Avatar src="https://financialpostcom.files.wordpress.com/2015/06/donald-trump1.jpg" />
          <P center>
            Contrary to popular belief, Lorem Ipsum is not simply random text
            It is a long established fact that a reader will be distracted by the readable content.
            Contrary to popular belief, Lorem Ipsum is not simply random text, that a reader will be distracted by the readable content.
            Contrary to popular belief, Lorem Ipsum is not simply random text
          </P>
          <P center>
            It is a long established fact that a reader will be distracted by the readable content.
            Contrary to popular belief, Lorem Ipsum is not simply random text
            It is a long established fact that a reader will be distracted by the readable content.
            Contrary to popular belief, Lorem Ipsum is not simply random text, that a reader will be distracted by the readable content.
          </P>
        </AboutContainer>
      </Container>
    </div>
  );
}

export default About;

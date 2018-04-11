import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../styles';

import {
  Header,
  Container as ContainerBase,
  H1 } from '../../components';

const CallContainer = styled(ContainerBase)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 100px;
  background: #2f2f2f;
`;

const CallTitle = styled(H1)`
  text-transform: uppercase;
  font-size: 50px;
  padding: 10px 20px;
  color: #fff;
  border: 2px solid ${COLORS.DARK_BEIGE};
`


function Contact(props) {
  return (
    <div>
      <Header dark />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2719.745876771775!2d28.8288095153904!3d47.02559297915045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sdk!4v1493849619833"
        width="100%"
        height="500"
        frameBorder="0"
        allowFullScreen
      />
      <CallContainer>
        <CallTitle center>
          CALL US TO MAKE AN ORDER <br />
          +373 (69) 2323 233
        </CallTitle>
      </CallContainer>
    </div>
  );
}

export default Contact;

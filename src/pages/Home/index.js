import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import MakeOrder from '../../components/MakeOrder';
import { Wrapper, JewelsContainer, TitleContainer, AboutContainer, AboutInnerContainer } from './Container';
import { Header, Container, Avatar, JewelList } from '../../components';
import Title from './Title';
import BrandButton from './Button';
import { P, H1 } from './Text';

function Home(props) {
  return(
    <Wrapper>
      <Header absolute />
      <TitleContainer>
        <Title center> Best Quality </Title>
      </TitleContainer>
      <Container center>
      <JewelsContainer>
        <H1 center> OUR BEST JEWELS </H1>
        <JewelList jewels={props.jewels.slice(0,4)} baseUrl={'/jewels'} isHomePage searchValue="" />
      </JewelsContainer>
        <Link to="/jewels">
          <BrandButton>See All Jewels</BrandButton>
        </Link>
      </Container>
      <AboutContainer>
        <AboutInnerContainer center>
          <H1 center>ABOUT US</H1>
          <Avatar src="https://image.freepik.com/free-photo/cheerful-businessman-in-eyeglasses-in-office_1262-3710.jpg" />
          <P center>
            Contrary to popular belief, Lorem Ipsum is not simply random text
            It is a long established fact that a reader will be distracted by the readable content.
            Contrary to popular belief, Lorem Ipsum is not simply random text, that a reader will be distracted by the readable content.
          </P>
        </AboutInnerContainer>
      </AboutContainer>
      <MakeOrder />
    </Wrapper>
  );
}

export default Home;

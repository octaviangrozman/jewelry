import React from 'react';
import { InnerContainer } from './Container';
import Footer from '../components/layout/Footer';

const Layout = (props) => {
  return (
    <div>
      <InnerContainer>
        {props.children}
      </InnerContainer>
      <Footer />
    </div>
  );
}

export default Layout;

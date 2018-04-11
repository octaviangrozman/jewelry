import expect from 'expect';
import { render, mount } from 'enzyme';
import React from 'react';

import Img from './index';

describe('<Img />', () => {
  const alt = 'test';
  const src = 'test';

  it('should render an img element', () => {
    const renderedComponent = render(<Img src={src} alt={alt} />);
    expect(renderedComponent.find('img').length).toEqual(1);
  });

  it('should adopt a valid alt attribute', () => {
    const renderedComponent = mount(<Img src={src} alt={alt} />);
    expect(renderedComponent.find('img').prop('alt')).toEqual(alt);
  });

  it('should adopt a valid src attribute', () => {
    const renderedComponent = mount(<Img src={src} alt={alt} />);
    expect(renderedComponent.find('img').prop('src')).toEqual(src);
  });

  it('should have a className attribute', () => {
    const renderedComponent = mount(<Img src={src} className={'test'} alt={alt} />);
    expect(renderedComponent.find('img').prop('className')).toExist();
  });


  it('should not adopt an invalid attribute', () => {
    const renderedComponent = mount(<Img src={src} attribute={'test'} alt={alt} />);
    expect(renderedComponent.find('img').prop('attribute')).toNotExist();
  });
});

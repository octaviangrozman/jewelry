import expect from 'expect';
import { render, mount } from 'enzyme';
import React from 'react';

import Avatar from '../index';

describe('<Avatar />', () => {
  const src = 'https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png';

  it('should render an img element', () => {
    const renderedComponent = render(<Avatar src={src} />);
    expect(renderedComponent.find('img').length).toEqual(1);
  });

  it('should adopt a valid alt attribute', () => {
    const alt = 'avatar';
    const renderedComponent = mount(<Avatar alt={alt} src={src} />);
    expect(renderedComponent.find('img').prop('alt')).toEqual(alt);
  });

  it('should adopt a valid src attribute', () => {
    const renderedComponent = mount(<Avatar src={src} />);
    expect(renderedComponent.find('img').prop('src')).toEqual(src);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = mount(<Avatar attribute={'test'} src={src} />);
    expect(renderedComponent.find('img').prop('attribute')).toEqual(null);
  });
});

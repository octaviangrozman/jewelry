import expect from 'expect';
import { render, mount } from 'enzyme';
import React from 'react';

import Link from '../index';

const href = 'http://google.com/';
const children = (<h1>Test</h1>);


describe('<Link />', () => {
  it('should render an <a> tag', () => {
    const renderedComponent = render(<Link href={href}>{children}</Link>);
    expect(renderedComponent.find('a').length).toEqual(1);
  });

  it('should have an valid href attribute', () => {
    const renderedComponent = render(<Link href={href}>{children}</Link>);
    expect(renderedComponent.find('a').prop('href')).toEqual(href);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = mount(<Link attribute={'test'} href={href}>{children}</Link>);
    expect(renderedComponent.find('a').prop('attribute')).toNotExist();
  });
});

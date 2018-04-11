import expect from 'expect';
import { mount } from 'enzyme';
import React from 'react';

import Button from '../index';

const orange = true;
const onClick = () => {};
const children = (<span>Test</span>);
const renderComponent = (props = {}) => mount(
  <Button {...props}>
    {children}
  </Button>
);

describe('<Button />', () => {
  it('should render a button element', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('button').length).toEqual(1);
  });

  it('may receive onClick and orange props', () => {
    const renderedComponent = renderComponent({ onClick, orange });
    expect(renderedComponent.prop('onClick')).toExist();
    expect(renderedComponent.prop('orange')).toExist();
  });

  it('should render its children', () => {
    const renderedComponent = renderComponent({ onClick, orange });
    expect(renderedComponent.prop('children')).toEqual(children);
  });
});

import { shallow, mount } from 'enzyme';
import expect from 'expect';
import React from 'react';

import Wrapper from '../Wrapper';

describe('Wrapper', () => {
  it('should render a "div" tag', () => {
    const renderedComponent = shallow(<Wrapper />);
    expect(renderedComponent.find('div').length).toEqual(1);
  });

  it('should receive an "extended" prop', () => {
    const extended = false;
    const renderedComponent = mount(<Wrapper extended={extended} />);
    expect(renderedComponent.prop('extended')).toEqual(extended);
  });
});

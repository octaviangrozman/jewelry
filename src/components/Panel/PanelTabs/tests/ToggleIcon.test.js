import { shallow, mount } from 'enzyme';
import expect from 'expect';
import React from 'react';

import ToggleIcon from '../ToggleIcon';

describe('<ToggleIcon />', () => {
  it('should render a "span" tag', () => {
    const renderedComponent = shallow(<ToggleIcon />);
    expect(renderedComponent.find('span').length).toEqual(1);
  });

  it('should receive "extended" prop', () => {
    const extended = true;
    const renderedComponent = mount(<ToggleIcon extended={extended} />);
    expect(renderedComponent.prop('extended')).toEqual(extended);
  });
});

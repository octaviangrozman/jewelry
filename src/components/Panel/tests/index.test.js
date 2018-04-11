import { mount } from 'enzyme';
import expect from 'expect';
import React from 'react';

import Panel from '../index';
import PanelBody from '../PanelBody';
import Wrapper from '../Wrapper';

describe('Panel', () => {
  it('should render 2 "div" tags', () => {
    const renderedComponent = mount(<Panel />);
    expect(renderedComponent.find('div').length).toEqual(2);
  });

  it('should contain Wrapper and PanelBody components', () => {
    const renderedComponent = mount(<Panel />);
    expect(renderedComponent.find(PanelBody).length).toEqual(1);
    expect(renderedComponent.find(Wrapper).length).toEqual(1);
  });

  it('may receive valid "tabs" prop', () => {
    const tabs = (<ul>
      <li> 1 </li>
      <li> 2 </li>
    </ul>);

    const renderedComponent = mount(<Panel tabs={tabs} />);
    expect(renderedComponent.prop('tabs')).toEqual(tabs);
  });

  it('should receive and render children', () => {
    const children = <div> Hej </div>;
    const renderedComponent = mount(<Panel>{children}</Panel>);
    expect(renderedComponent.contains(children)).toEqual(true);
    expect(renderedComponent.find(children)).toExist();
  });
});

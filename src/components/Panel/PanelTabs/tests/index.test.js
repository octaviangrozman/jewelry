import { mount } from 'enzyme';
import expect from 'expect';
import React from 'react';

import PanelTabs from '../index';
import Wrapper from '../Wrapper';
import List from '../List';
import ToggleContainer from '../ToggleContainer';
import ToggleIcon from '../ToggleIcon';

describe('<PanelTabs />', () => {
  const children = (<ul> Hej </ul>);

  it('should render its children', () => {
    const renderedComponent = mount(<PanelTabs> {children} </PanelTabs>);
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should contain Wrapper, List, ToggleContainer and ToggleIcon components', () => {
    const renderedComponent = mount(<PanelTabs> {children} </PanelTabs>);
    expect(renderedComponent.find(Wrapper).length).toEqual(1);
    expect(renderedComponent.find(List).length).toEqual(1);
    expect(renderedComponent.find(ToggleContainer).length).toEqual(1);
    expect(renderedComponent.find(ToggleIcon).length).toEqual(1);
  });

  it('should have an initial state "extended: false"', () => {
    const initialState = false;
    const renderedComponent = mount(<PanelTabs> {children} </PanelTabs>);
    expect(renderedComponent.state('extended')).toEqual(initialState);
  });

  it('should change its state of "extended" when <ToggleContainer /> is clicked', () => {
    const renderedComponent = mount(<PanelTabs> {children} </PanelTabs>);
    const state = renderedComponent.state('extended');
    renderedComponent.find(ToggleContainer).simulate('click');
    expect(renderedComponent.state('extended')).toEqual(!state);
  });
});

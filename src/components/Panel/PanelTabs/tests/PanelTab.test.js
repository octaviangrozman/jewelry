import { render, mount } from 'enzyme';
import expect from 'expect';
import React from 'react';

import RouteLink from '../RouteLink';
import PanelTab from '../PanelTab';

describe('<PanelTab />', () => {
  const children = (<div> Hej </div>);

  it('should render an "a" tag', () => {
    const renderedComponent = render(<PanelTab> {children} </PanelTab>);
    expect(renderedComponent.find('a').length).toEqual(1);
  });

  it('should receive "to" prop', () => {
    const to = 'test';
    const renderedComponent = mount(<PanelTab to={to}> {children} </PanelTab>);
    expect(renderedComponent.prop('to')).toEqual(to);
  });

  it('should render its children', () => {
    const to = 'test';
    const renderedComponent = mount(<PanelTab to={to}> {children} </PanelTab>);
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should have an \'activeClassName\' prop', () => {
    const renderedComponent = mount(<PanelTab> {children} </PanelTab>);
    expect(renderedComponent.find(RouteLink).prop('activeClassName')).toEqual('active');
  });
});

import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Social from './';


describe('<Social />', () => {

  // setup
  global.window.resizeTo = (width, height) => {
    global.window.innerWidth = width || global.window.innerWidth;
    global.window.innerHeight = width || global.window.innerHeight;
    global.window.dispatchEvent(new Event('resize'));
  };

  const handleClick = jest.fn();

  const config = {
    description: 'a description',
    domain: 'a domain',
    handleClick,
    hideBelowWidth: 700,
    mediaUrl: 'media url string',
    productName: 'NameSquash',
    twitterHandle: 'namesquash'
  };

  const defaultConfig = { ...config, handleClick: null, nideBelowWidth: null };

  const wrapper = mount(<Social config={ config } />);
  const defaultWrapper = mount(<Social config={ defaultConfig } />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Social config={ config } />, div
    );
  });

  // PROPS
  it('should have a default propname prop', () => {
    expect(defaultWrapper.props().handleClick).not.toBeDefined();
    expect(defaultWrapper.props().hideBelowWidth).not.toBeDefined();
  });

  // STATE
  it('should update state when the window size is changed', () => {
    // default width is 1024, should render social bar
    expect(wrapper.state().shouldRender).toEqual(true);

    // update the window size
    window.resizeTo(699, 699);

    // since we are hiding on 700 and lower, social should not render
    expect(wrapper.state().shouldRender).toEqual(false);
  });

});

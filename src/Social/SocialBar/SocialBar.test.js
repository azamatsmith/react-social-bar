import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import SocialBar from './';


describe('<SocialBar />', () => {

  const wrapper = mount(<SocialBar />);
  const shallowWrapper = shallow(<SocialBar />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <SocialBar />, div
    );
  });

  // COMPONENT

  it('should render 4 <SocialBox />', () => {
    const selector = 'SocialBox';
    expect(shallowWrapper.find(selector).length).toEqual(4);
  });


  it('should have a _handleTwitter method', () => {
    expect(wrapper.instance()._handleTwitter).not.toBeNull();
    expect(wrapper.instance()._handleTwitter).toBeDefined();
  });

  it('should have a _handlePinterest method', () => {
    expect(wrapper.instance()._handlePinterest).not.toBeNull();
    expect(wrapper.instance()._handlePinterest).toBeDefined();
  });

  it('should have a _handleFacebook method', () => {
    expect(wrapper.instance()._handleFacebook).not.toBeNull();
    expect(wrapper.instance()._handleFacebook).toBeDefined();
  });

  it('should have a _handleLinkedIn method', () => {
    expect(wrapper.instance()._handleLinkedIn).not.toBeNull();
    expect(wrapper.instance()._handleLinkedIn).toBeDefined();
  });

  // STATE

});

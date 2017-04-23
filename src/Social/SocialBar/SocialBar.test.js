import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import SocialBar from './';


describe('<SocialBar />', () => {
  const handleClick = jest.fn();

  const props = {
    description: 'a description',
    domain: 'a domain',
    handleClick,
    mediaUrl: 'media url string',
    productName: 'NameSquash',
    twitterHandle: 'namesquash'
  };

  const wrapper = mount(<SocialBar { ...props } />);
  const shallowWrapper = shallow(<SocialBar { ...props } />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <SocialBar { ...props } />, div
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

    expect(() => wrapper.instance()._handleTwitter()).not.toThrow();
    expect(handleClick).toHaveBeenCalled();
    expect(handleClick).toHaveBeenCalledTimes(1);
    // expect(handleClick.mock.calls[0]).toHaveBeenCalledWith(['twitter']);
  });

  it('should have a _handlePinterest method', () => {
    expect(wrapper.instance()._handlePinterest).not.toBeNull();
    expect(wrapper.instance()._handlePinterest).toBeDefined();

    expect(() => wrapper.instance()._handlePinterest()).not.toThrow();
    expect(handleClick).toHaveBeenCalled();
    expect(handleClick).toHaveBeenCalledTimes(2);
    // expect(handleClick.mock.calls[0]).toHaveBeenCalledWith(['twitter']);
  });

  it('should have a _handleFacebook method', () => {
    expect(wrapper.instance()._handleFacebook).not.toBeNull();
    expect(wrapper.instance()._handleFacebook).toBeDefined();

    expect(() => wrapper.instance()._handleFacebook()).not.toThrow();
    expect(handleClick).toHaveBeenCalled();
    expect(handleClick).toHaveBeenCalledTimes(3);
    // expect(handleClick.mock.calls[0]).toHaveBeenCalledWith(['twitter']);
  });

  it('should have a _handleLinkedIn method', () => {
    expect(wrapper.instance()._handleLinkedIn).not.toBeNull();
    expect(wrapper.instance()._handleLinkedIn).toBeDefined();

    expect(() => wrapper.instance()._handleLinkedIn()).not.toThrow();
    expect(handleClick).toHaveBeenCalled();
    expect(handleClick).toHaveBeenCalledTimes(4);
    // expect(handleClick.mock.calls[0]).toHaveBeenCalledWith(['twitter']);
  });

  // PROPS

  it('should have a description prop', () => {
    expect(wrapper.props().description).toEqual('a description');
  });

  it('should have a domain prop', () => {
    expect(wrapper.props().domain).toEqual('a domain');
  });

  it('should have a mediaUrl prop', () => {
    expect(wrapper.props().mediaUrl).toEqual('media url string');
  });

  it('should have a productName prop', () => {
    expect(wrapper.props().productName).toEqual('NameSquash');
  });

  it('should have a twitterHandle prop', () => {
    expect(wrapper.props().twitterHandle).toEqual('namesquash');
  });

});

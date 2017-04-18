import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import SocialBox from './';


describe('<SocialBox />', () => {

  const wrapper = mount(
    <SocialBox name="twitter">
      <div className="test" />
    </SocialBox>
  );

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <SocialBox name="twitter" />, div
    );
  });

  // PROPS
  it('should render a SocialBox element', () => {
    const selector = '.SocialBox .SocialBox-twitter';
    expect(wrapper.find(selector).length).toEqual(1);
  });

  it('should render a div with className test', () => {
    const selector = '.SocialBox .SocialBox-twitter .test';
    expect(wrapper.find(selector).length).toEqual(1);
  });

  // COMPONENT
  //
  // STATE

});

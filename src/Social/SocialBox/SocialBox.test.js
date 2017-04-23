import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import SocialBox from './';


describe('<SocialBox />', () => {
  const handleClick = jest.fn();

  const props = {
    handleClick,
    name: 'twitter'
  };

  const wrapper = mount(
    <SocialBox { ...props }>
      <div className="test" />
    </SocialBox>
  );

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <SocialBox { ...props } />, div
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
  it('should should call the default updateItem function if one is not passed', () => {
    const thisBox  = wrapper.find('.SocialBox .SocialBox-twitter');
    thisBox.simulate('click');
    expect(handleClick).toHaveBeenCalled();
  });

});

import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Social from './';


describe('<Social />', () => {
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

  const wrapper = mount(<Social config={ config } />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Social config={ config } />, div
    );
  });

  // PROPS
  // COMPONENT

  // STATE
  it('should update state when the window size is changed', () => {
    // const selectorSelect = '.ReturnsBuilder-builder-field select';
    // const thisSelect = wrapper.find(selectorSelect);
    // expect(thisSelect.length).toEqual(1);
    // thisSelect.simulate('change', { target: { value: 'A new hope' } });
    expect(wrapper.state().shouldRender).toEqual(true);
    // thisButton.simulate('click');
    // const selectorItem = '.ReturnsBuilder-filter-item';
    // expect(wrapper.find(selectorItem).length).toEqual(1);
    // const expectedText = 'A new hope  A new input';
    // expect(wrapper.find(selectorItem).text()).toEqual(expectedText);
  })

});

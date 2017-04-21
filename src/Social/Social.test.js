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
    mediaUrl: 'media url string',
    productName: 'NameSquash',
    twitterHandle: 'namesquash'
  };

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Social config={ config } />, div
    );
  });

  // PROPS
  // COMPONENT
  // STATE

});

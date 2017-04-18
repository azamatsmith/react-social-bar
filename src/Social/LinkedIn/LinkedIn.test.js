import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import LinkedIn from './';


describe('<LinkedIn />', () => {

  const wrapper = mount(<LinkedIn />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <LinkedIn />, div
    );
  });

});

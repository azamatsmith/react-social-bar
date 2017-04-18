import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import Social from './';


describe('<Social />', () => {

  // const defaultWrapper = mount(<Social />);

  // const shallowWrapper = shallow(<Social />);

  // const wrapper = mount(<Social />);
  const description = 'Domain Naming made simple';

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Social
        domain="https://namesquash.com"
        description={ description }
        productName="Name Squash"
      />, div
    );
  });

  // PROPS
  // COMPONENT
  // STATE

});

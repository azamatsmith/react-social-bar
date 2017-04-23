import React from 'react';
import ReactDOM from 'react-dom';
import Twitter from './';


describe('<Twitter />', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Twitter />, div
    );
  });

});

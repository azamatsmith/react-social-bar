import React from 'react';
import ReactDOM from 'react-dom';
import LinkedIn from './';


describe('<LinkedIn />', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <LinkedIn />, div
    );
  });

});

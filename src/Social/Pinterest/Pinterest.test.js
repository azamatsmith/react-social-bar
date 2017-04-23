import React from 'react';
import ReactDOM from 'react-dom';
import Pinterest from './';


describe('<Pinterest />', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Pinterest />, div
    );
  });

});

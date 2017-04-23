import React from 'react';
import ReactDOM from 'react-dom';
import Facebook from './';


describe('<Facebook />', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Facebook />, div
    );
  });

});

import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Social from '../src/Social';
import Welcome from './Welcome';

const sampleConfig = {
  description: 'Check out NameSquash.com for an easy way to name your next business or project',
  domain: 'https://namesquash.com',
  handleClick: () => console.log('may want to send this to your analytics code'),
  // hideBelowWidth: 1038,
  mediaUrl: 'https://namesquash.com/images/namesquashapp.png',
  productName: 'NameSquash',
  twitterHandle: 'namesquash'
};

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('React Social Bar', module)
  .add('to Storybook', () => (
    <Social config={ sampleConfig } />
  ))

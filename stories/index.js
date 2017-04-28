import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Social from '../src/Social';
import SocialOne from './SocialOne';
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
  .add('', () => (
    <Welcome />
  ));

storiesOf('React Social Bar', module)
  .add('Default', () => (
    <Social config={ sampleConfig } />
  ))

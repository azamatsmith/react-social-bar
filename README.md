[![Build Status](https://travis-ci.org/azamatsmith/react-social-bar.svg?branch=master)](https://travis-ci.org/azamatsmith/react-social-bar)
[![codecov](https://codecov.io/gh/azamatsmith/react-social-bar/branch/master/graph/badge.svg)](https://codecov.io/gh/azamatsmith/react-social-bar)


<h1 align="center">react-social-bar</h1>

<h4 align="center">
  Configurable Social Media Sharing Bar
</h4>

***

![react-social-demo](https://cloud.githubusercontent.com/assets/4824919/25258492/077d2eaa-25fd-11e7-8efa-b6329c8342f8.gif)


## Install
Yarn: 
`yarn add react-social-bar`

Npm: 
`npm install react-social-bar`

## Get Started

This project was bootstrapped using [create-react-app](https://github.com/facebookincubator/create-react-app) and [react-storybook](https://github.com/storybooks/storybook/tree/master/packages/react-storybook)

The easiest way to get started is to clone this repo and run `yarn start`


## Adding react-social-bar to your app

Once `react-social-bar` is installed. Import it into your file  
`import SocialBar from 'react-social-bar';

```
  return (
    <SocialBar config={ configObj } />
  );
```


## Configuration Options


### Options
```
  const configObj = {
    description: string (required),
    domain: string (required),
    handleClick: function (required),
    hideBelowWidth: number (optional),
    mediaUrl: string (optional),
    productName: string (required),
    twitterHandle: string (optional)
  }
```


### Example Options
```
  const configObj = {
    description: 'NameSquash: An easy way to name your next side project or business',
    domain: 'https://namesquash.com',
    handleClick: (social) => console.log('clicked:', social),
    hideBelowWidth: 1038,
    mediaUrl: 'https://namesquash.com/images/namesquashapp.png',
    productName: 'NameSquash',
    twitterHandle: 'namesquash'
  }
```

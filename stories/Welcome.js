import React from 'react';
import Social from '../src/Social';

const welcomeConfig = {
  description: 'react-social-bar: A React component that adds social media sharing to your app with ease.' ,
  domain: 'https://github.com/azamatsmith/react-social-bar',
  handleClick: () => console.log('may want to send this to your analytics code'),
  // hideBelowWidth: 1038,
  mediaUrl: 'https://cloud.githubusercontent.com/assets/4824919/25506903/42d7a728-2b66-11e7-9d9a-4655f704e6b0.png',
  productName: 'react-social-bar',
  twitterHandle: 'azamatsmith'
};

const styles = {
  main: {
    margin: 15,
    maxWidth: 600,
    lineHeight: 1.4,
    fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
    position: 'relative'
  },

  logo: {
    width: 200,
  },

  link: {
    color: '#1474f3',
    textDecoration: 'none',
    borderBottom: '1px solid #1474f3',
    paddingBottom: 2,
  },

  code: {
    fontSize: 15,
    fontWeight: 600,
    padding: "2px 5px",
    border: "1px solid #eae9e9",
    borderRadius: 4,
    backgroundColor: '#f3f2f2',
    color: '#3a3a3a',
  },

  codeBlock: {
    backgroundColor: '#f3f2f2',
    padding: '1px 10px',
    margin: '10px 0',
  }
};

const codeBlock = `
// Add this code to "src/stories/index.js"

import '../index.css';
import App from '../App';

storiesOf('App', module)
  .add('default view', () => (
    &lt;App /&gt;
  ))
`;

export default class Welcome extends React.Component {
  showApp(e) {
    e.preventDefault();
    if(this.props.showApp) this.props.showApp();
  }

  render() {
    return (
      <div style={styles.main}>
        <h1>Welcome to react-social-bar</h1>
        <p>
          This bar right down there, that is react-social-bar in action. <br />
          Give it a try, share react-social-bar. <br />
          The examples will teach you how to use it in your own implementation. Enjoy!<br />

          - Matt
        </p>
        <Social config={ welcomeConfig } />
      </div>
    );
  }
}

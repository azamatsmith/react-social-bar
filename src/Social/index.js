import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SocialBar from './SocialBar';
import './Social.css'


export default class Social extends Component {

  static propTypes = {
    config: PropTypes.shape({
      description: PropTypes.string.isRequired,
      domain: PropTypes.string.isRequired,
      handleClick: PropTypes.func,
      hideBelowWidth: PropTypes.number,
      mediaUrl: PropTypes.string,
      productName: PropTypes.string.isRequired,
      twitterHandle: PropTypes.string,
    }),
  }

  static defaultProps = {
    config: {
      handleClick: (name) => console.log('clicked ', name),
      hideBelowWidth: null,
    }
  }

  state = { shouldRender: true }

  componentDidMount() {
    if (this.props.config.hideBelowWidth) {
      this._updateWindowDimensions();
      window.addEventListener('resize', this._updateWindowDimensions);
    }
  }

  componentWillUnmount() {
    if (this.props.config.hideBelowWidth) {
      window.removeEventListener('resize', this._updateWindowDimensions);
    }
  }

  // PRIVATE

  _updateWindowDimensions = () => {
    if (this.props.config.hideBelowWidth > window.innerWidth) {
      return this.setState({ shouldRender: false });
    }
    this.setState({ shouldRender: true });
  }

  render() {
    const { config } = this.props;

    if (!this.state.shouldRender) { return <div />; }

    return (
      <div className="Social">
        <SocialBar
          description={ config.description }
          domain={ config.domain }
          handleClick={ config.handleClick || (name => console.log('clicked: ', name)) }
          hideBelowWidth={ config.hideBelowWidth }
          mediaUrl={ config.mediaUrl }
          productName={ config.productName }
          twitterHandle={ config.twitterHandle }
        />
      </div>
    );
  }
}

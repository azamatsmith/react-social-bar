import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SocialBox from '../SocialBox';
import Facebook from '../Facebook';
import LinkedIn from '../LinkedIn';
import Pinterest from '../Pinterest';
import Twitter from '../Twitter';

import './SocialBar.css'

export default class SocialBar extends Component {

  static propTypes = {
    description: PropTypes.string.isRequired,
    domain: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    mediaUrl: PropTypes.string,
    productName: PropTypes.string.isRequired,
    twitterHandle: PropTypes.string,
  }

  // PRIVATE

  _handleLinkedIn = () => {
    let link = 'https://www.linkedin.com/shareArticle?mini=true';
    const url = '&url=' + this.props.domain;
    const title = '&title=' + this.props.productName;
    const summary = '&summary=' + this.props.description;
    const source = '&source=' + this.props.domain;
    link = encodeURI(link + url + title + summary + source);

    this.props.handleClick('linkedin');
    window.open(link, 'linkedin window', "height=450,width=650");
  }

  _handleTwitter = () => {
    let link = 'https://twitter.com/intent/tweet?&via=' + this.props.twitterHandle;
    const url = '&url=' + this.props.domain;
    const message = '&text=' + this.props.description;
    link = encodeURI(link + message + url);

    this.props.handleClick('twitter');
    window.open(link, 'twitter window', "height=420,width=650");
  }


  _handlePinterest = () => {
    let url = 'http://pinterest.com/pin/create/button/?url=' + this.props.domain;
    const description = '&description=' + this.props.description;
    const media = '&media=' + this.props.mediaUrl;
    url = encodeURI(url + description + media);

    this.props.handleClick('pinterest');
    window.open(url, 'pinterest window', "height=625,width=770");
  }

  _handleFacebook = () => {
    const url ='https://www.facebook.com/sharer/sharer.php?u=' + this.props.domain;

    this.props.handleClick('facebook');
    window.open(url, 'facebook window', "height=420,width=650");
  }

  render() {
    return (
      <div className="SocialBar">

        <SocialBox
          name="linkedin"
          handleClick={ this._handleLinkedIn }
        >
          <LinkedIn />
        </SocialBox>

        <SocialBox
          name="pinterest"
          handleClick={ this._handlePinterest }
        >
          <Pinterest />
        </SocialBox>

        <SocialBox
          name="facebook"
          handleClick={ this._handleFacebook }
        >
          <Facebook />
        </SocialBox>

        <SocialBox
          name="twitter"
          handleClick={ this._handleTwitter }
        >
          <Twitter />
        </SocialBox>

      </div>
    );
  }
}


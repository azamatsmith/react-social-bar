import React from 'react';
import PropTypes from 'prop-types';
import './SocialBox.css'

const propTypes = {
  children: PropTypes.element,
  handleClick: PropTypes.func,
  name: PropTypes.string.isRequired
};

const defaultProps = {
  children: <span />
};

export default function SocialBox({
  children,
  handleClick,
  name
}) {

  const getClass = () => {
    switch (name) {
      case 'linkedin':
        return 'linkedin';
      case 'facebook':
        return 'facebook';
      case 'pinterest':
        return 'pinterest';
      case 'twitter':
        return 'twitter';
      default:
        return '';
    }
  }

  return (
    <div
      className={ `SocialBox SocialBox-${ getClass() }` }
      onClick={ handleClick }
    >
      { children }
    </div>
  );
}

SocialBox.propTypes = propTypes;
SocialBox.defaultProps = defaultProps;


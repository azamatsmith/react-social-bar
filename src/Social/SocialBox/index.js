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
  return (
    <div
      className={ `SocialBox SocialBox-${ name }` }
      onClick={ handleClick }
    >
      { children }
    </div>
  );
}

SocialBox.propTypes = propTypes;
SocialBox.defaultProps = defaultProps;


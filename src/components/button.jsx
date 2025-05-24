import React from 'react';
import '../directive.css';
import PropTypes from 'prop-types';

const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-cyan-500 text-white text-3xl px-6 py-4 rounded-xl border-none cursor-pointer hover:bg-cyan-600 transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
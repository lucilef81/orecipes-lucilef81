import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ children }) => (
  <main>
    {children}
  </main>
);

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default Page;

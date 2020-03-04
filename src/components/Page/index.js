import React from 'react';
import PropTypes from 'prop-types';

import PageStyled from './PageStyled';

const Page = ({ children }) => (
  <PageStyled>
    {children}
  </PageStyled>
);

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default Page;

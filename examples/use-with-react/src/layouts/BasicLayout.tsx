import React, { FC } from 'react';
import { Link } from 'umi';
import { styled } from '@styli/styled';
import { ThemeProvider } from '@styli/theming';
import { styli } from '@styli/core';

const StyledLink = styled(Link, 'p-20 inlineBlock');

const BasicLayout: FC = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={styli.config.theme}>
        <div left f-16>
          <StyledLink to="/">Styli Component</StyledLink>
          <StyledLink to="/babel-preset">Babel Preset</StyledLink>
          <StyledLink to="/jsx-pragma">JSX Pragma</StyledLink>
        </div>
        {children}
      </ThemeProvider>
    </div>
  );
};

export default BasicLayout;

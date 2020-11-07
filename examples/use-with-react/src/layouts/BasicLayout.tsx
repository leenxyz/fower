import React, { FC } from 'react';
import { Link } from 'umi';
import { styled } from '@styli/styled';

const StyledLink = styled(Link, 'p-20 inlineBlock');

const BasicLayout: FC = ({ children }) => {
  return (
    <div>
      <div left f-16>
        <StyledLink to="/">Styli Component</StyledLink>
        <StyledLink to="/babel-preset">Babel Preset</StyledLink>
        <StyledLink to="/jsx-pragma">JSX Pragma</StyledLink>
      </div>
      {children}
    </div>
  );
};

export default BasicLayout;

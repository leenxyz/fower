import { Box } from '@fower/react';
import { FowerHTMLProps } from '@fower/core';
import { FC } from 'react';

interface TagProps extends FowerHTMLProps<'div'> {}

const Tag: FC<TagProps> = (props) => {
  return <div {...props}>tag</div>;
};

const Button = (props: { bar: string }) => {
  return <div>text: {props.bar}</div>;
};

export default () => {
  return (
    <Box gapX3>
      <Tag></Tag>
      <Box>basic box</Box>
      <Box as={Button} bar="bar"></Box>
      <Box as="b" p2 orange400>
        Span1
      </Box>
      <Box as="span" green400 border>
        Span2
      </Box>
      <Box as="input" outlineNone border p2 block></Box>
      <Box as="a" red400 href="https://google.com" target="_blank">
        Google
      </Box>
    </Box>
  );
};

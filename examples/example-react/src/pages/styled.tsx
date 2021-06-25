import { Box } from '@fower/react';
import { styled } from '@fower/styled';

const Text = styled(
  'span',
  ['text5XL', 'rounded', 'inlineBlock', 'm4', 'top-1'],
  {
    p: 4,
    textShadow: '1px 0 5px #FC0',
    ':hover': {
      p: 30,
    },
  },
);

export default () => {
  return (
    <Text bgYellow200 gray700>
      styled text~~
    </Text>
  );
  return (
    <Box toCenter h-100vh spaceX3 flexWrap>
      <Text p3 bgYellow200 gray700>
        styled text~~
      </Text>
      <Box p4 bgRed200>
        Box
      </Box>
    </Box>
  );
};

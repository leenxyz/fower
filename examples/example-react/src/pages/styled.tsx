import { Box } from '@fower/react';
import { styled } from '@fower/styled';

const Text = styled('span');

export default () => {
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

import { Box } from '@fower/react';
import { setTheme } from '@fower/core';

export default () => {
  return (
    <Box>
      <Box text={[12, 20, 40, 60]} textXS>
        Lorem ipsum dolor sit amet
      </Box>
      <Box color={['green500', 'red500', 'yellow500', 'blue500']}>
        Lorem ipsum dolor sit amet
      </Box>
      <Box text--hover={[12, 20, 40, 60]}>Lorem ipsum dolor sit amet</Box>
      <Box textSM textLG--sm text3XL--md text6XL--lg bgOrange200>
        Lorem ipsum dolor sit amet
      </Box>
    </Box>
  );
};

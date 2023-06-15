import { Box } from '@fower/react';

export default () => {
  return (
    <Box>
      <Box text-30 fontSans>
        Lorem ipsum dolor sit amet
      </Box>
      <Box text={40} fontSerif>
        Lorem ipsum dolor sit amet
      </Box>
      <Box text={40} fontMono>
        Lorem ipsum dolor sit amet
      </Box>
    </Box>
  );
};

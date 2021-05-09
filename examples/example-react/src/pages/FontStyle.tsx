import { Box } from '@fower/react';

export default () => {
  return (
    <Box>
      <Box text-30 italic>
        Lorem ipsum dolor sit amet
      </Box>
      <Box text={40} notItalic--i italic>
        Lorem ipsum dolor sit amet
      </Box>
    </Box>
  );
};

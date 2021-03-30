import { Box } from '@styli/react';

export default () => {
  return (
    <Box row toEvenly bgGreen50 p6 white>
      <Box toCenter square-100 bgGreen500 opacity-20>
        opacity-20
      </Box>
      <Box toCenter square-100 bgGreen500 opacity-40>
        opacity-40
      </Box>
      <Box toCenter square-100 bgGreen500 opacity-60>
        opacity-60
      </Box>
      <Box toCenter square-100 bgGreen500 opacity={80}>
        opacity-80
      </Box>
      <Box toCenter square-100 bgGreen500 opacity-100>
        opacity-100
      </Box>
    </Box>
  );
};

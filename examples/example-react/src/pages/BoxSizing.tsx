import { Box } from '@fower/react';

export default () => {
  return (
    <Box p10 toLeft spaceX3>
      <Box boxBorder square-100 border-6 borderRed400 bgRed200 toCenter>
        border box
      </Box>
      <Box boxContent square-100 border-6 borderRed400 bgRed200 toCenter>
        content box
      </Box>
    </Box>
  );
};

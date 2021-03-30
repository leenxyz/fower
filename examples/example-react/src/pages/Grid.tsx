import { Box } from '@styli/react';

export default () => {
  return (
    <Box>
      <Box text3XL fontBold as="h1">
        Grid
      </Box>
      <Box debugChildren grid gridTemplateColumns-4 rowGap-30 columnGap-10>
        <Box>A</Box>
        <Box>B</Box>
        <Box>C</Box>
        <Box>D</Box>
        <Box>F</Box>
        <Box>G</Box>
      </Box>
    </Box>
  );
};

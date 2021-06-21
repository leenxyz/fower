import { Box } from '@fower/react';

export default () => {
  return (
    <Box toCenter h-100vh spaceX3 flexWrap>
      <Box as="input" formInput ringRed200-3 borderRed400 />

      <Box as="input" formInput ringRed200-3--focus borderRed400--focus />

      <Box as="button" button ringBrand100-3>
        Button
      </Box>

      <Box as="button" button ringBrand100-3--focus>
        Click to focus
      </Box>

      <Box as="input" formInput ringRed500-2--T60 borderRed500 />
      <Box as="input" formInput ring-2--T60 borderBrand500 />
      <Box as="button" button ring-3--T60>
        Button
      </Box>
    </Box>
  );
};

import { Box } from '@fower/react';

export default () => {
  return (
    <Box toCenter h-100vh spaceX10>
      <Box
        square20
        bgOrange400
        // delay-100
        // duration-200
        // easeInOut
        transitionCommon
        bgRed600--hover
      ></Box>
      <Box square20 bgOrange400 rounded-4></Box>
      <Box square20 bgOrange400 rounded2XL></Box>
      <Box square20 bgOrange400 roundedTXL></Box>
      <Box square20 bgOrange400 roundedTL-20></Box>
      <Box square20 bgOrange400 roundedTR2XL></Box>
    </Box>
  );
};

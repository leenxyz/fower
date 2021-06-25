import { Box } from '@fower/react';

export default () => {
  return (
    <Box toCenter h-100vh space3 flexWrap css={{}}>
      <Box square20 bgOrange400 rounded></Box>
      <Box square20 bgOrange400 roundedFull roundedTopRight-0--i></Box>
      <Box square20 bgOrange400 roundedFull roundedNone--hover></Box>
      <Box square20 bgOrange400 rounded-20></Box>
      <Box square20 bgOrange400 rounded-4></Box>
      <Box square20 bgOrange400 rounded2XL></Box>
      <Box square20 bgOrange400 roundedTopXL></Box>
      <Box square20 bgOrange400 roundedTopLeft-20></Box>
      <Box square20 bgOrange400 roundedTopRight2XL></Box>
      <Box square20 bgOrange400 roundedLeftFull></Box>
    </Box>
  );
};

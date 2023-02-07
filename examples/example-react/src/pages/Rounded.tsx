import { Box } from '@fower/react';

export default () => {
  return (
    <Box p20 spaceY10>
      <Box spaceX2 toCenter>
        <Box square20 bgOrange400 roundedSM />
        <Box square20 bgOrange400 roundedMD />
        <Box square20 bgOrange400 roundedLG />
        <Box square20 bgOrange400 roundedXL />
        <Box square20 bgOrange400 rounded2XL />
        <Box square20 bgOrange400 rounded3XL />
      </Box>
      <Box toCenter spaceX3 flexWrap>
        <Box square20 bgOrange400 rounded></Box>
        <Box square20 bgOrange400 roundedTop={0}></Box>
        <Box square20 bgOrange400 roundedSM></Box>
        <Box square20 bgOrange400 roundedLG></Box>
        <Box square20 bgOrange400 roundedFull roundedTopRight-0--i></Box>
        <Box square20 bgOrange400 roundedFull roundedNone--hover></Box>
        <Box square20 bgOrange400 rounded-20></Box>
        <Box square20 bgOrange400 rounded-4></Box>
        <Box square20 bgOrange400 roundedXL></Box>
        <Box square20 bgOrange400 roundedTop3XL></Box>
        <Box square20 bgOrange400 roundedTopLeft-20></Box>
        <Box square20 bgOrange400 roundedTopRight2XL></Box>
        <Box square20 bgOrange400 roundedLeftFull></Box>
      </Box>
    </Box>
  );
};

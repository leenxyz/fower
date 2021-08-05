import { Box } from '@fower/react';

export default () => {
  return (
    <Box p20 spaceY10>
      <Box spaceX2 toCenter>
        <Box square20 bgOrange400 roundedTiny />
        <Box square20 bgOrange400 roundedSmall />
        <Box square20 bgOrange400 roundedMedium />
        <Box square20 bgOrange400 roundedLarge />
        <Box square20 bgOrange400 roundedHuge />
        <Box square20 bgOrange400 roundedGigantic />
      </Box>
      <Box toCenter spaceX3 flexWrap>
        <Box square20 bgOrange400 rounded></Box>
        <Box square20 bgOrange400 roundedTop={0}></Box>
        <Box square20 bgOrange400 roundedTiny></Box>
        <Box square20 bgOrange400 roundedLarge></Box>
        <Box square20 bgOrange400 roundedFull roundedTopRight-0--i></Box>
        <Box square20 bgOrange400 roundedFull roundedNone--hover></Box>
        <Box square20 bgOrange400 rounded-20></Box>
        <Box square20 bgOrange400 rounded-4></Box>
        <Box square20 bgOrange400 roundedHuge></Box>
        <Box square20 bgOrange400 roundedTopGigantic></Box>
        <Box square20 bgOrange400 roundedTopLeft-20></Box>
        <Box square20 bgOrange400 roundedTopRightHuge></Box>
        <Box square20 bgOrange400 roundedLeftFull></Box>
      </Box>
    </Box>
  );
};

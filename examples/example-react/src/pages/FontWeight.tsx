import { Box } from '@styli/react';

export default () => {
  return (
    <Box>
      <Box text3XL>
        <Box fontHairline>Lorem ipsum dolor sit amet</Box>
        <Box fontThin>Lorem ipsum dolor sit amet</Box>
        <Box fontLight>Lorem ipsum dolor sit amet</Box>
        <Box fontNormal>Lorem ipsum dolor sit amet</Box>
        <Box fontMedium>Lorem ipsum dolor sit amet</Box>
        <Box fontSemibold>Lorem ipsum dolor sit amet</Box>
        <Box fontBold>Lorem ipsum dolor sit amet</Box>
        <Box fontExtrabold>Lorem ipsum dolor sit amet</Box>
      </Box>

      <Box text2XL>
        <Box fontWeight-100>Lorem ipsum dolor sit amet</Box>
        <Box fontWeight-400>Lorem ipsum dolor sit amet</Box>
        <Box fontWeight={600}>Lorem ipsum dolor sit amet</Box>
      </Box>
    </Box>
  );
};

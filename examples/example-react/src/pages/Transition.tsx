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
        scale-200--hover
        transitionCommon
        bgRed600--hover
      ></Box>
    </Box>
  );
};

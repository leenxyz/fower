import { Box } from '@fower/react';

export default () => {
  return (
    <Box p10 spaceX3 toCenter>
      <Box square20 rounded gradientX={['red400', 'yellow400']} />

      <Box
        square20
        rounded
        gradientX={['green400', 'blue500']}
        gradientX--hover={['pink500', 'yellow500']}
      />

      <Box square20 rounded gradientX={['purple500', 'pink500', 'red500']} />

      <Box square20 rounded gradientY={['red400', 'yellow400']} />

      <Box
        square20
        rounded
        gradientY={['green400', 'blue500']}
        gradientY--hover={['pink500', 'yellow500']}
      />

      <Box square20 rounded gradientY={['purple500', 'pink500', 'red500']} />
    </Box>
  );
};

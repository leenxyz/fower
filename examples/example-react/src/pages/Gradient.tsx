import { Box } from '@fower/react';

export default () => {
  return (
    <Box square20 rounded bgGradient="linear-gradient(to right, #ccc, #888)" />
  );
  return (
    <Box
      square20
      rounded
      bgGradient="linear-gradient(to right, green200, pink500)"
    />
  );
  return (
    <Box p10 spaceX3 toCenter>
      <Box square20 rounded bgGradientX={['red400', 'yellow400']} />

      <Box
        square20
        rounded
        bgGradientX={['green400', 'blue500']}
        gradientX--hover={['pink500', 'yellow500']}
      />

      <Box square20 rounded bgGradientX={['purple500', 'pink500', 'red500']} />

      <Box square20 rounded bgGradientY={['red400', 'yellow400']} />

      <Box
        square20
        rounded
        bgGradientY={['green400', 'blue500']}
        gradientY--hover={['pink500', 'yellow500']}
      />

      <Box square20 rounded bgGradientY={['purple500', 'pink500', 'red500']} />
    </Box>
  );
};

import { Box } from '@fower/react';

export default () => {
  return (
    <Box>
      <Box spaceY4>
        <Box as="h2">JustifyContent</Box>
        <Box flex spaceX4 justifyContent="flex-start">
          <Box bgAmber400 square-100></Box>
          <Box bgAmber400 square-100></Box>
          <Box bgAmber400 square-100></Box>
        </Box>

        <Box flex spaceX4 justifyContent="center">
          <Box bgAmber400 square-100></Box>
          <Box bgAmber400 square-100></Box>
          <Box bgAmber400 square-100></Box>
        </Box>

        <Box flex spaceX4 justifyContent="flex-end">
          <Box bgAmber400 square-100></Box>
          <Box bgAmber400 square-100></Box>
          <Box bgAmber400 square-100></Box>
        </Box>

        <Box flex spaceX4 justifyContent="space-between">
          <Box bgAmber400 square-100></Box>
          <Box bgAmber400 square-100></Box>
          <Box bgAmber400 square-100></Box>
        </Box>

        <Box flex spaceX4 justifyContent="space-around">
          <Box bgAmber400 square-100></Box>
          <Box bgAmber400 square-100></Box>
          <Box bgAmber400 square-100></Box>
        </Box>

        <Box flex spaceX4 justifyContent="space-evenly">
          <Box bgAmber400 square-100></Box>
          <Box bgAmber400 square-100></Box>
          <Box bgAmber400 square-100></Box>
        </Box>
      </Box>
      <Box spaceY4>
        <Box as="h2">Align Items</Box>
        <Box flex spaceX4 alignItems="flex-start">
          <Box bgAmber400 w-100 py4></Box>
          <Box bgAmber400 w-100 py8></Box>
          <Box bgAmber400 w-100 py6></Box>
        </Box>
        <Box flex spaceX4 alignItems="center">
          <Box bgAmber400 w-100 py4></Box>
          <Box bgAmber400 w-100 py8></Box>
          <Box bgAmber400 w-100 py6></Box>
        </Box>
        <Box flex spaceX4 alignItems="flex-end">
          <Box bgAmber400 w-100 py4></Box>
          <Box bgAmber400 w-100 py8></Box>
          <Box bgAmber400 w-100 py6></Box>
        </Box>
        <Box flex spaceX4 alignItems="baseline">
          <Box bgAmber400 w-100 py4></Box>
          <Box bgAmber400 w-100 py8></Box>
          <Box bgAmber400 w-100 py6></Box>
        </Box>
        <Box flex spaceX4 alignItems="stretch">
          <Box bgAmber400 w-100 py4></Box>
          <Box bgAmber400 w-100 py8></Box>
          <Box bgAmber400 w-100 py6></Box>
        </Box>
      </Box>

      <Box spaceY4>
        <Box as="h2">Align Content</Box>
        <Box flexWrap="wrap" bgAmber100 w-350 h-280 alignContent="flex-start">
          <Box m2 bgAmber400 square-100></Box>
          <Box m2 bgAmber400 square-100></Box>
          <Box m2 bgAmber400 square-100></Box>
          <Box m2 bgAmber400 square-100></Box>
          <Box m2 bgAmber400 square-100></Box>
        </Box>
        <Box flexWrap="wrap" bgAmber100 w-350 h-320 alignContent="center">
          <Box m2 bgAmber400 square-100></Box>
          <Box m2 bgAmber400 square-100></Box>
          <Box m2 bgAmber400 square-100></Box>
          <Box m2 bgAmber400 square-100></Box>
          <Box m2 bgAmber400 square-100></Box>
        </Box>
        <Box flexWrap="wrap" bgAmber100 w-350 h-320 alignContent="flex-end">
          <Box m2 bgAmber400 square-100></Box>
          <Box m2 bgAmber400 square-100></Box>
          <Box m2 bgAmber400 square-100></Box>
          <Box m2 bgAmber400 square-100></Box>
          <Box m2 bgAmber400 square-100></Box>
        </Box>
        <Box
          flexWrap="wrap"
          bgAmber100
          w-350
          h-320
          alignContent="space-between"
        >
          <Box m2 bgAmber400 square-100></Box>
          <Box m2 bgAmber400 square-100></Box>
          <Box m2 bgAmber400 square-100></Box>
          <Box m2 bgAmber400 square-100></Box>
          <Box m2 bgAmber400 square-100></Box>
        </Box>
        <Box flexWrap="wrap" bgAmber100 w-350 h-320 alignContent="space-evenly">
          <Box m2 bgAmber400 square-100></Box>
          <Box m2 bgAmber400 square-100></Box>
          <Box m2 bgAmber400 square-100></Box>
          <Box m2 bgAmber400 square-100></Box>
          <Box m2 bgAmber400 square-100></Box>
        </Box>
        <Box flexWrap="wrap" bgAmber100 w-350 h-320 alignContent="space-around">
          <Box m2 bgAmber400 square-100></Box>
          <Box m2 bgAmber400 square-100></Box>
          <Box m2 bgAmber400 square-100></Box>
          <Box m2 bgAmber400 square-100></Box>
          <Box m2 bgAmber400 square-100></Box>
        </Box>
      </Box>

      <Box spaceY4>
        <Box as="h2">Align Self</Box>
        <Box flex spaceX4 alignItems="stretch">
          <Box bgAmber400 w-100 py6></Box>
          <Box bgAmber400 w-100 py4 alignSelf="flex-start"></Box>
          <Box bgAmber400 w-100 py8></Box>
        </Box>
        <Box flex spaceX4 alignItems="stretch">
          <Box bgAmber400 w-100 py6></Box>
          <Box bgAmber400 w-100 py4 alignSelf="center"></Box>
          <Box bgAmber400 w-100 py8></Box>
        </Box>
        <Box flex spaceX4 alignItems="stretch">
          <Box bgAmber400 w-100 py6></Box>
          <Box bgAmber400 w-100 py4 alignSelf="flex-end"></Box>
          <Box bgAmber400 w-100 py8></Box>
        </Box>
        <Box flex spaceX4 alignItems="stretch">
          <Box bgAmber400 w-100 py6></Box>
          <Box bgAmber400 w-100 py4 alignSelf="auto"></Box>
          <Box bgAmber400 w-100 py8></Box>
        </Box>
        <Box flex spaceX4 h-80 alignItems="center">
          <Box bgAmber400 w-100 py4></Box>
          <Box bgAmber400 w-100 py4 alignSelf="stretch"></Box>
          <Box bgAmber400 w-100 py4></Box>
        </Box>
      </Box>
    </Box>
  );
};

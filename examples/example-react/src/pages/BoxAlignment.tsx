import { Box } from '@fower/react';

export default () => {
  return (
    <Box>
      <Box spaceY4>
        <Box as="h2">JustifyContent</Box>
        <Box flex spaceX4 justifyContent="flex-start">
          <Box bgOrange400 square-100></Box>
          <Box bgOrange400 square-100></Box>
          <Box bgOrange400 square-100></Box>
        </Box>

        <Box flex spaceX4 justifyContent="center">
          <Box bgOrange400 square-100></Box>
          <Box bgOrange400 square-100></Box>
          <Box bgOrange400 square-100></Box>
        </Box>

        <Box flex spaceX4 justifyContent="flex-end">
          <Box bgOrange400 square-100></Box>
          <Box bgOrange400 square-100></Box>
          <Box bgOrange400 square-100></Box>
        </Box>

        <Box flex spaceX4 justifyContent="space-between">
          <Box bgOrange400 square-100></Box>
          <Box bgOrange400 square-100></Box>
          <Box bgOrange400 square-100></Box>
        </Box>

        <Box flex spaceX4 justifyContent="space-around">
          <Box bgOrange400 square-100></Box>
          <Box bgOrange400 square-100></Box>
          <Box bgOrange400 square-100></Box>
        </Box>

        <Box flex spaceX4 justifyContent="space-evenly">
          <Box bgOrange400 square-100></Box>
          <Box bgOrange400 square-100></Box>
          <Box bgOrange400 square-100></Box>
        </Box>
      </Box>
      <Box spaceY4>
        <Box as="h2">Align Items</Box>
        <Box flex spaceX4 alignItems="flex-start">
          <Box bgOrange400 w-100 py4></Box>
          <Box bgOrange400 w-100 py8></Box>
          <Box bgOrange400 w-100 py6></Box>
        </Box>
        <Box flex spaceX4 alignItems="center">
          <Box bgOrange400 w-100 py4></Box>
          <Box bgOrange400 w-100 py8></Box>
          <Box bgOrange400 w-100 py6></Box>
        </Box>
        <Box flex spaceX4 alignItems="flex-end">
          <Box bgOrange400 w-100 py4></Box>
          <Box bgOrange400 w-100 py8></Box>
          <Box bgOrange400 w-100 py6></Box>
        </Box>
        <Box flex spaceX4 alignItems="baseline">
          <Box bgOrange400 w-100 py4></Box>
          <Box bgOrange400 w-100 py8></Box>
          <Box bgOrange400 w-100 py6></Box>
        </Box>
        <Box flex spaceX4 alignItems="stretch">
          <Box bgOrange400 w-100 py4></Box>
          <Box bgOrange400 w-100 py8></Box>
          <Box bgOrange400 w-100 py6></Box>
        </Box>
      </Box>

      <Box spaceY4>
        <Box as="h2">Align Content</Box>
        <Box flexWrap="wrap" bgOrange100 w-350 h-280 alignContent="flex-start">
          <Box m2 bgOrange400 square-100></Box>
          <Box m2 bgOrange400 square-100></Box>
          <Box m2 bgOrange400 square-100></Box>
          <Box m2 bgOrange400 square-100></Box>
          <Box m2 bgOrange400 square-100></Box>
        </Box>
        <Box flexWrap="wrap" bgOrange100 w-350 h-320 alignContent="center">
          <Box m2 bgOrange400 square-100></Box>
          <Box m2 bgOrange400 square-100></Box>
          <Box m2 bgOrange400 square-100></Box>
          <Box m2 bgOrange400 square-100></Box>
          <Box m2 bgOrange400 square-100></Box>
        </Box>
        <Box flexWrap="wrap" bgOrange100 w-350 h-320 alignContent="flex-end">
          <Box m2 bgOrange400 square-100></Box>
          <Box m2 bgOrange400 square-100></Box>
          <Box m2 bgOrange400 square-100></Box>
          <Box m2 bgOrange400 square-100></Box>
          <Box m2 bgOrange400 square-100></Box>
        </Box>
        <Box
          flexWrap="wrap"
          bgOrange100
          w-350
          h-320
          alignContent="space-between"
        >
          <Box m2 bgOrange400 square-100></Box>
          <Box m2 bgOrange400 square-100></Box>
          <Box m2 bgOrange400 square-100></Box>
          <Box m2 bgOrange400 square-100></Box>
          <Box m2 bgOrange400 square-100></Box>
        </Box>
        <Box flexWrap="wrap" bgOrange100 w-350 h-320 alignContent="space-evenly">
          <Box m2 bgOrange400 square-100></Box>
          <Box m2 bgOrange400 square-100></Box>
          <Box m2 bgOrange400 square-100></Box>
          <Box m2 bgOrange400 square-100></Box>
          <Box m2 bgOrange400 square-100></Box>
        </Box>
        <Box flexWrap="wrap" bgOrange100 w-350 h-320 alignContent="space-around">
          <Box m2 bgOrange400 square-100></Box>
          <Box m2 bgOrange400 square-100></Box>
          <Box m2 bgOrange400 square-100></Box>
          <Box m2 bgOrange400 square-100></Box>
          <Box m2 bgOrange400 square-100></Box>
        </Box>
      </Box>

      <Box spaceY4>
        <Box as="h2">Align Self</Box>
        <Box flex spaceX4 alignItems="stretch">
          <Box bgOrange400 w-100 py6></Box>
          <Box bgOrange400 w-100 py4 alignSelf="flex-start"></Box>
          <Box bgOrange400 w-100 py8></Box>
        </Box>
        <Box flex spaceX4 alignItems="stretch">
          <Box bgOrange400 w-100 py6></Box>
          <Box bgOrange400 w-100 py4 alignSelf="center"></Box>
          <Box bgOrange400 w-100 py8></Box>
        </Box>
        <Box flex spaceX4 alignItems="stretch">
          <Box bgOrange400 w-100 py6></Box>
          <Box bgOrange400 w-100 py4 alignSelf="flex-end"></Box>
          <Box bgOrange400 w-100 py8></Box>
        </Box>
        <Box flex spaceX4 alignItems="stretch">
          <Box bgOrange400 w-100 py6></Box>
          <Box bgOrange400 w-100 py4 alignSelf="auto"></Box>
          <Box bgOrange400 w-100 py8></Box>
        </Box>
        <Box flex spaceX4 h-80 alignItems="center">
          <Box bgOrange400 w-100 py4></Box>
          <Box bgOrange400 w-100 py4 alignSelf="stretch"></Box>
          <Box bgOrange400 w-100 py4></Box>
        </Box>
      </Box>
    </Box>
  );
};

import { Box } from '@fower/react';

export default () => {
  return (
    <Box>
      <Box as="ul" listNone bgOrange200>
        <Box as="li">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </Box>

        <Box as="li">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </Box>
      </Box>

      <Box as="ul" listDisc>
        <Box as="li">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </Box>

        <Box as="li">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </Box>
      </Box>

      <Box as="ul" listDecimal>
        <Box as="li">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </Box>

        <Box as="li">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </Box>
      </Box>
    </Box>
  );
};

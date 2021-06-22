import { Box } from '@fower/react';

export default () => {
  return (
    <Box p4>
      <Box toEvenly textXS>
        <Box w9 h5 bgBlue200>
          w9 h5
        </Box>
        <Box w-100 h-50 bgBlue200>
          w-100 h-50
        </Box>
        <Box square-50 bgBlue200>
          square-50
        </Box>
        <Box square-50 bgBlue200>
          square-50-100
        </Box>
        <Box square10 square12 bgBlue200>
          s9
        </Box>
        <Box circle-50 bgBlue200>
          circle-50
        </Box>
        <Box w-100 h-50 w-110--hover h-60--hover bgBlue200>
          w-110--hover <br /> h-60--hover
        </Box>
        <Box square-100 square-110--hover bgBlue200>
          square-110--hover
        </Box>
        <Box circle-100 circle-110--hover bgBlue200>
          circle-110--hover
        </Box>
        <Box h-100 maxW-50 bgYellow200>
          maxW-50
        </Box>
        <Box w-100 maxH-50 bgYellow200>
          maxH-50
        </Box>
        <Box h-100 minW-50 bgYellow200>
          minW-50
        </Box>
        <Box w-100 minH-50 bgYellow200>
          minH-50
        </Box>
      </Box>
    </Box>
  );
};

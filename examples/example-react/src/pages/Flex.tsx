import React from 'react';
import { Box } from '@styli/react';

export default () => {
  return (
    <div>
      <Box toCenter>AAAA</Box>
      <Box flex>AAAA</Box>
      <Box flex={1}>AAAA</Box>
    </div>
  );
  return (
    <Box>
      <Box as="h2">Row</Box>
      <Box spaceX3 row>
        <Box bgAmber400 p10>
          A
        </Box>
        <Box bgAmber400 p10>
          B
        </Box>
        <Box bgAmber400 p10>
          C
        </Box>
      </Box>

      <Box as="h2">Column</Box>
      <Box spaceY3 column>
        <Box bgAmber400 p6>
          A
        </Box>
        <Box bgAmber400 p6>
          B
        </Box>
        <Box bgAmber400 p6>
          C
        </Box>
      </Box>

      <Box as="h2">Row Reverse</Box>
      <Box flex flexDirection="row-reverse">
        <Box bgAmber400 p6 m3>
          A
        </Box>
        <Box bgAmber400 p6 m3>
          B
        </Box>
        <Box bgAmber400 p6 m3>
          C
        </Box>
      </Box>

      <Box as="h2">Column Reverse</Box>
      <Box flex flexDirection="column-reverse">
        <Box bgAmber400 p6 m3>
          A
        </Box>
        <Box bgAmber400 p6 m3>
          B
        </Box>
        <Box bgAmber400 p6 m3>
          C
        </Box>
      </Box>

      <Box as="h2">Flex Initial</Box>
      <Box spaceX3 flexInitial>
        <Box bgAmber400 p10>
          Short
        </Box>
        <Box bgAmber400 p10>
          Medium length
        </Box>
      </Box>

      <Box as="h2">Flex Initial</Box>
      <Box spaceX3 flexInitial>
        <Box bgAmber400 p4>
          Short
        </Box>
        <Box bgAmber400 p4>
          Medium length
        </Box>
        <Box bgAmber400 p4>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ad
          labore ipsam, aut rem quo repellat esse tempore id, quidem
        </Box>
      </Box>

      <Box as="h2">Flex None</Box>
      <Box spaceX3 flexInitial>
        <Box bgAmber400 p4 flex={1}>
          Item that can grow or shrink if needed
        </Box>
        <Box bgAmber500 p4 flexNone>
          Item that cannot grow or shrink
        </Box>
        <Box bgAmber400 p4 flex="1">
          Item that can grow or shrink if needed
        </Box>
      </Box>

      <Box as="h2">Grow</Box>
      <Box spaceX3 row>
        <Box bgAmber400 p4>
          Normal
        </Box>
        <Box bgAmber500 p4 flexGrow={1}>
          Grow
        </Box>
        <Box bgAmber400 p4>
          Normal
        </Box>
      </Box>

      <Box as="h2">Not Grow</Box>
      <Box spaceX3 row>
        <Box bgAmber400 p4 flexGrow={1}>
          Grow
        </Box>
        <Box bgAmber500 p4 flexGrow={0}>
          Not Grow
        </Box>
        <Box bgAmber400 p4 flexGrow={1}>
          Grow
        </Box>
      </Box>

      <Box as="h2">Shrink</Box>
      <Box spaceX3 row>
        <Box bgAmber400 p4 w-100></Box>
        <Box bgAmber500 p4 flexShrink={1} w-600>
          Shrink
        </Box>
        <Box bgAmber400 p4 w-100></Box>
      </Box>

      <Box as="h2">Not Shrink</Box>
      <Box spaceX3 row>
        <Box bgAmber400 p4 w-100></Box>
        <Box bgAmber500 p4 flexShrink={0} w-600>
          Not Shrink
        </Box>
        <Box bgAmber400 p4 w-100></Box>
      </Box>

      <Box as="h2">No wrap</Box>
      <Box spaceX3 row flexWrap="nowrap">
        <Box bgAmber400 m2 p4 w-300></Box>
        <Box bgAmber500 m2 p4 w-300></Box>
        <Box bgAmber400 m2 p4 w-300></Box>
      </Box>

      <Box as="h2">wrap</Box>
      <Box spaceX3 row flexWrap="wrap">
        <Box bgAmber400 m2 p4 w-300></Box>
        <Box bgAmber500 m2 p4 w-300></Box>
        <Box bgAmber400 m2 p4 w-300></Box>
      </Box>
    </Box>
  );
};

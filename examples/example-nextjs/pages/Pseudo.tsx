import { Box } from '@fower/react';

export default () => {
  return (
    <Box toCenter column h-100vh text2XL>
      <Box orange500 orange300--hover>
        Lorem ipsum dolor sit amet
      </Box>

      <Box className="parent group" bgRed100 p20>
        <Box red400--$parent--hover>children 1</Box>
        <Box green400--$group--hover>children 2</Box>
      </Box>

      <Box className="parent group" bgOrange100 p20>
        <Box red400--$parent--active>children 1</Box>
        <Box green400--$group--hover>children 2</Box>
      </Box>
    </Box>
  );
};

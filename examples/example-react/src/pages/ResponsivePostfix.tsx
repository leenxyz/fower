import { Box } from '@fower/react';

export default () => {
  return (
    <Box toCenterX p6 bgOrange100 column row--sm>
      <Box
        as="img"
        src="https://bit.ly/3iRRLWF"
        rounded
        w-100p
        w-200--sm
        mr5--sm
      />
      <Box>
        <Box textLG fontBold>
          Lorem Ipsum
        </Box>
        <Box>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Box>
      </Box>
    </Box>
  );
};

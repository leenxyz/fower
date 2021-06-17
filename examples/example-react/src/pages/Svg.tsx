import { Box } from '@fower/react';

export default () => {
  return (
    <Box toCenter h-100vh space3 flexWrap>
      <Box
        square10
        as="svg"
        fillNone
        // fillCurrent
        // stroke="currentColor"
        gray800
        stroke-1
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
        />
      </Box>

      <Box
        square10
        as="svg"
        fillNone
        // fillCurrent
        gray800
        stroke-1
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
        />
      </Box>
    </Box>
  );
};

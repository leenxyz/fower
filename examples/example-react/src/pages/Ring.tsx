import { Box } from '@fower/react';

export default () => {
  return (
    <Box toCenter h-100vh space3 flexWrap>
      <Box
        as="input"
        p4
        bgGray100
        outlineNone
        rounded
        ringRed500-2--T60--focus
        border
        borderRed400
      />

      <Box as="input" p4 bgGray100 outlineNone ring-2--T40--focus />
    </Box>
  );
};

import { Box, Text } from '@styli/react';

export default () => {
  return (
    <div>
      <Box
        // text4XL
        css={{
          ':hover': {
            backgroundColor: '#feebc8',
          },
        }}
      >
        <span>Hi, Styli!</span>
      </Box>
      <Box
        css={{
          backgroundColor: '#feebc8',
        }}
      >
        Use Atomic Props in CSS Props
      </Box>
    </div>
  );
  return (
    <Box>
      <Box>CSS Prop</Box>

      <Text
        text4XL
        red500
        css={{
          textShadow: '1px 0 5px #FC0',
          textDecoration: 'underline',
        }}
      >
        Hi, Styli!
      </Text>

      <Box
        text4XL
        css={{
          backgroundColor: '#edf2f7',
          ':hover': {
            backgroundColor: '#feebc8',
          },
          '.title': {
            fontWeight: 'bold',
          },
          span: {
            color: 'deeppink',
          },
        }}
      >
        <div className="title">Nested demo</div>
        <span>Hi, Styli!</span>
      </Box>
    </Box>
  );
};

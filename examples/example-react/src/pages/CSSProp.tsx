import { Box, Text } from '@styli/react';

export default () => {
  return (
    <Box
      text4XL
      css={{
        // p: 1,
        // p: true,
        // display: 'flex',
        // p0: true,
        backdropFilter: 'inherit',
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

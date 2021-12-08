import { Box } from '@fower/react';

export default () => {
  const a = 1;
  return (
    <Box>
      <Box
        css={{
          color: () => (a > 0 ? 'red' : 'blue'),
        }}
      >
        foo
      </Box>
      <Box
        sx={{
          color: 'green',
        }}
      >
        bar
      </Box>
    </Box>
  );
  return (
    <Box>
      <Box
        text4XL
        red500
        css={{
          textShadow: '1px 0 5px #FC0',
          textDecoration: 'underline',
        }}
      >
        Hi, Fower!
      </Box>

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
        <span>Hi, Fower!</span>
      </Box>
    </Box>
  );
};

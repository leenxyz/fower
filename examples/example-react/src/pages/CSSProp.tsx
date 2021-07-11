import { Box } from '@fower/react';

export default () => {
  return (
    <Box
      className="a"
      textXL
      red500
      css={{
        '&.a .b': {
          fontBold: true,
        },
        '&.a': {
          blue500: true,
          text4XL: true,
        },
        textShadow: '1px 0 5px #FC0',
        // textDecoration: 'underline',
      }}
    >
      <Box className="b">FOO</Box>
      <Box teal500>bar</Box>
      <Box red500>bar</Box>
      Hi, Fower!
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

import { Box } from '@styli/react';

export default () => {
  return (
    <Box>
      <Box text3XL fontBold>
        Color
      </Box>

      <Box textXL red500>
        Red500
      </Box>

      <Box textXL red500>
        Red500
      </Box>

      <Box textXL red500-L30>
        Red500-L30
      </Box>

      <Box textXL green400>
        Green400
      </Box>

      <Box textXL colorPrimary>
        colorPrimary
      </Box>

      <Box textXL colorPrimary-O20>
        colorPrimary-O20
      </Box>

      <Box textXL colorPrimary-D20>
        colorPrimary-D20
      </Box>

      <Box textXL colorPrimary-L20>
        colorPrimary-L20
      </Box>

      <Box textXL color="yellowgreen">
        yellowgreen
      </Box>

      <Box textXL color="#000">
        #000
      </Box>

      <Box textXL color="#000-T50">
        #000-T50
      </Box>

      <Box textXL color="#666-D20">
        #666-D20
      </Box>

      <Box textXL color="#666-L20">
        color="#666-L20"
      </Box>

      <Box textXL color="green400">
        color="green400"
      </Box>

      <Box textXL color="green400-T40">
        color="green400-T40"
      </Box>

      <Box textXL color="primary">
        color="primary"
      </Box>

      <Box textXL color="primary-D40">
        color="primary-D40"
      </Box>

      <Box textXL red500 green500--hover>
        green500--hover
      </Box>

      <Box textXL red500 green500-T20--hover>
        green500-T20--hover
      </Box>

      <Box textXL red500 green500-D20--hover>
        green500-D20--hover
      </Box>

      <Box textXL color="#000" color--hover="#000-T50">
        #000--hover
      </Box>

      <Box textXL colorPrimary colorInfo--hover>
        colorInfo--hover
      </Box>

      <Box textXL red500 green500--active>
        green500--active
      </Box>

      <Box textXL color={['yellowgreen', 'purple', 'deeppink', 'info']}>
        color=['yellowgreen', 'purple', 'deeppink', 'red']
      </Box>

      <Box textXL trueGray500>
        trueGray500
      </Box>
    </Box>
  );
};

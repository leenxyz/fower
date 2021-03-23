import React from 'react';
import { Box } from '@styli/react';

export default () => {
  return (
    <Box>
      <Box f-30 fontBold>
        Color
      </Box>

      <Box f-20 red500>
        Red500
      </Box>

      <Box f-20 red500-L30>
        Red500-L30
      </Box>

      <Box f-20 green400>
        Green400
      </Box>

      <Box f-20 colorPrimary>
        colorPrimary
      </Box>

      <Box f-20 colorPrimary-O20>
        colorPrimary-O20
      </Box>

      <Box f-20 colorPrimary-D20>
        colorPrimary-D20
      </Box>

      <Box f-20 colorPrimary-L20>
        colorPrimary-L20
      </Box>

      <Box f-20 color="yellowgreen">
        yellowgreen
      </Box>

      <Box f-20 color="#000">
        #000
      </Box>

      <Box f-20 color="#000-T50">
        #000-T50
      </Box>

      <Box f-20 color="#666-D20">
        #666-D20
      </Box>

      <Box f-20 color="#666-L20">
        color="#666-L20"
      </Box>

      <Box f-20 color="green400">
        color="green400"
      </Box>

      <Box f-20 color="green400-O20">
        color="green400-O20"
      </Box>

      <Box f-20 color="green400-T20">
        color="green400-T20"
      </Box>

      <Box f-20 color="primary">
        color="primary"
      </Box>

      <Box f-20 color="primary-D40">
        color="primary-D40"
      </Box>

      <Box f-20 red500 green500--hover>
        green500--hover
      </Box>

      <Box f-20 red500 green500-T20--hover>
        green500-T20--hover
      </Box>

      <Box f-20 red500 green500-D20--hover>
        green500-D20--hover
      </Box>

      <Box f-20 color="#000" color--hover="#000-T50">
        #000--hover
      </Box>

      <Box f-20 colorPrimary colorInfo--hover>
        colorInfo--hover
      </Box>

      <Box f-20 red500 green500--active>
        green500--active
      </Box>

      <Box f-20 color={['yellowgreen', 'purple', 'deeppink', 'info']}>
        color=['yellowgreen', 'purple', 'deeppink', 'red']
      </Box>

      <Box f-20 trueGray500>
        trueGray500
      </Box>
    </Box>
  );
};

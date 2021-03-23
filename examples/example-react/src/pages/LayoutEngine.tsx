import React from 'react';
import { Box } from '@styli/react';

export default () => {
  return (
    <Box>
      <Box>row toLeft</Box>
      <Box h-240 textXS debugChildren row toLeft>
        <Box s-100>AAA</Box>
        <Box s-100>BBB</Box>
      </Box>

      <Box>column toLeft</Box>
      <Box h-240 textXS debugChildren column toLeft>
        <Box s-100>AAA</Box>
        <Box s-100>BBB</Box>
      </Box>

      <Box>row toRight</Box>
      <Box h-240 textXS debugChildren row toRight>
        <Box s-100>AAA</Box>
        <Box s-100>BBB</Box>
      </Box>

      <Box>column toRight</Box>
      <Box h-240 textXS debugChildren column toRight>
        <Box s-100>AAA</Box>
        <Box s-100>BBB</Box>
      </Box>

      <Box>row toTop</Box>
      <Box h-240 textXS debugChildren row toTop>
        <Box s-100>AAA</Box>
        <Box s-100>BBB</Box>
      </Box>

      <Box>column toTop</Box>
      <Box h-240 textXS debugChildren column toTop>
        <Box s-100>AAA</Box>
        <Box s-100>BBB</Box>
      </Box>

      <Box>row toBottom</Box>
      <Box h-240 textXS debugChildren row toBottom>
        <Box s-100>AAA</Box>
        <Box s-100>BBB</Box>
      </Box>

      <Box>column toBottom</Box>
      <Box h-240 textXS debugChildren column toBottom>
        <Box s-100>AAA</Box>
        <Box s-100>BBB</Box>
      </Box>

      <Box>toCenter</Box>
      <Box direction="row" toCenter h-240 textXS debugChildren>
        <Box s-100>AA</Box>
        <Box s-100>BB</Box>
      </Box>

      <Box>row toCenterX</Box>
      <Box direction="row" toCenterX h-240 textXS debugChildren>
        <Box s-100>AA</Box>
        <Box s-100>BB</Box>
      </Box>

      <Box>column toCenterX</Box>
      <Box column toCenterX h-240 textXS debugChildren>
        <Box s-100>AA</Box>
        <Box s-100>BB</Box>
      </Box>

      <Box>toCenterY</Box>
      <Box direction="row" toCenterY h-240 textXS debugChildren>
        <Box s-100>AA</Box>
        <Box s-100>BB</Box>
      </Box>

      <Box>column toCenterY</Box>
      <Box column toCenterY h-240 textXS debugChildren>
        <Box s-100>AA</Box>
        <Box s-100>BB</Box>
      </Box>

      <Box>row toBetween</Box>
      <Box row toBetween h-240 textXS debugChildren>
        <Box s-100>AA</Box>
        <Box s-100>BB</Box>
      </Box>

      <Box>column toBetween</Box>
      <Box column toBetween h-240 textXS debugChildren>
        <Box s-100>AA</Box>
        <Box s-100>BB</Box>
      </Box>

      <Box>row toEvenly</Box>
      <Box row toEvenly toCenterY h-240 textXS debugChildren>
        <Box s-100>AA</Box>
        <Box s-100>BB</Box>
      </Box>

      <Box>column toEvenly</Box>
      <Box column toEvenly toCenterY h-240 textXS debugChildren>
        <Box s-100>AA</Box>
        <Box s-100>BB</Box>
      </Box>

      <Box>row toAround</Box>
      <Box row toAround h-240 textXS debugChildren>
        <Box s-100>AA</Box>
        <Box s-100>BB</Box>
      </Box>

      <Box>column toAround</Box>
      <Box column toAround h-240 textXS debugChildren>
        <Box s-100>AA</Box>
        <Box s-100>BB</Box>
      </Box>

      <Box>compose</Box>
      <Box row toBottom toCenterX h-240 textXS debugChildren>
        <Box s-100>AA</Box>
        <Box s-100>BB</Box>
      </Box>
    </Box>
  );
};

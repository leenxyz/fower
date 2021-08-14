import { Box } from '@fower/react';

export default () => {
  return (
    <Box cursorPointer>
      <Box>row toLeft</Box>
      <Box h-240 textXS debugChildren debug row toLeft>
        <Box square-100>AAA</Box>
        <Box square-100>BBB</Box>
      </Box>

      <Box>column toLeft</Box>
      <Box h-240 textXS debugChildren debug column toLeft>
        <Box square-100>AAA</Box>
        <Box square-100>BBB</Box>
      </Box>

      <Box>row toRight</Box>
      <Box h-240 textXS debugChildren debug row toRight>
        <Box square-100>AAA</Box>
        <Box square-100>BBB</Box>
      </Box>

      <Box>column toRight</Box>
      <Box h-240 textXS debugChildren debug column toRight>
        <Box square-100>AAA</Box>
        <Box square-100>BBB</Box>
      </Box>

      <Box>row toTop</Box>
      <Box h-240 textXS debugChildren debug row toTop>
        <Box square-100>AAA</Box>
        <Box square-100>BBB</Box>
      </Box>

      <Box>column toTop</Box>
      <Box h-240 textXS debugChildren debug column toTop>
        <Box square-100>AAA</Box>
        <Box square-100>BBB</Box>
      </Box>

      <Box>row toBottom</Box>
      <Box h-240 textXS debugChildren debug row toBottom>
        <Box square-100>AAA</Box>
        <Box square-100>BBB</Box>
      </Box>

      <Box>column toBottom</Box>
      <Box h-240 textXS debugChildren debug column toBottom>
        <Box square-100>AAA</Box>
        <Box square-100>BBB</Box>
      </Box>

      <Box>toCenter</Box>
      <Box toCenter h-240 textXS debugChildren debug>
        <Box square-100>AA</Box>
        <Box square-100>BB</Box>
      </Box>

      <Box>row toCenterX</Box>
      <Box toCenterX h-240 textXS debugChildren debug>
        <Box square-100>AA</Box>
        <Box square-100>BB</Box>
      </Box>

      <Box>column toCenterX</Box>
      <Box column toCenterX h-240 textXS debugChildren debug>
        <Box square-100>AA</Box>
        <Box square-100>BB</Box>
      </Box>

      <Box>toCenterY</Box>
      <Box toCenterY h-240 textXS debugChildren debug>
        <Box square-100>AA</Box>
        <Box square-100>BB</Box>
      </Box>

      <Box>column toCenterY</Box>
      <Box column toCenterY h-240 textXS debugChildren debug>
        <Box square-100>AA</Box>
        <Box square-100>BB</Box>
      </Box>

      <Box>row toBetween</Box>
      <Box row toBetween h-240 textXS debugChildren debug>
        <Box square-100>AA</Box>
        <Box square-100>BB</Box>
      </Box>

      <Box>column toBetween</Box>
      <Box column toBetween h-240 textXS debugChildren debug>
        <Box square-100>AA</Box>
        <Box square-100>BB</Box>
      </Box>

      <Box>row toEvenly</Box>
      <Box row toEvenly toCenterY h-240 textXS debugChildren debug>
        <Box square-100>AA</Box>
        <Box square-100>BB</Box>
      </Box>

      <Box>column toEvenly</Box>
      <Box column toEvenly toCenterY h-240 textXS debugChildren debug>
        <Box square-100>AA</Box>
        <Box square-100>BB</Box>
      </Box>

      <Box>row toAround</Box>
      <Box row toAround h-240 textXS debugChildren debug>
        <Box square-100>AA</Box>
        <Box square-100>BB</Box>
      </Box>

      <Box>column toAround</Box>
      <Box column toAround h-240 textXS debugChildren debug>
        <Box square-100>AA</Box>
        <Box square-100>BB</Box>
      </Box>

      <Box>compose</Box>
      <Box row toBottom toCenterX h-240 textXS debugChildren debug>
        <Box square-100>AA</Box>
        <Box square-100>BB</Box>
      </Box>
    </Box>
  );
};

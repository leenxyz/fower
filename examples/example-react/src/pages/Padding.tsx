import { Box } from '@styli/react';

export default () => {
  return (
    <Box>
      <Box text3XL fontBold>
        Padding
      </Box>

      <Box debug>
        <Box p4 inlineBlock>
          p4
        </Box>
        <Box pt4 inlineBlock>
          pt4
        </Box>
        <Box pr4 inlineBlock>
          pr4
        </Box>
        <Box pb4 inlineBlock>
          pb4
        </Box>
        <Box pl4 inlineBlock>
          pl4
        </Box>
        <Box px4 inlineBlock>
          px4
        </Box>
        <Box py4 inlineBlock>
          py4
        </Box>

        <Box p-20 inlineBlock>
          p-20
        </Box>

        <Box p-20px-10px inlineBlock>
          p-20px-10px
        </Box>

        <Box pt-20 inlineBlock>
          pt-20
        </Box>
        <Box pr-20 inlineBlock>
          pr-20
        </Box>
        <Box pt-20 inlineBlock>
          pt-20
        </Box>
        <Box pl-20 inlineBlock>
          pl-20
        </Box>
        <Box px-20 inlineBlock>
          px-40
        </Box>
        <Box py-20 inlineBlock>
          py-40
        </Box>
      </Box>
    </Box>
  );
};

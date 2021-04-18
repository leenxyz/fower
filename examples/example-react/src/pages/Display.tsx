import { Box } from '@fower/react';

export default () => {
  return (
    <Box spaceY10>
      <Box spaceY-10>
        <Box bgAmber400 rounded-8 h-60 block></Box>
        <Box bgAmber400 rounded-8 h-60 block></Box>
        <Box bgAmber400 rounded-8 h-60 block></Box>
      </Box>

      <Box white spaceX2>
        <Box bgAmber400 rounded-8 p4 inline>
          A
        </Box>
        <Box bgAmber400 rounded-8 p4 inline>
          B
        </Box>
        <Box bgAmber400 rounded-8 p4 inline>
          C
        </Box>
      </Box>

      <Box white spaceX2>
        <Box bgAmber400 rounded-8 p4 inlineBlock>
          A
        </Box>
        <Box bgAmber400 rounded-8 p4 inlineBlock>
          B
        </Box>
        <Box bgAmber400 rounded-8 p4 inlineBlock>
          C
        </Box>
      </Box>

      <Box spaceY2>
        <Box white spaceX2 flex bgAmber100 p4>
          <Box bgAmber400 rounded-8 p4>
            A
          </Box>
          <Box bgAmber400 rounded-8 p4>
            B
          </Box>
          <Box bgAmber400 rounded-8 p4>
            C
          </Box>
        </Box>

        <Box white spaceX2 flex bgAmber100 p4>
          <Box bgAmber400 rounded-8 p4>
            A
          </Box>
          <Box bgAmber400 rounded-8 p4>
            B
          </Box>
          <Box bgAmber400 rounded-8 p4>
            C
          </Box>
        </Box>
      </Box>

      <Box spaceX2>
        <Box white spaceX2 inlineFlex bgAmber100 p4>
          <Box bgAmber400 rounded-8 p4>
            A
          </Box>
          <Box bgAmber400 rounded-8 p4>
            B
          </Box>
          <Box bgAmber400 rounded-8 p4>
            C
          </Box>
        </Box>

        <Box white spaceX2 inlineFlex bgAmber100 p4>
          <Box bgAmber400 rounded-8 p4>
            A
          </Box>
          <Box bgAmber400 rounded-8 p4>
            B
          </Box>
          <Box bgAmber400 rounded-8 p4>
            C
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

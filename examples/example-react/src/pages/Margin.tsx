import { Box } from '@fower/react';

export default () => {
  return (
    <Box inlineBlock debug>
      <Box m-40 p4 inlineBlock bgRed400 className="main gogo">
        m4
      </Box>
      <Box m-30 p3 inlineBlock bgRed400 className="main gogo">
        m4
      </Box>
    </Box>
  );
  return (
    <Box>
      <Box text3XL fontBold>
        Margin
      </Box>
      <Box debug debugChildren>
        <Box m-auto inlineBlock>
          auto
        </Box>

        <Box inlineBlock>
          <Box m4 inlineBlock bgRed400>
            m4
          </Box>
        </Box>

        <Box inlineBlock>
          <Box mt4 inlineBlock>
            mt4
          </Box>
        </Box>
        <Box inlineBlock>
          <Box mr4 inlineBlock>
            mr4
          </Box>
        </Box>
        <Box inlineBlock>
          <Box mb4 inlineBlock>
            mb4
          </Box>
        </Box>
        <Box inlineBlock>
          <Box ml4 inlineBlock>
            ml4
          </Box>
        </Box>
        <Box inlineBlock>
          <Box mx4 inlineBlock>
            mx4
          </Box>
        </Box>

        <Box inlineBlock>
          <Box my4 inlineBlock>
            my4
          </Box>
        </Box>

        <Box inlineBlock>
          <Box m-20 inlineBlock>
            m-20
          </Box>
        </Box>
        <Box inlineBlock>
          <Box mt-20 inlineBlock>
            m-20
          </Box>
        </Box>

        <Box inlineBlock>
          <Box mt-20 inlineBlock>
            mt-20
          </Box>
        </Box>

        <Box inlineBlock>
          <Box mr-20 inlineBlock>
            mr-20
          </Box>
        </Box>

        <Box inlineBlock>
          <Box mt-20 inlineBlock>
            mt-20
          </Box>
        </Box>

        <Box inlineBlock>
          <Box ml-20 inlineBlock>
            ml-20
          </Box>
        </Box>

        <Box inlineBlock>
          <Box mx-20 inlineBlock>
            mx-20
          </Box>
        </Box>

        <Box inlineBlock>
          <Box my-20 inlineBlock>
            my-20
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

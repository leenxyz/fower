import { Box } from '@fower/react';
import { css } from '@fower/core';

export default () => {
  return (
    <Box
      className={css('p10', 'bgRed100', 'inlineBlock', 'bgBlue200--hover', {
        text4XL: true,
      })}
    >
      <div>gogo</div>
    </Box>
  );
};

import { Box } from '@fower/react';
import { useState, useEffect } from 'react';
import { css } from '@fower/core';

export default () => {
  const [value, setValue] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setValue(false);
    }, 4000);
  }, []);
  return (
    <Box
      className={css('p10', 'bgRed100', 'inlineBlock', 'bgBlue200--hover', {
        text4XL: value,
        toCenterY: true,
        ':hover': {
          text6XL: () => false,
        },
        '::before': {
          content: '"@"',
        },
      })}
    >
      <div>gogo</div>
    </Box>
  );
};

import { Box } from '@fower/react';
import { injectGlobalStyle } from '@fower/core';
import { css, setConfig } from '@fower/core';

setConfig({
  objectPropKeys: ['sx'],
});

// 预期输出 toRight，但是会输出空
console.log('----', css({ toRight: true }));

injectGlobalStyle({
  '.title': {
    fontWeight: 800,
    fontSize: '20px',
    color: 'hotpink',
  },
});

export default () => {
  return (
    <Box toCenter p4>
      <div className="title">Heading</div>
    </Box>
  );
};

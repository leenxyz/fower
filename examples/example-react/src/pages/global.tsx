import { Box } from '@fower/react';
import { injectGlobalStyle } from '@fower/core';
import { setConfig } from '@fower/core';

setConfig({
  objectPropKeys: ['css', 'sx'],
});

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

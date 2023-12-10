import { Box } from '@fower/react';
import { styled } from '@fower/styled';

const Text = styled(
  'span',
  ['text5XL', 'rounded', 'inlineBlock', 'm4', 'top-1'],
  {
    p: 4,
    textShadow: '1px 0 5px #FC0',
    ':hover': {
      p: 30,
    },
  },
);

export default function Styled() {
  // return (
  //   <Box bgYellow200 gray700 inlineBlock p4 m4>
  //     <div>gogo</div>
  //     styled text~~
  //   </Box>
  // );
  return (
    <Box toCenter h-100vh gap3 flexWrap>
      <Text p3 bgYellow200 gray700>
        styled text~~
      </Text>
      <Box p4 bgRed200>
        Box
      </Box>
    </Box>
  );
}

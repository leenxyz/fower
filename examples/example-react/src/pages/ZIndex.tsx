import { Box } from '@fower/react';
import { styled } from '@fower/styled';

export default function Demo() {
  const Item = styled(
    'div',
    'white toCenter shadow bgAmber400 circle-80 absolute',
  );
  return (
    <Box white relative h-160 bgAmber100 p6>
      <Item zIndex-20>20</Item>
      <Item left-80 zIndex={10}>
        10
      </Item>
      <Item left-140 zIndex-0>
        0
      </Item>
    </Box>
  );
}

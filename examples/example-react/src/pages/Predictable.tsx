import { Box } from '@fower/react';
import { styled } from '@fower/styled';
import { FC } from 'react';

export default () => {
  const MyButton = (props) => {
    return <Box as="button" bgAmber500 p2 white {...props} />;
  };

  const Button = styled(MyButton);
  return (
    <Box>
      <Button>default</Button>
      <Button bgGreen500>bgGreen500</Button>
      <Button bgPurple500>bgPurple500</Button>
      <Button bgPink500>bgPink500</Button>
    </Box>
  );
};

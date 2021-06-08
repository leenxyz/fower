import { Box } from '@fower/react';
import { setTheme, composeAtom, createStyle } from '@fower/core';
import { styled } from '@fower/styled';

setTheme({
  colors: {
    brand100: '#fa0',
    modes: {
      dark: {
        brand100: '#dd0',
      },
    },
  },
});

composeAtom('formInput', {
  'border-2': true,
  borderGray200: true,
  'borderOrange400--focus': true,
  rounded: true,
  outlineNone: true,
  px4: true,
  py2: true,
});

const MyText = styled('span', 'border', 'p-1', 'rounded', {
  display: 'flex',
});

export default () => {
  console.log(
    '------createStyle:',
    createStyle('bgOrange300', 'rounded', {
      p10: true,
      textShadow: '1px 2px 2px #ccc',
    }),
  );
  return (
    <MyText text3XL fontBold green400>
      Hello world
    </MyText>
  );
  return (
    <Box
      rounded3XL
      text2XL
      _hover={['bgOrange300', 'border']}
      _md={['bgTeal400', 'text5XL']}
    >
      40 Lorem ipsum dolor sit amet
    </Box>
  );
  return (
    <Box _hover={['p1', 'p4']}>
      <Box text-30>40 Lorem ipsum dolor sit amet</Box>
      <Box text={40}>40 Lorem ipsum dolor sit amet</Box>
      <Box text={'20px'}>40 Lorem ipsum dolor sit amet</Box>
      <Box text-20px>40 Lorem ipsum dolor sit amet</Box>
      <Box text-17>Lorem ipsum dolor sit amet</Box>
      <Box text={17}>Lorem ipsum dolor sit amet</Box>
      <Box textXS>Lorem ipsum dolor sit amet</Box>
      <Box textSM>Lorem ipsum dolor sit amet</Box>
      <Box textBase>Lorem ipsum dolor sit amet</Box>
      <Box textLG>Lorem ipsum dolor sit amet</Box>
      <Box textXL>Lorem ipsum dolor sit amet</Box>
      <Box text2XL>Lorem ipsum dolor sit amet</Box>
      <Box text3XL>Lorem ipsum dolor sit amet</Box>
      <Box text4XL>Lorem ipsum dolor sit amet</Box>
      <Box text5XL>Lorem ipsum dolor sit amet</Box>
      <Box text6XL>Lorem ipsum dolor sit amet</Box>
      <Box text7XL>Lorem ipsum dolor sit amet</Box>
      <Box text8XL>Lorem ipsum dolor sit amet</Box>
      <Box text9XL>Lorem ipsum dolor sit amet</Box>
    </Box>
  );
};

import React, { FC } from 'react'
import { Box } from '@styli/react'
import { styled } from '@styli/styled'

interface Props {
  className?: string
}

const ContainerComponent: FC<Props> = ({ children, ...rest }) => {
  return (
    <Box bgBlue100 h-160 rounded-8 {...rest}>
      {children}
    </Box>
  )
}

const ItemA = () => {
  return <Box s-40 bgAmber400 rounded-8></Box>
}

const ItemB = () => {
  return <Box s-60 bgBlue400 rounded-8></Box>
}

const Type: FC<{ type?: string }> = ({ children, type = 'row' }) => {
  return (
    <Box toCenter mb2 mt2 textXS spaceX1>
      <Box toCenter px2 py-2 rounded-999 bgGray300 inlineBlock>
        {type}
      </Box>

      <Box toCenter px2 py-2 rounded-999 bgGray300 inlineBlock>
        {children}
      </Box>
    </Box>
  )
}

const Container = styled(ContainerComponent)

export const LayoutEngine1 = () => {
  return (
    <Box bgGray100 p4 toCenter column mb2>
      <Box bgYellow300 inlineBlock p3 mb4 rounded-8 fontBold>
        flex-direction: row
      </Box>
      <Box grid gridTemplateColumns-3 gap-20 w-100p>
        <Box column>
          <Type>toLeft</Type>
          <Container toLeft>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toRight</Type>
          <Container toRight>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toTop</Type>
          <Container toTop>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toBottom</Type>
          <Container toBottom>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toCenter</Type>
          <Container toCenter>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toCenterX</Type>
          <Container toCenterX>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toCenterY</Type>
          <Container toCenterY>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toBetween</Type>
          <Container toBetween>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toEvenly</Type>
          <Container toEvenly>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toAround</Type>
          <Container toAround>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

export const LayoutEngine2 = () => {
  return (
    <Box bgGray100 p4 toCenter column mb2>
      <Box bgYellow300 inlineBlock p3 mb4 rounded-8 fontBold>
        flex-direction: column
      </Box>
      <Box grid gridTemplateColumns-3 gap-20 w-100p>
        <Box column>
          <Type type="column">toLeft</Type>
          <Container toLeft column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toRight</Type>
          <Container toRight column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toTop</Type>
          <Container toTop column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toBottom</Type>
          <Container toBottom column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toCenter</Type>
          <Container toCenter column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toCenterX</Type>
          <Container toCenterX column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toCenterY</Type>
          <Container toCenterY column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toBetween</Type>
          <Container toBetween column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toEvenly</Type>
          <Container toEvenly column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toAround</Type>
          <Container toAround column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

export const LayoutEngine3 = () => {
  return (
    <Box bgGray100 p4 toCenter column mb2>
      <Box bgYellow300 inlineBlock p3 mb4 rounded-8 fontBold>
        Compose base on toLeft
      </Box>
      <Box grid gridTemplateColumns-3 gap-20 w-100p>
        <Box column>
          <Type>toLeft toTop</Type>
          <Container toLeft toTop>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toLeft toCenterY</Type>
          <Container toLeft toCenterY>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toLeft toBottom</Type>
          <Container toLeft toBottom>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toLeft toTop</Type>
          <Container toLeft toTop column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toLeft toCenterY</Type>
          <Container toLeft toCenterY column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toLeft toBottom</Type>
          <Container toLeft toBottom column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toLeft toBetween</Type>
          <Container toLeft toBetween column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toLeft toEvenly</Type>
          <Container toLeft toEvenly column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toLeft toAround</Type>
          <Container toLeft toAround column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

export const LayoutEngine4 = () => {
  return (
    <Box bgGray100 p4 toCenter column mb2>
      <Box bgYellow300 inlineBlock p3 mb4 rounded-8 fontBold>
        Compose base on toRight
      </Box>
      <Box grid gridTemplateColumns-3 gap-20 w-100p>
        <Box column>
          <Type>toRight toTop</Type>
          <Container toRight toTop>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toRight toCenterY</Type>
          <Container toRight toCenterY>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toRight toBottom</Type>
          <Container toRight toBottom>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toRight toTop</Type>
          <Container toRight toTop column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toRight toCenterY</Type>
          <Container toRight toCenterY column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toRight toBottom</Type>
          <Container toRight toBottom column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toRight toBetween</Type>
          <Container toRight toBetween column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toRight toEvenly</Type>
          <Container toRight toEvenly column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toRight toAround</Type>
          <Container toRight toAround column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

export const LayoutEngine5 = () => {
  return (
    <Box bgGray100 p4 toCenter column mb2>
      <Box bgYellow300 inlineBlock p3 mb4 rounded-8 fontBold>
        Compose base on toTop
      </Box>
      <Box grid gridTemplateColumns-3 gap-20 w-100p>
        <Box column>
          <Type>toTop toLeft</Type>
          <Container toTop toLeft>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toTop toCenterX</Type>
          <Container toTop toCenterX>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toTop toRight</Type>
          <Container toTop toRight>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toTop toLeft</Type>
          <Container toTop toLeft column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toTop toCenterX</Type>
          <Container toTop toCenterX column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toTop toRight</Type>
          <Container toTop toRight column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toTop toBetween</Type>
          <Container toTop toBetween>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toTop toEvenly</Type>
          <Container toTop toEvenly>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toTop toAround</Type>
          <Container toTop toAround>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

export const LayoutEngine6 = () => {
  return (
    <Box bgGray100 p4 toCenter column mb2>
      <Box bgYellow300 inlineBlock p3 mb4 rounded-8 fontBold>
        Compose base on toBottom
      </Box>
      <Box grid gridTemplateColumns-3 gap-20 w-100p>
        <Box column>
          <Type>toBottom toLeft</Type>
          <Container toBottom toLeft>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toBottom toCenterX</Type>
          <Container toBottom toCenterX>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toBottom toRight</Type>
          <Container toBottom toRight>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toBottom toLeft</Type>
          <Container toBottom toLeft column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toBottom toCenterX</Type>
          <Container toBottom toCenterX column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toBottom toRight</Type>
          <Container toBottom toRight column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toBottom toBetween</Type>
          <Container toBottom toBetween>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toBottom toEvenly</Type>
          <Container toBottom toEvenly>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toBottom toAround</Type>
          <Container toBottom toAround>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

export const LayoutEngine7 = () => {
  return (
    <Box bgGray100 p4 toCenter column mb2>
      <Box bgYellow300 inlineBlock p3 mb4 rounded-8 fontBold>
        Compose base on toCenterX
      </Box>
      <Box grid gridTemplateColumns-3 gap-20 w-100p>
        <Box column>
          <Type>toCenterX toTop</Type>
          <Container toCenterX toTop>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toCenterX toCenterY</Type>
          <Container toCenterX toCenterY>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toCenterX toBottom</Type>
          <Container toCenterX toBottom>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toCenterX toTop</Type>
          <Container toCenterX toTop column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toCenterX toCenterY</Type>
          <Container toCenterX toCenterY column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toCenterX toBottom</Type>
          <Container toCenterX toBottom column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toCenterX toBetween</Type>
          <Container toCenterX toBetween column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toCenterX toEvenly</Type>
          <Container toCenterX toEvenly column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toCenterX toAround</Type>
          <Container toCenterX toAround column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

export const LayoutEngine8 = () => {
  return (
    <Box bgGray100 p4 toCenter column mb2>
      <Box bgYellow300 inlineBlock p3 mb4 rounded-8 fontBold>
        Compose base on toCenterY
      </Box>
      <Box grid gridTemplateColumns-3 gap-20 w-100p>
        <Box column>
          <Type>toCenterY toLeft</Type>
          <Container toCenterY toLeft>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toCenterY toCenterX</Type>
          <Container toCenterY toCenterX>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toCenterY toRight</Type>
          <Container toCenterY toRight>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toCenterY toLeft</Type>
          <Container toCenterY toLeft column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toCenterY toCenterX</Type>
          <Container toCenterY toCenterX column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toCenterY toRight</Type>
          <Container toCenterY toRight column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toCenterY toBetween</Type>
          <Container toCenterY toBetween>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toCenterY toEvenly</Type>
          <Container toCenterY toEvenly>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toCenterY toAround</Type>
          <Container toCenterY toAround>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

export const LayoutEngine9 = () => {
  return (
    <Box bgGray100 p4 toCenter column mb2>
      <Box bgYellow300 inlineBlock p3 mb4 rounded-8 fontBold>
        Compose base on toBetween
      </Box>
      <Box grid gridTemplateColumns-3 gap-20 w-100p>
        <Box column>
          <Type>toBetween toTop</Type>
          <Container toBetween toTop>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toBetween toCenterY</Type>
          <Container toBetween toCenterY>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toBetween toBottom</Type>
          <Container toBetween toBottom>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toBetween toLeft</Type>
          <Container toBetween toLeft column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toBetween toCenterX</Type>
          <Container toBetween toCenterX column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toBetween toRight</Type>
          <Container toBetween toRight column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

export const LayoutEngine10 = () => {
  return (
    <Box bgGray100 p4 toCenter column mb2>
      <Box bgYellow300 inlineBlock p3 mb4 rounded-8 fontBold>
        Compose base on toEvenly
      </Box>
      <Box grid gridTemplateColumns-3 gap-20 w-100p>
        <Box column>
          <Type>toEvenly toTop</Type>
          <Container toEvenly toTop>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toEvenly toCenterY</Type>
          <Container toEvenly toCenterY>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toEvenly toBottom</Type>
          <Container toEvenly toBottom>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toEvenly toLeft</Type>
          <Container toEvenly toLeft column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toEvenly toCenterX</Type>
          <Container toEvenly toCenterX column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toEvenly toRight</Type>
          <Container toEvenly toRight column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

export const LayoutEngine11 = () => {
  return (
    <Box bgGray100 p4 toCenter column mb2>
      <Box bgYellow300 inlineBlock p3 mb4 rounded-8 fontBold>
        Compose base on toAround
      </Box>
      <Box grid gridTemplateColumns-3 gap-20 w-100p>
        <Box column>
          <Type>toAround toTop</Type>
          <Container toAround toTop>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toAround toCenterY</Type>
          <Container toAround toCenterY>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type>toAround toBottom</Type>
          <Container toAround toBottom>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toAround toLeft</Type>
          <Container toAround toLeft column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toAround toCenterX</Type>
          <Container toAround toCenterX column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>

        <Box column>
          <Type type="column">toAround toRight</Type>
          <Container toAround toRight column>
            <ItemA></ItemA>
            <ItemB></ItemB>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

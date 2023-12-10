import { Box } from '@fower/react'

export default function App() {
  return (
    <Box gap10>
      <Box gap-10>
        <Box bgOrange400 rounded-8 h-60 block></Box>
        <Box bgOrange400 rounded-8 h-60 block></Box>
        <Box bgOrange400 rounded-8 h-60 block></Box>
      </Box>

      <Box white gap2>
        <Box bgOrange400 rounded-8 p4 inline>
          A
        </Box>
        <Box bgOrange400 rounded-8 p4 inline>
          B
        </Box>
        <Box bgOrange400 rounded-8 p4 inline>
          C
        </Box>
      </Box>

      <Box white gap2>
        <Box bgOrange400 rounded-8 p4 inlineBlock>
          A
        </Box>
        <Box bgOrange400 rounded-8 p4 inlineBlock>
          B
        </Box>
        <Box bgOrange400 rounded-8 p4 inlineBlock>
          C
        </Box>
      </Box>

      <Box gap2>
        <Box white gap2 flex bgOrange100 p4>
          <Box bgOrange400 rounded-8 p4>
            A
          </Box>
          <Box bgOrange400 rounded-8 p4>
            B
          </Box>
          <Box bgOrange400 rounded-8 p4>
            C
          </Box>
        </Box>

        <Box white gap2 flex bgOrange100 p4>
          <Box bgOrange400 rounded-8 p4>
            A
          </Box>
          <Box bgOrange400 rounded-8 p4>
            B
          </Box>
          <Box bgOrange400 rounded-8 p4>
            C
          </Box>
        </Box>
      </Box>

      <Box gap2>
        <Box white gap2 inlineFlex bgOrange100 p4>
          <Box bgOrange400 rounded-8 p4>
            A
          </Box>
          <Box bgOrange400 rounded-8 p4>
            B
          </Box>
          <Box bgOrange400 rounded-8 p4>
            C
          </Box>
        </Box>

        <Box white gap2 inlineFlex bgOrange100 p4>
          <Box bgOrange400 rounded-8 p4>
            A
          </Box>
          <Box bgOrange400 rounded-8 p4>
            B
          </Box>
          <Box bgOrange400 rounded-8 p4>
            C
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

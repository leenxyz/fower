const commonHeadingStyle = {
  display: 'block',
  fontWeight: 'bold',
}

export const defaultTagStyle = {
  empty: {},
  body: {
    margin: 0,
    padding: 0,
  },
  h1: {
    ...commonHeadingStyle,
    fontSize: '2em',
  },
  h2: {
    ...commonHeadingStyle,
    fontSize: '1.5em',
  },
  h3: {
    ...commonHeadingStyle,
    fontSize: '1.17em',
  },
  h4: {
    ...commonHeadingStyle,
    fontSize: '1.12em',
  },
  h5: {
    ...commonHeadingStyle,
    fontSize: '0.83em',
  },
  h6: {
    ...commonHeadingStyle,
    fontSize: '0.75em',
  }
}

export type TagType = keyof typeof defaultTagStyle

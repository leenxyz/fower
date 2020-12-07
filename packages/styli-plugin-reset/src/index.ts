import { CSSObject, StyliPlugin } from '@styli/types'

// github.com/necolas/normalize.css
export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-reset',
    isMatch(key) {
      return key === 'reset'
    },
    onAtomStyleCreate(atom) {
      atom.type = 'global'

      if (atom.propValue === true) {
        atom.style = {
          html: {
            lineHeight: 1.15,
            WebkitTextSizeAdjust: '100%',
          },
          body: {
            margin: 0,
          },
          main: {
            display: 'block',
          },
          h1: {
            fontSize: '2em',
            margin: '0.67em 0',
          },
          hr: {
            boxSizing: 'content-box',
            height: 0,
            overflow: 'visible',
          },
          pre: {
            fontFamily: 'monospace, monospace',
            fontSize: '1em',
          },
          a: {
            backgroundColor: 'transparent',
          },

          'abbr[title]': {
            borderBottom: 'none',
            textDecoration: 'underline',
          },

          b: {
            fontWeight: 'bolder',
          },
          strong: {
            fontWeight: 'bolder',
          },
          code: {
            fontFamily: 'monospace, monospace',
            fontSize: '1em',
          },

          kbd: {
            fontFamily: 'monospace, monospace',
            fontSize: '1em',
          },

          samp: {
            fontFamily: 'monospace, monospace',
            fontSize: '1em',
          },

          small: {
            fontSize: '80%',
          },

          sub: {
            fontSize: '75%',
            lineHeight: 0,
            position: 'relative',
            verticalAlign: 'baseline',
            bottom: '-0.25em',
          },

          sup: {
            fontSize: '75%',
            lineHeight: 0,
            position: 'relative',
            verticalAlign: 'baseline',
            top: '-0.5em',
          },

          img: {
            borderStyle: 'none',
          },
          button: {
            fontFamily: 'inherit',
            fontSize: '100%',
            lineHeight: 1.15,
            margin: 0,
            overflow: 'visible',
            textTransform: 'none',
          },

          '[type="button"]': {
            WebkitAppearance: 'button',
          },

          '[type="reset"]': {
            WebkitAppearance: 'button',
          },

          '[type="submit"]': {
            WebkitAppearance: 'button',
          },

          'button::-moz-focus-inner': {
            borderStyle: 'none',
            padding: 0,
          },

          '[type="button"]::-moz-focus-inner': {
            borderStyle: 'none',
            padding: 0,
          },

          '[type="reset"]::-moz-focus-inner': {
            borderStyle: 'none',
            padding: 0,
          },

          '[type="submit"]::-moz-focus-inner': {
            borderStyle: 'none',
            padding: 0,
          },

          'button::-moz-focusring': {
            outline: '1px dotted ButtonText',
          },

          '[type="button"]::-moz-focusring': {
            outline: '1px dotted ButtonText',
          },

          '[type="reset"]::-moz-focusring': {
            outline: '1px dotted ButtonText',
          },

          '[type="submit"]::-moz-focusring': {
            outline: '1px dotted ButtonText',
          },

          input: {
            fontFamily: 'inherit',
            fontSize: '100%',
            lineHeight: 1.15,
            margin: 0,
            overflow: 'visible',
          },

          optgroup: {
            fontFamily: 'inherit',
            fontSize: '100%',
            lineHeight: 1.15,
            margin: 0,
          },

          select: {
            fontFamily: 'inherit',
            fontSize: '100%',
            lineHeight: 1.15,
            margin: 0,
            textTransform: 'none',
          },

          textarea: {
            fontFamily: 'inherit',
            fontSize: '100%',
            lineHeight: 1.15,
            margin: 0,
            overflow: 'auto',
          },

          '[type="checkbox"]': {
            boxSizing: 'border-box',
            padding: 0,
          },

          '[type="radio"]': {
            boxSizing: 'border-box',
            padding: 0,
          },

          '[type="number"]::-webkit-inner-spin-button': {
            height: 'auto',
          },

          '[type="number"]::-webkit-outer-spin-button': {
            height: 'auto',
          },

          '[type="search"]': {
            WebkitAppearance: 'textfield',
            outlineOffset: '-2px',
          },

          '[type="search"]::-webkit-search-decoration': {
            WebkitAppearance: 'none',
          },

          '::-webkit-file-upload-button': {
            font: 'inherit',
            WebkitAppearance: 'button',
          },

          fieldset: {
            padding: '0.35em 0.75em 0.625em',
          },

          legend: {
            boxSizing: 'border-box',
            color: 'inherit',
            display: 'table',
            maxWidth: '100%',
            padding: 0,
            whiteSpace: 'normal',
          },

          progress: {
            verticalAlign: 'baseline',
          },

          details: {
            display: 'block',
          },

          summary: {
            display: 'list-item',
          },

          template: {
            display: 'none',
          },

          '[hidden]': {
            display: 'none',
          },
        }
      } else {
        atom.style = atom.propValue as CSSObject
      }

      return atom
    },
  }
}

import { styli, Sheet } from '../src'

const config = {
  unit: 'px',
  inline: true,
  plugins: [
    {
      name: 'styli-plugin-test',
      isMatch(key: string) {
        return key === 'test'
      },
      onAtomStyleCreate(atom = {} as any) {
        atom.style = { fontSize: '10' }
        return atom
      },
    },
  ],
  theme: {
    colors: {
      gray30: '#333',
    },
  } as any,
}

const props = {
  test: true,
  style: {
    fontWeight: 'bold',
  },
  children: {},
}

describe('styli-core', () => {
  styli.configure(() => config)

  const sheet = new Sheet(props, styli.getTheme())

  it('toStyles', () => {
    expect(sheet.toStyles()).toMatchObject({ fontSize: '10' })
  })

  it('getParsedProps', () => {
    expect(sheet.getParsedProps()).toMatchObject({ style: { fontWeight: 'bold' }, children: {} })
  })
})

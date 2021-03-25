# TODO List

- left,top, right,bottom support spacing

- plugin-letter-spacing

- Global Styles

```js
createGlobalStyle({
  body: {
    margin: '0',
  },
})
```

- keyframes api

```jsx
const fadeIn = keyframes({
  '0%': { opacity: '0' },
  '100%': { opacity: '1' },
})

function Demo() {
  return (
    <Box
      css={{
        animationName: fadeIn,
      }}
    >
      something
    </Box>
  )
}
```

- createAtomicProps()

```jsx
createAtomicProps({
  display(value) {
    return {
      display: value,
    }
  },
})
```

- `setTheme` Api

```js
setTheme({
  colors: {
    primay100: '#eaa349',
  },
})
```

- Docs for API

# TODO List

- Global Styles

```js
injectGlobalStyle({
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

- 可读性和可维护性
- themeability
- type css var
- 可访问性

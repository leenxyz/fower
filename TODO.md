# TODO List

- left,top, right,bottom support spacing

- plugin-letter-spacing

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
- 样式顺序如何保证，比如 red400,blue400 到底是什么颜色?
- themeability
- type css var
- 可访问性

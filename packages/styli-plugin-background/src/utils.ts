export function isBgKey(key: string) {
  return /^bg?$/.test(key)
}

export function isBgColorKey(key: string) {
  return /^(backgroundColor|bg.+)$/i.test(key)
}

export function isBgRepeatKey(key: string) {
  return /^backgroundRepeat$/i.test(key)
}

export function isBgImgKey(key: string) {
  return /^backgroundImage$/i.test(key)
}

export function isBgSizeKey(key: string) {
  return /^backgroundSize$/i.test(key)
}

export function isBgPosKey(key: string) {
  return /^backgroundPosition$/i.test(key)
}

export function isMatch(key: string) {
  return [isBgKey, isBgColorKey, isBgRepeatKey, isBgImgKey, isBgSizeKey, isBgPosKey].some((cb) =>
    cb(key),
  )
}

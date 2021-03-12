export function isBgKey(key: string) {
  return /^(bg|background)?$/.test(key)
}

export function isBgColorKey(key: string) {
  return /^(bgColor|backgroundColor|bg.+)$/.test(key)
}

export function isBgRepeatKey(key: string) {
  return /^(bgRepeat|backgroundRepeat)$/.test(key)
}

export function isBgImgKey(key: string) {
  return /^(bgImg|backgroundImage)$/.test(key)
}

export function isBgSizeKey(key: string) {
  return /^(bgSize|backgroundSize)$/.test(key)
}

export function isBgPosKey(key: string) {
  return /^(bgPos|backgroundPosition)$/.test(key)
}

export function isMatch(key: string) {
  return [isBgKey, isBgColorKey, isBgRepeatKey, isBgImgKey, isBgSizeKey, isBgPosKey].some(cb => cb(key))
}

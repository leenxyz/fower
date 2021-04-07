//  from https://github.com/modulz/stitches/blob/canary/packages/core/src/unitOnlyProps.js

const reg = /(-columns|(^|[^e]-)padding|[^t]-spacing|l-align|rows|(^|(^border|[dkmnptx]|le|ne)-)width|^border|tom|[ek]-start|(o|[^e]-du)ration|us|(^|[^tv]-)left|(^|-)top|tance|rgin|e-offset|(er|g|n|t)-block|(^|[^tv]-)right|basis|[gnt]-inline|gap|(^|[^e]-)height|ness|(^|[^p]-)inset|[ek]-end|elay|tline|ve|dent|-rotate|n-rule|(c|ck|d|ne|t)-size)$/

/**
 * check css need unit
 * @param cssKey css key, eg: border-width
 * @returns
 */
export function isUnitProp(cssKey: string) {
  return reg.test(cssKey)
}

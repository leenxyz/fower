import * as fs from 'fs'

// TODO: exec once
export const output = (outDir: string, str: string) => {
  if (!str) return
  fs.readFile(outDir, 'utf-8', (err: any, res: any) => {
    if (err) {
      fs.writeFile(outDir, str, () => {})
      return
    }
    if (res.includes(str)) return
    fs.writeFile(outDir, res + str, () => {})
  })
}

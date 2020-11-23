import * as fs from 'fs'

const FILE_PATH = './'
const FILE_NAME = 'index.css'

export function output(str: string) {
  fs.readFile(FILE_PATH + FILE_NAME, (err, res) => {
    if (res.includes(str)) return

    if (err) {
      fs.writeFile(FILE_PATH + FILE_NAME, str, (err) => {})
      return
    }
    fs.appendFile(FILE_PATH + FILE_NAME, res + str, (err) => {})
  })
}

import fs from 'fs'
import path from 'path'
import {
  tsDocGenMd
} from 'ts-doc-gen-md'
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() : Promise<void> {
  const md = await tsDocGenMd({
    input: path.join(__dirname, `../src/index.ts`),
    output: path.join(__dirname, `./api.md`),
  })

  console.log(md)

  // let readme = fs.readFileSync(path.join(__dirname, `../README.md`), "utf8")
  // readme = readme.substring(0, readme.indexOf('### API') + '### API'.length + 1) + functionsMd.join('') + readme.substring(readme.indexOf('### Example'))
  // fs.writeFile(path.join(__dirname, `../README.md`), readme, (err) => {
  //   if (err) throw err
  //   console.log(`API文档写入到README.md成功`)
  // })
}

main()

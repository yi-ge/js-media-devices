import fs from 'fs'
import path from 'path'
import {
  parseExportedFunctionsAsync,
  renderFunctionDataToMarkdown
} from 'generate-ts-docs'
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() : Promise<void> {
  const functionsData = await parseExportedFunctionsAsync([path.join(__dirname, `../src/index.ts`)])
  const functionsMd = []
  for (const functionData of functionsData) {
    functionsMd.push(renderFunctionDataToMarkdown(functionData, {headerLevel: 4}))
  }

  console.log(functionsMd)

  let readme = fs.readFileSync(path.join(__dirname, `../README.md`), "utf8")
  readme = readme.substring(0, readme.indexOf('### API') + '### API'.length + 1) + functionsMd.join('') + readme.substring(readme.indexOf('### Example'))
  fs.writeFile(path.join(__dirname, `../README.md`), readme, (err) => {
    if (err) throw err
    console.log(`API文档写入到README.md成功`)
  })
}

main()

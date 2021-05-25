import fs from 'fs'

// fs.writeFileSync(`notes.txt`, `My name is Corey`)

fs.appendFileSync(`notes.txt`, `My name is Corey\n`)
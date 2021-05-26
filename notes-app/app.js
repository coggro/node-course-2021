import validator from 'validator'

import {getNotes} from './notes.js'

console.log(getNotes())

console.log(validator.isURL(`coggro@gmail.com`))
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { addNote, listNotes, readNote, removeNote } from './notes.js'

// add, remove, read, list

// Create Add Command
const args = yargs(hideBin(process.argv))
  .command({
    command: `add`,
    description: `Add a new note`,
    builder: {
      title: {
        describe: `Note title`, // Describe option for help
        demandOption: true, // Require option
        type: `string`, // Force a string value
      },
      body: {
        describe: `Note body`,
        demandOption: true,
        type: `string`,
      },
    },
    // Add argv to arguments here and use in fx
    handler: (argv) => {
      let { title, body } = argv
      addNote(title, body)
    },
  })
  .command({
    command: `remove`,
    description: `Remove a note.`,
    builder: {
      title: {
        describe: `Note title`,
        demandOption: true,
        type: `string`,
      },
    },
    handler: (argv) => {
      let { title } = argv
      removeNote(title)
    },
  })
  // Setup command to support list (print placeholder for now)
  .command({
    command: `list`,
    description: `List out all notes.`,
    handler: () => {
      listNotes()
    },
  })
  // Setup command to support read (print placeholder for now)
  .command({
    command: `read`,
    description: `Reading a note.`,
    builder: {
      title: {
        describe: `Note title`,
        demandOption: true,
        type: `string`,
      },
    },
    handler: (argv) => {
      let { title } = argv
      readNote(title)
    },
  })
// Test work by running both and ensure correct output

// Accessing argv on the actual args object forces it to actually parse. If we don't do it here, it won't parse.
// console.log(args.argv)

// Force a parse without logging
args.parse()

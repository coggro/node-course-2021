import fs from 'fs'
import chalk from 'chalk'

const addNote = (title, body) => {
  const notes = loadNotes()

  const duplicateNote = notes.find((note) => note.title === title)
  // const duplicateNotes = notes.filter((note) => {
  //   return note.title === title
  // })

  if (!duplicateNote) {
    notes.push({ title, body })
    console.log(`Note added.`)
  } else {
    console.log(`Note title taken.`)
  }
  saveNotes(notes)
}

const removeNote = (title) => {
  const notes = loadNotes()

  const remainingNotes = notes.filter((note) => {
    return note.title !== title
  })

  saveNotes(remainingNotes)

  if (remainingNotes.length < notes.length) {
    console.log(chalk.green.inverse(`Note removed.`))
  } else {
    console.log(
      chalk.red.inverse(
        `No note exists with that title. No notes have been removed.`
      )
    )
  }
}

const listNotes = () => {
  const notes = loadNotes()

  console.log(chalk.green.inverse(`Your Notes`))
  notes.forEach((note) => {
    console.log(note.title)
  })
}

const readNote = (title) => {
  const notes = loadNotes()
  const targetNote = notes.find((note) => note.title === title)

  if (targetNote) {
    console.log(chalk.green.inverse(targetNote.title))
    console.log(targetNote.body)
  } else {
    console.log(chalk.red.inverse(`Note not found.`))
  }
}

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync(`notes.json`).toString())
  } catch (e) {
    return []
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync(`notes.json`, JSON.stringify(notes))
}
export { addNote, removeNote, listNotes, readNote }

# The Complete Node.js Developer Course (3rd Edition)

## Section 1: Welcome

### 001 - Welcome to the Class!

- Started teaching over 5 years ago, lots of new features
- Will learn everything to be a pro
- Course Curriculum
  - 4 major parts with a project
    - Note-Taking
      - Basic
      - Create an app
      - Use basic features
      - Run apps
      - File system IO
      - 3rd party library
    - Weather
      - Web application
      - Create web server
      - Node APIs
      - Production server
      - 3rd party services
    - Task Manager
      - Authentication
      - DB storage
      - File uploads
      - Email sending
    - Real-Time Chat
      - Socket.io for real-time apps
  - Learn to use features together
- How to get the most out of the class
  - Interact with the code. Do the same things in the video.
  - Do the 100+ unique challenges. Try before looking at the solution.
- How to get help
  - Use the Q&A

### 002 - Grab the PDF Guide

- A PDF reference eBook has info for every lesson

## Section 2: Installing and Exploring Node.js

### 003 - Section Intro: Installing and Exploring Node.js

- Getting our machine set up with Node and VSCode
- Talking about what Node is

### 004 - Installing Node.js and VSCode

- I know more than this. NVM and my existing VSCode install are fine.
- Just throw the latest version in.
- node -v --> Node version installed

### 005 - What is Node.js?

- JS devs took JS and made it a standalone process
- Previously was limited to the browser
- Node took JS out to make servers and backends and such
- How is this possible?
- Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- V8 is in C++ and is extended in C++ as well.
- The runtime provides it with specific tools and such - browser gives buttons and such, Node gets file system and server utils
- Code Example
  - Browser console with a few functions
    - window, document objects are restricted to browser
  - Terminal REPL (Read Evaulate Print Loop) with a few functions
    - global, process objects are restricted to Node

### 006 - Why Should I Use Node.js?

- Increasingly chosen for major tasks
- All along the stack if you so choose it
- Also useful on command-line
- Node.js uses an event-driven non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libaries in the world.
  - Non-blocking I/O - can continue to process code and such while waiting for requests
    - Actually originated in the browser and got brought out
    - Critical Feature of Node
- NPM is an enormous database of open source packages

### 007 - Your First Node.js Script

- Going to create and run our first script
- Suggests using integrated terminal in VS Code. Meh.
- Create `node-course` folder
- `/node-course/hello.js`
  ```js
  console.log(`Welcome to the class!`)
  ```
- Run with `node hello.js`

## Section 3: Node.js Module System (Notes App)

### 008 - Section Intro: Node.js Module System

- Starting to create app 1/4
- Introduces Node Modules system
- Connect to db, load in args
- Will learn to import core modules, other devs' modules, and our own modules

### 009 - Importing Node.js Core Modules

- All sorts of modules listed, and are available globally, like console
- File System requires import
- We'll be using fs.writeFile and fs.writeFileSync
- fs.writeFileSync(file, data to write)
- `/notes-app`

```js
fs.writeFileSync(`notes.txt`, `This file was created by Node.js!`)
```

- This won't run. Why not?
- fs is not defined.
- `/notes-app`

```js
const fs = require(`fs`)

fs.writeFileSync(`notes.txt`, `This file was created by Node.js!`)
```

- Can change the text and overwrite the file
- We could rename fs as variable, but not as a module
- #### **Personal Note**
  - You can do ES Modules if you have a `package.json` with `"type": "module"` in the JSON
- #### Challenge: Append a message to notes.txt

  - Use appendFileSync to append to the file
  - Run the script
  - Check your work by opening the file and viewing the appended text
  - `/app.js`

    ```js
    import fs from 'fs'

    // fs.writeFileSync(`notes.txt`, `My name is Corey`)

    fs.appendFileSync(`notes.txt`, `My name is Corey\n`)
    ```

### 010 - Importing Your Own Files

- Can load in from files we've created
- Right now, everything exists in app.js, and we want to split it up

  - create `/utils.js`

    ```js
    // Using Import
    const utilslog = () => {
      // Only this line is necessary using require()
      console.log(`utils.js`)
    }

    export default utilslog
    ```

  - Edit `./app.js`

    ```js
    import utilslog from './utils.js'
    // or require(`./utils.js`)

    utilslog()
    const name = `corey`

    console.log(name)
    ```

- Require seems to read the file in while import requires that it pass variables or functions that can be called or run
- They cannot coexist
- Removing name and recreating it in `utils.js` will cause it to fail since modules have their own scope
- Explicitly export with `module.export` or `export`

  - `./app.js`

    ```js
    import { name, utilslog } from './utils.js'

    console.log(name)
    ```

  - `./utils.js`

    ```js
    const utilslog = () => {
      console.log(`utils.js`)
    }

    const name = `corey`

    export { utilslog, name }
    ```

- Exporting a function works the same. It doesn't make much sense to import additional sandbox nonsense.
- #### Challenge: Define and use a function in a new file

  - Create a new file called notes.js
  - Create getNotes function that returns "Your notes..."
  - Export getNotes function
  - From app.js, load in and call the function printing message to console
  - `/notes.js`

    ```js
    const getNotes = () => {
      return 'Your notes...'
    }

    export { getNotes }
    ```

  - `/app.js`

    ```js
    import { getNotes } from './notes.js'

    console.log(getNotes())
    ```

### 011 - Importing npm Modules

- We can use core modules and custom modules, but what about npm?
- `npm init`
  - Initialize npm in root of project
  - Creates `./package.json`
- `npm i <package name>`
  - Install package in `node_modules` in project
  - I already did this to use `import`
  - We don't have to rebuild the wheel every time we need to do something. We can use others' work.
- We'll install `validator` with `npm i validator`
  - Creates `package-lock.json` and `node_modules` directory to store module files
    - `node_modules` has `validator` dir inside with `validator` files
    - `package-lock.json` stores the versions and a hash of modules we install for security
    - They're not supposed to be edited by hand.
  - He uses 10.8.0. We'll figure it out with the latest - 13.6.0
- Can then load it in with require/import and use it

  - `./app.js`

    ```js
    // const validator = require('validator')
    import validator from 'validator'

    import { getNotes } from './notes.js'

    console.log(getNotes())

    console.log(validator.isEmail(`coggro@gmail.com`))
    ```

- Check documentation for functions and stuff available in the package

### 012 - Printing in Color

- We're going to work with an npm module on our own
- We can reinstall `node_modules` based on `package-lock.json` and `package.json` with `npm i`.
- Core of video is a challenge to use an npm library - `chalk`, a package that gives color to the text and background behind text in the console
- #### Challenge: Use the chalk library in your project

  - Install chalk 2.4.1
  - Load chalk into app.js
  - Use it to print the string "Success!" to the console in green
  - Test your work
  - Bonus: Mess around with other styles - make text bold and inverse

  ```js
  import chalk from 'chalk'

  console.log(chalk.blue.inverse.bold('success'))
  ```

### 013 - Global npm Modules and nodemon

- Learning about global npm packages that we can run from the terminal
- `npm i -g <packageName>`
- We'll install `nodemon`, which restarts the app whenever we save changes and stops us from having to rerun the file every time to see changes
- Doesn't get used in a project or added to .jsons
- I've already done this. It's not that hard, and it is admittedly way useful

## Section 4: File System and Command Line Args (Notes App)

### 014 - Section Intro: File System and Command Line Args

- Continue learning to work with Node modules
- Create Notes App
- Will be using fs and yargs for file management and CLI args

### 015 - Getting Input from Users

- How do we get input from the user?
- We'll learn with the CLI for now, but will later use browser forms
- We can add more arguments after script name and it runs and passes that info in... but how do we access them?
- We use `process` global variable. `process.argv` to be exact.
  - The first argument is the path to the Node binary that runs the script
  - The second argument is the path to the script
  - Arguments 3 and on are data passed in
- We can use additional information to pass in commands (Add Note) and pass in data (text of note) etc.
- We can add command line options as well. If done with argv, we'd need to parse them. We can instead use `yargs`, a package purpose-built for this.

### 016 - Argument Parsing with Yargs: Part I

- We can use `yargs` to get arguments in a more useful way
- We're using a lot of packages... what about actual Node? Well, this is how Node junk gets developed.
- `npm i yargs`
- `./apps.js`

  ```js
  import chalk from 'chalk'
  import yargs from 'yargs'
  import { hideBin } from 'yargs/helpers'
  import { getNotes } from './notes.js'

  console.log(process.argv)
  console.log(yargs(hideBin(process.argv)).argv)
  ```

- Yargs requires the hideBin to work with import
- This exposes a much more reasonable object of arguments
  - `node app.js add --title="things to buy"` yields `{ _: [ 'add' ], title: 'things to buy', '$0': 'app.js' }`
- `yargs` automatically generates `--help` text
- We can set up commands using `.command({command object})` function

  ```js
  import chalk from 'chalk'
  import yargs from 'yargs'
  import { hideBin } from 'yargs/helpers'
  import { getNotes } from './notes.js'

  // add, remove, read, list

  // Create Add Command
  // Setting the yargs with hideBin() to a const seems to help
  const args = yargs(hideBin(process.argv))

  args
    .command({
      command: `add`,
      description: `Add a new note`,
      handler: () => {
        console.log(`Adding a new note.`)
      },
    })
    .command({
      command: `remove`,
      description: `Remove a note.`,
      handler: () => {
        console.log(`Removing a note.`)
      },
    })

  console.log(args.argv)
  ```

- Challenge is to create read and list commands, which is trivial repetition of creating other commands.

### 017 - Argument Parsing with Yargs: Part 2

- We'll add support for options for commands
- We'll use builder object on the commands

  ```js
  const args = yargs(hideBin(process.argv)).command({
    command: `add`,
    description: `Add a new note`,
    builder: {
      title: {
        describe: `Note title`, // Describe option for help
        demandOption: true, // Require option
        type: `string`, // Force a string value
      },
    },
    // Add argv to arguments here and use in fx
    handler: (argv) => {
      console.log(`Title: ${argv.title}`)
    },
  })
  ...
  // Accessing argv on the actual args object forces it to actually parse. If we don't do it here, it won't parse.
  // console.log(args.argv)

  // Force a parse without logging
  args.parse()
  ```

- #### Challenge: Add an option to yargs
  - Set up a body option for the add command
  - Configure a description, make it required, and force a string type
  - Log the body value in the handler function
  - Test your work!
  ```js
  .command({
    command: `add`,
    description: `Add a new note`,
    builder: {
      title: {
        describe: `Note title`, // Describe option for help
        demandOption: true, // Require option
        type: `string`, // Force a string value
      },
      // Solution
      body: {
        describe: `Note body`,
        demandOption: true,
        type: `string`,
      },
    },
    // Add argv to arguments here and use in fx
    handler: (argv) => {
      let { title, body } = argv // Also decided to destructure here
      console.log(`Title: ${title}\nBody: ${body}`)
    },
  })
  ```

### 018 - Storing Data with JSON

- We know how data goes into the program, but what do we do with it then? How do we save it to make sure it's usable afterwards?
- We'll use a JSON file with `fs`
- JSON is a popular, extensively used format
- Let's explore JSON in a `./playground` directory
- `fs` only knows how to work with strings, so we need to make our JSON a string.

  ```js
  import fs from 'fs'
  // Create a book object
  const book = {
    title: `Ego Is The Enemy`,
    author: `Ryan Holiday`,
  }

  // Turn it into a JSON string
  const bookJSON = JSON.stringify(book)
  console.log(bookJSON)
  // {"title":"Ego Is The Enemy","author":"Ryan Holiday"}

  // Parse string back into object
  const parsedData = JSON.parse(bookJSON)
  console.log(parsedData.author)
  // Ryan Holiday

  // Stringify the book content
  const bookJSON = JSON.stringify(book)
  // Write it to the file
  fs.writeFileSync(`1-json.json`, bookJSON)
  ```

- Reading from the file

  Need to do this separately from writing so it doesn't overwrite every time or something... The logic of the program would dictate, for this one we'll just follow along.

  ```js
  // get binary data
  const dataBuffer = fs.readFileSync(`1-json.json`)
  // convert it to a string
  const dataJSON = dataBuffer.toString()
  // and parse it
  const data = JSON.parse(dataJSON)
  console.log(data.title)
  ```

- We now know how to do everything we need... but let's do a challenge!
- #### Challenge: Work with JSON and the file system
  - Load and parse the JSON data
    - {"name":"Andrew","planet":"Earth","age":27}
  - Change the name and agee property using your info
  - STringify the changed object and overwrite the original data
  - Test your work by viewing data in the JSON file
  ```js
  const data = JSON.parse(fs.readFileSync(`1-json.json`).toString())
  console.log(data)
  data.name = `Corey`
  data.age = 31
  fs.writeFileSync(`1-json.json`, JSON.stringify(data))
  const modifiedData = JSON.parse(fs.readFileSync(`1-json.json`).toString())
  console.log(modifiedData)
  ```

### 019 - Adding a Note

- Let's wire up adding a note
- We'll work in `/notes-app` with `app.js` and `notes.js` and can delete `notes.txt` since we'll be using JSON
- `./notes.js`

  ```js
  // Get fs imported
  import fs from 'fs'

  const getNotes = () => {
    return 'Your notes...'
  }
  // AddNote fx
  const addNote = function (title, body) {
    // Use loading fx to make writing other fxs easier
    const notes = loadNotes()
    // Filter through to find duplicate notes
    const duplicateNotes = notes.filter((note) => {
      return note.title === title
    })
    // If there are no cuplicates, add the note
    if (duplicateNotes.length === 0) {
      notes.push({ title, body })
      console.log(`Note added.`)
    } else {
      // Otherwise, just say it's taken
      console.log(`Note title taken.`)
    }
    // Use saving fx to make writing other fxs easier
    saveNotes(notes)
  }
  // Loading fx
  const loadNotes = function () {
    // Try loading from expected file
    try {
      return JSON.parse(fs.readFileSync(`notes.json`).toString())
    } catch (e) {
      // If there are any errors, just give an empty array, the same result as
      // though the file existed but was empty
      return []
    }
  }
  // Saving fx, writes JSON string to file
  const saveNotes = (notes) => {
    fs.writeFileSync(`notes.json`, JSON.stringify(notes))
  }
  export { getNotes, addNote }
  ```

### 020 - Removing a Note

- Remove note in 3 challenges
- #### Challenge: Setup command option and function

  - Setup the remove command to take a required --title option
  - Create and export a removeNote function from notes.js
  - Call removeNote in remove command handler
  - Have removeNote log the title of the note to be removed
  - Test your work

  ```js
  //app.js
  ...
  import { getNotes, addNote, removeNote } from './notes.js'
  ...
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
  ...
  //note.js
  const removeNote = (title) => {
    console.log(`Note "${title}" will be removed.`)
  }
  ...
  export { getNotes, addNote, removeNote }
  ```

- #### Challenge: Wire up removeNote

  - Load existing notes
  - Use array filter method to remove the matching note (if any)
  - Save the newly created array
  - Test your work with a title that exists and a title that doesn't exist

  ```js
  const removeNote = (title) => {
    const notes = loadNotes()

    const remainingNotes = notes.filter((note) => {
      return note.title !== title
    })
    if (remainingNotes.length < notes.length) {
      console.log(`Note "${title}" will be removed.`)
    } else {
      console.log(`No note exists with that title. No notes have been removed.`)
    }

    saveNotes(remainingNotes)
  }
  ```

- #### Challenge: Use chalk to provide useful logs to remove
- If a note is removed, print "Note removed!" with a green background
- If no note is removed, print "No note found!" with a red background

  ```js
  ...
  import chalk from 'chalk'
  ...
  // Moved above the prints
  saveNotes(remainingNotes)

  // This adds chalk
  if (remainingNotes.length < notes.length) {
    console.log(chalk.green.inverse(`Note removed.`))
  } else {
    console.log(
      chalk.red.inverse(
        `No note exists with that title. No notes have been removed.`
      )
    )
  }
  ```

### 021 - ES6 Aside: Arrow Functions

- Let's talk arrow functions
- `playground/2-arrow-functions.js`

  ```js
  // OG function declaration
  // const square = function (x) {
  //   return x * x
  // }

  // Arrow fx
  // const square = (x) => {
  //   return x * x
  // }

  // Arrow fx w/ shorthand
  // const square = (x) => x * x

  // console.log(square(3))

  const event = {
    name: `Birthday Party`,
    guestList: [`Andrew`, `Jen`, `Mike`],
    // This alternative syntax binds this, but is shorter
    printGuestList() {
      // this isn't bound in an arrow function, so function fails
      console.log(`Guest List for ${this.name}`)
      // We don't want to bind this here, so arrow functions are
      // helpful since we don't want the printGuestList this value
      this.guestList.forEach((guest) =>
        console.log(`${guest} is attending ${this.name}`)
      )
    },
  }

  event.printGuestList()
  ```

### 022 - Refactoring to Use Arrow Functions

- `playground/3-arrow-challenge.js`

  ```js
  //
  // Goal: Create method to get incomplete tasks
  //
  // 1. Define getTasksToDo method
  // 2. Use filter to to return just the incompleted tasks (arrow function)
  // 3. Test your work by running the script

  const tasks = {
    tasks: [
      {
        text: 'Grocery shopping',
        completed: true,
      },
      {
        text: 'Clean yard',
        completed: false,
      },
      {
        text: 'Film course',
        completed: false,
      },
    ],
    getTasksToDo() {
      return this.tasks.filter((task) => !task.completed)
    },
  }

  console.log(tasks.getTasksToDo())
  ```

- #### Challenge
  - https://gist.github.com/andrewjmead/ad7a587411aa8e3fb3ea643c37c45818
- I've been using arrow functions the whole time.

### 023 - Listing Notes

- This is the easiest one out of all of them.
- #### Challenge: Wire up list command

  - Create and export listNotes from notes.js
    - Your Notes using chalk
    - Print note title for each note
  - Call listNotes from command handler
  - Test your work
  - `notes.js`

  ```js
  ...
  const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.green.inverse(`Your Notes`))
    notes.forEach((note) => {
      console.log(note.title)
    })
  }
  ...
  export { getNotes, addNote, removeNote, listNotes }
  ```

  - `app.js`

  ```js
  ...
  import { addNote, removeNote, listNotes } from './notes.js'
  ...
  .command({
    command: `list`,
    description: `List out all notes.`,
    handler: () => {
      listNotes()
    },
  })
  ...
  ```

### 024 - Reading a Note

- Finishing up the app by wiring up the read command
- We use filter in addNote and removeNote to eliminate duplicates and remove notes. We can improve addNote.

  - Filter will look through every note, not stopping when it finds a duplicate.
  - `app.js`

  ```js
  const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
      notes.push({ title, body })
      console.log(`Note added.`)
    } else {
      console.log(`Note title taken.`)
    }
    saveNotes(notes)
  }
  ```

- #### Challenge: Wire up read command

  - Setup --title option for read command
    - Search for note by title
    - Find note and print title (styled) and body (plain)
    - No note found? Print error in red
  - Have the command handler call the function
  - Test your work by running a couple commands
  - `notes.js`

  ```js
  ...
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
  ...
  export { getNotes, addNote, removeNote, listNotes, readNote }
  ```

  - `app.js`

  ```js
  ...
  import { addNote, removeNote, listNotes, readNote } from './notes.js'
  ...
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
  ...
  ```

- Can remove getNotes

## Section 5: Debugging Node.js (Notes App)

### 025 - Section Intro: Debugging Node.js

- Going to learn how to debug Node programs
- Lots of typos :rofl:
- Perfection is not realistic

### 026 - Debugging Node.js

- How to best debug Node applications
- Will explore Node debugger and Chrome dev tools
- Generally 2 types of errors:
  - Something goes wrong and there's an explicit error
  - Something goes wrong and there's not a message, it's just wrong data
- Basic debugging tool is the console
- Can also use Node Debugger, which integrates with dev tools
  - Use `debugger` in code to add a breakpoint that only stops on `node inspect <scriptname> <args>`
  - Go to Chrome and hit `chrome://inspect`
  - Remote Target should list your script
  - `inspect` wraps the code in a function
  - Debugger lets you step through the code line by line or debugger pause to pause.

### 027 - Error Messages

- Look at error messages and learn to find errors.
- I've been at this a while. I know how to do this.

## Section 6: Asynchronous Node.js (Weather App)

### 028 - Section Intro: Asynchronous Node.js

### 029 - Asynchronous Basics

### 030 - Call Stack, Callback Queue, and Event Loop

### 031 - Making HTTP Requests

### 032 - Customizing HTTP Requests

### 033 - An HTTP Request Challenge

### 034 - Handling Errors

### 035 - The Callback Function

### 036 - Callback Abstraction

### 037 - Callback Abstraction Challenge

### 038 - Callback Chaining

### 039 - ES6 Aside: Object Property Shorthand and Destructuring

### 040 - Destructuring and Property Shorthand Challenge

### 041 - Bonus: HTTP Requests Without a Library

### 042 -

### 043 -

### 044 -

### 045 -

### 046 -

### 047 -

### 048 -

### 049 -

### 050 -

### 051 -

### 052 -

### 053 -

### 054 -

### 055 -

### 056 -

### 057 -

### 058 -

### 059 -

### 060 -

### 061 -

### 062 -

### 063 -

### 064 -

### 065 -

### 066 -

### 067 -

### 068 -

### 069 -

### 070 -

### 071 -

### 072 -

### 073 -

### 074 -

### 075 -

### 076 -

### 077 -

### 078 -

### 079 -

### 080 -

### 081 -

### 082 -

### 083 -

### 084 -

### 085 -

### 086 -

### 087 -

### 088 -

### 089 -

### 090 -

### 091 -

### 092 -

### 093 -

### 094 -

### 095 -

### 096 -

### 097 -

### 098 -

### 101 -

### 102 -

### 103 -

### 104 -

### 105 -

### 106 -

### 107 -

### 108 -

### 109 -

### 110 -

### 111 -

### 112 -

### 113 -

### 114 -

### 115 -

### 116 -

### 117 -

### 118 -

### 119 -

### 120 -

### 121 -

### 122 -

### 123 -

### 124 -

### 125 -

### 126 -

### 127 -

### 128 -

### 129 -

### 130 -

### 131 -

### 132 -

### 133 -

### 134 -

### 135 -

### 136 -

### 137 -

### 138 -

### 139 -

### 140 -

### 141 -

### 142 -

### 143 -

### 144 -

### 145 -

### 146 -

### 147 -

### 148 -

### 149 -

### 150 -

### 151 -

### 152 -

### 153 -

### 154 -

### 155 -

### 156 -

### 157 -

### 158 -

### 159 -

### 160 -

### 161 -

### 162 -

### 163 -

### 164 -

### 165 -

### 166 -

### 167 -

### 168 -

### 169 -

### 170 -

### 171 -

### 172 -

### 173 -

### 174 -

### 175 -

### 176 -

### 177 -

### 178 -

### 179 -

### 180 -

### 181 -

### 182 -

### 183 -

### 184 -

### 185 -

### 186 -

### 187 -

### 188 -

### 189 -

### 190 -

### 191 -

### 192 -

### 193 -

### 194 -

### 195 -

### 196 -

### 197 -

### 198 -

### 199 -

### 200 -

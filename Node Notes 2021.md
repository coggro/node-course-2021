# The Complete Node.js Developer Course (3rd Edition)

## Section 1: Welcome

### 001 -  Welcome to the Class!
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
  - #### __Personal Note__
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
      import {name, utilslog} from './utils.js'

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
        return "Your notes..."
      }

      export { getNotes }
      ```
    - `/app.js`
      ```js
      import {getNotes} from './notes.js'

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
  - Can then laod it in with require/import and use it
    - `./app.js`
      ```js
      import validator from 'validator'

      import {getNotes} from './notes.js'

      console.log(getNotes())

      console.log(validator.isEmail(`coggro@gmail.com`))
      ```

### 012 - Printing in Color


### 013 - Global anpm Modules and nodemon


## Section 4: File System and Command Line Args (Notes App)

### 014 - 


### 015 - 


### 016 - 


### 017 - 


### 018 - 


### 019 - 


### 020 - 


### 021 - 


### 022 - 


### 023 - 


### 024 - 


### 025 - 


### 026 - 


### 027 - 


### 028 - 


### 029 - 


### 030 - 


### 031 - 


### 032 - 


### 033 - 


### 034 - 


### 035 - 


### 036 - 


### 037 - 


### 038 - 


### 039 - 


### 040 - 


### 041 - 


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


### 099 - 


### 100 - 


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

  - 
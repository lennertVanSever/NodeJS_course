_Tell me your favourite website and name!_
---
## What is a server?
![server - client communication](http://computernetworkingsimplified.in/wp-content/uploads/clientserver.jpg)

[More info](https://www.lifewire.com/servers-in-computer-networking-817380)
Note:
A server is a computer program or a device that provides functionality for other programs or devices, called "clients".
---
## What is NodeJS?
_Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine._

- JavaScript runtime => Running JS outside of the browser
- Chrome's v8 => compiles JavaScript directly to native machine code before executing it
- NodeJS is also [non-blocking](https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/).
---
Go to the [NodeJS installer page](https://nodejs.org/en/download/current/) and install the *latest* version of Node.JS.
---
- Open your terminal
```
node
```
- Type some JavaScript
---
- Create a new repo
- Create a file named "index.js"
- Type some JavaScript in the file
- Go to the repo via your terminal
```
node index.js
```
---
## Let's do some ES6
[Source](https://medium.freecodecamp.org/want-to-learn-es6-take-this-free-23-part-course-and-become-a-javascript-ninja-55002db1ff74)
---
## What is NPM?
_Node Packaging Manager_
- Largest software registry
- The registry contains over 600,000 packages (building blocks of code)
- You can use these package or make one yourself!
---
## What is a package.json file?
source: [npm docs](https://docs.npmjs.com/getting-started/using-a-package.json)
- Lists the packages that your project depends on.
- Allows you to specify the versions of a package that your project can use using semantic versioning rules.
- Makes your build reproducible, and therefore much easier to share with other developers.
---
## Initializing your package.json file
1. Initialize your project as an npm package
```
npm init
```
2. Open the directory you just created in your favorite code editor
3. Checkout your package.json file
4. In package.json add this to "scripts"
```
"start": "node index.js"
```
---
## Install a dependency
1. Go to [npm express package page](https://www.npmjs.com/package/express)
2. Install the package via the following command
```
npm install express --save
```
3. Create .gitignore file with the following content
```
node_modules/
```
---
## Setup your server
```
const express = require('express')
const server = express();

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
});

server.get('/', (req, res) => {
  res.send('Hello World!')
});
```
---
## Install nodemon
1. Install [nodemon](https://www.npmjs.com/package/nodemon) as a dev dependency
```
npm install --save-dev nodemon
```
2. In package.json add this to "scripts":
```
"start": "nodemon index.js"
```
3. Now node will restart everytime you make a change to a file
---
## Let's have some fun!
1. Print a variable specified in a route by the user (google is your friend!)
2. Print the desired result of the following route: _/<number>/plus/<number>/is_
3. Convert the result of exercise 3 into cardinal numbers. For example 3 -> three, 6 -> six (use a npm package)
4. Print an error
5. Send an email to an address via the following route _/sendmail/<to>_
---
## Reading list
- Read more about [servers](http://ptgmedia.pearsoncmg.com/images/0130225347/samplechapter/0130225347.pdf)
- Revise [ES6]( https://medium.freecodecamp.org/want-to-learn-es6-take-this-free-23-part-course-and-become-a-javascript-ninja-55002db1ff74)
- For the [pro's](https://github.com/getify/You-Dont-Know-JS)

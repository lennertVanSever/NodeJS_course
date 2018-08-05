# Intro
_Everyone says one by one his name and favorite website_

We will explain what a server is, based on the favorite websites and why it is important.

# What is a server?

# What is Node.js?
_Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine._

JavaScript runtime => Running JS outside of the browser
Compiles to machine code which makes it very fast

# Installing Node.js
Go to the [NodeJS installer page](https://nodejs.org/en/download/current/) and install the *latest* version of Node.JS.


# Run following code in terminal
```
Node

console.log("Hello world");

var a = 5;
var b = 10;
console.log(a + b);

process.exit(0);
```

# What is npm?
npm => Node Packaging Manager


# Project setup
Based on: [codementor](https://www.codementor.io/iykyvic/writing-your-nodejs-apps-using-es6-6dh0edw2o) and [Gist](https://gist.github.com/rahman541/f23d7bb242520e17517644d4dd179190)
## Initializing your package.json file
1. Go to your terminal and create a new folder `mkdir <foldername>`
2. Navigate to your folder `cd <foldername>`
3. Initialize your project as an npm package `npm init --yes` //With the yes flag the information extracted from the current directory will be used to create a package.json file
4. For fun -> print "hello world" in your terminal through the `npm run <>` command
### What is a package.json file?
source: [npm docs](https://docs.npmjs.com/getting-started/using-a-package.json)
- Lists the packages that your project depends on.
- Allows you to specify the versions of a package that your project can use using semantic versioning rules.
- Makes your build reproducible, and therefore much easier to share with other developers.

## Install a dependency
1. Go to [npm express package page](https://www.npmjs.com/package/express)
2. Install the package via the following command `npm install express --save`
3. Create .gitignore file with the following content `node_modules/`

## Create your app entry point
1. Initialize an empty file called index.js

## Install an other dependency
1. Install [nodemon](https://www.npmjs.com/package/nodemon) as a dev dependency `npm install --save-dev nodemon`
2. Run the following command `npm install babel-preset-env babel-cli`

## Finalise the setup
1. Create a .babelrc config in your project root. Insert the following
```
{
  "presets": ["env"]
}
```
2. In package.json add this to scipts: `"dev": "nodemon --exec babel-node index.js"`

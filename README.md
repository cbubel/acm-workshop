# ACM workshop
Why you should consider using web technologies for the hackathon.

## Web tech is powerful
With web technologies, like HTML, CSS, and JavaScript, you can prototype (and build) applications at an incredibly fast pace, largely because there is a quick and low cost feedback loop while iterating over the design. The basic workflow is often: write some code, save, refresh the browser.

## Web tech is confusing
Web development has gotten way to complicated over the past few years. There are new terms/libraries/frameworks/ideas popping up every day. ES2015, Node, Express, NPM, Grunt, Gulp, Browserify, Bower, SystemJS, CommonJS, AMD, Webpack, TypeScript, Elm, RequireJS, Angular, React, Aurelia, Vue, Ember, Backbone, Redux, Flux, Electron.

How do you stay up to date with all these technologies, what they do, and when they should be used? It takes a lot of practice and reading to get acquainted with the newest library, and this can be very intimidating for beginners.

So, why go through all the trouble? These technologies are incredibly powerful and make developing for the web a much, much better process, despite their own complexities.

## The goal
The goal of this workshop is to give you a small view into the chaotic world of modern web development. It is by no means the only way things can or should be done. If you use this setup, however, you'll have a very smooth development process, very conducive for rapid development.

## Requirements
- [Node and NPM](https://nodejs.org/en/)
- [Webpack](https://www.npmjs.com/package/webpack) (installed via NPM)
- [TypeScript](https://www.typescriptlang.org)
- [Visual Studio Code](https://code.visualstudio.com) (Recommended)

## Node and NPM
Node is a JavaScript runtime, and NPM is the Node Package Manager. We won't worry about Node for now, but we'll use NPM to install other dependencies from the command line.

## Webpack
In this workshop, we'll be using Webpack as a bundler. This is one of the more confusing pieces of technology to use in the modern web dev repertoire, in my opinion.

So, why do we need a bundler? We don't want to write all of our JavaScript (or TypeScript) in one file. That would be bad practice. We want to separate our code out so it's more maintainable. But, to link everything together, we'd have to add a ton of ```<script>``` tags in the ```index.html``` file. And there will inevitably be problems of trying to use things declared in another file before the file itself is loaded in ```index.html```, i.e., in order, we load file1.js, then file2.js, but file1 tries to access something from file2 - it won't be defined yet!

So, we use Webpack to take all of our JavaScript, link it into one big file, and maybe run transformations on it (like invoking the TypeScript compiler).

## TypeScript
TypeScript is a statically typed superset of JavaScript. It is, by far, my favorite thing about modern web development. It may be cool at first to not have to explicitly define types for things in regular JavaScript, but it leads to so many bugs, so fast.

TypeScript allows us to write less buggy code, since we won't even be able to compile it if there are potentialy bugs. If you have a function foo(x), you can now declare that x is a string, or a number, or a boolean, or an implementation of an interface, or an object, etc. This is super helpful.

It should be noted that TypeScript really isn't that different from modern JavaScript, i.e., ES2015, which is why I don't feel like I'm wasting my time with some obscure language that will never be used. Quite the opposite is true of TypeScript, actually. It's one of the most popular languages in web development - I think even Google recently approved it for internal use. It's also the recommended language of use for Angular. If I had to recommend one thing for beginner web developers to learn, it would be TypeScript.

## Setup
Currently, if you clone this repository, you should be able to simply open the index.html file in your favorite browser (very untested) and play the game. If you want to make changes, however, you'll need to install the above dependencies.

## Environment
What were the steps taken to set up this environment? Assuming that Node/NPM and TypeScript have been installed:
1. Create a new project directory.
2. Run ```npm init``` from the command line. The defaults are all fine for the most part.
3. Run ```npm install -g webpack```
4. Run ```npm install --save-dev typescript awesome-typescript-loader source-map-loader```
5. Create a tsconfig.json file (more info below).
6. Create a webpack.config.js file (more info below).
7. Run ```webpack``` or ```webpack --watch``` from the command line.

## tsconfig.json and webpack.config.js
```tsconfig.json``` is essentially the settings for the TypeScript compiler. Likewise, ```webpack.config.js``` is a configuration for Webpack. I highly recommend reading a bit through [this guide](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html) (ignore React) to learn more about the configurations.

## Why Visual Studio Code
Microsoft has done a fantastic job at creating an editor that works well with TypeScript. One would hope so, seeing as how they also created TypeScript. Being able to peek and go to definitions and see an abundance of type information is very helpful in developing. It is my favorite editor for OSX (with full Visual Studio being my favorite for Windows).

## A word on the game in this project
I am by no means a game developer. I have only ever made a few games for class projects, and I've never used a real framework. But, games are fun to make, especially for hackathons, and it's a great way to demonstrate the power of TypeScript.

The structure of the code itself probably isn't the best, there are a few bugs, and it's using HTML divs as the objects of the game, which aren't very good for moving animatedly. But, it's fairly straightforward, and it's very easy to use divs as objects.

So the purpose of the project is more to demonstrate the use of TypeScript. You'll probably notice it looks more like Java than the regular JavaScript you're used to. This is a good thing, despite the ill-will everyone seems to have for Java.

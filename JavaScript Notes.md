## JavaScript Notes

JSX - A syntax extension of JavaScript created for the React JavaScript framework

JavaScript - Vanilla JS
ECMAScript - Browser specification of the JavaScript language
-- ES6, ES2015
-- Babel - converts javascript to ECMAScript
TypeScript - Variation, dialect, or flavor of JavaScript introducing features like strong typing
React, Vue, Angular - JavaScript frameworks alowing us to write JavaScript-based front-end applications
npm, WebPack, Gulp - Build tools and infrastructure to automate the process of optimizing human-readable JavaScript for the best browser performance
Node.js - JavaScript server runtime used to run JavaScript everywhere; used to run npm, WebPack, Babel, and more on your computer

Tools

- Moden Browser - Firefox
- Code Editor - Visual Studio Code is becoming the standard
- Live Server Environment - Extension to Visual Studio Code
- Browser Console - Every browser has one

After installing extensions - Even in VS Code, have to run npm install in the project directory to get them all pulled over

- Things like Prettier and ESLint won't work without that
- Also pulls over any dependencies in the project

Some Settings to set

- Format on Save
- Format on Paste

JavaScript does not care about spacing at all!!

JavaScript does not necessarily care about ; (Semicolon) -> Purely editor preference

Quotation Marks

- "" for all strings.
- Which quote you use is up to you and be consistent

async and defer keywords

- Should be the way you do loading of JavaScript
- Loading JavaScript in the footer is an antipattern
- Load JavaScript in the <head> and then use async and defer

When you mark a script with "type=module", it automatically gets the defer tag for loading. Thus, it will only be invoked at the end of the page rendoring.

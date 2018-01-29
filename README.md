# template-library-rollup

[![Code Climate](https://codeclimate.com/github/myTerminal/template-library-rollup.png)](https://codeclimate.com/github/myTerminal/template-library-rollup)
[![bitHound Overall Score](https://www.bithound.io/github/myTerminal/template-library-rollup/badges/score.svg)](https://www.bithound.io/github/myTerminal/template-library-rollup)
[![bitHound Code](https://www.bithound.io/github/myTerminal/template-library-rollup/badges/code.svg)](https://www.bithound.io/github/myTerminal/template-library-rollup)  
[![Dependency Status](https://david-dm.org/myTerminal/template-library-rollup.svg)](https://david-dm.org/myTerminal/template-library-rollup)
[![devDependency Status](https://david-dm.org/myTerminal/template-library-rollup/dev-status.svg)](https://david-dm.org/myTerminal/template-library-rollup#info=devDependencies)
[![peer Dependency Status](https://david-dm.org/myTerminal/template-library-rollup/peer-status.svg)](https://david-dm.org/myTerminal/template-library-rollup#info=peerDependencies)  
[![License](https://img.shields.io/badge/LICENSE-GPL%20v3.0-blue.svg)](https://www.gnu.org/licenses/gpl.html)

A template to create front-end libraries with [Rollup.js](https://rollupjs.org) as the module-bundler [in-progress]

## Technologies

### Web

 - [jQuery](https://jquery.com/) (sample dependency)
 - [ES2015](http://es6-features.org/)
 - [Less CSS](http://lesscss.org/)

### Module bundler: Rollup.js

[coming soon]

#### Commands

 - `npm run debug` to run Rollup.js in development mode.  
In this mode, Rollup.js generates source-maps for bundled JavaScript resources to simplify debugging of JavaScript in the web-browser.
 - `npm run develop` to run Rollup.js in development mode and keep watching for file changes within source.  
In this mode, Rollup.js generates source-maps for bundled JavaScript resources to simplify debugging of JavaScript in the web-browser.
 - `npm run build` to run Rollup.js in production mode  
In this mode, Rollup.js minifies the JavaScript bundles and there are no source-maps created.
 - `npm run lint` to run jscs and jshint on all JavaScript source files.

## To-Do

 - Find a way to separate other content like fonts, etc.
 - Find a way to exclude external dependencies
 - Find a way to generate source-maps
 - Find a way to build UMD modules
 - Find a way to write and run tests

# template-library-rollup

[![License: CC BY-NC-SA 4.0](https://licensebuttons.net/l/by-nc-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc-sa/4.0)

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
 - `npm run develop` to run Rollup.js in development mode and keep watching for file changes within the source.  
In this mode, Rollup.js generates source-maps for bundled JavaScript resources to simplify debugging of JavaScript in the web-browser.
 - `npm run build` to run Rollup.js in production mode  
In this mode, Rollup.js minifies the JavaScript bundles and there is no source-map created.
 - `npm run lint` to run ESLint on all JavaScript source files.

## To-Do

 - Find a way to separate other content like fonts, etc.
 - Find a way to exclude external dependencies
 - Find a way to generate source-maps
 - Find a way to build UMD modules
 - Find a way to write and run tests

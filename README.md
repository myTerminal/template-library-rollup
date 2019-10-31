# template-web-library-rollup

[![License: CC BY-NC-SA 4.0](https://licensebuttons.net/l/by-nc-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc-sa/4.0)

A template to create front-end libraries with [Rollup.js](https://rollupjs.org) as the module-bundler [in-progress]

## Technologies

### Web

 - [jQuery](https://jquery.com/) (sample dependency)
 - [ES2015](http://es6-features.org/)
 - [Less CSS](http://lesscss.org/)

### Module bundler: Rollup.js

#### Plugins

 - [rollup-plugin-babel](https://www.npmjs.com/package/rollup-plugin-babel) for ES2015 transpilation
 - [rollup-plugin-commonjs](https://www.npmjs.com/package/rollup-plugin-commonjs) to convert CommonJS modules to ES2015 before Rollup can process them
 - [rollup-plugin-node-resolve](https://www.npmjs.com/package/rollup-plugin-node-resolve) to teach Rollup how to find external modules
 - [rollup-plugin-peer-deps-external](https://www.npmjs.com/package/rollup-plugin-peer-deps-external) to instruct Rollup to exclude external dependencies from the final build
 - [rollup-plugin-postcss](https://www.npmjs.com/package/rollup-plugin-postcss) to handle transpilation and extraction of styles into a separate stylesheet file
 - [rollup-plugin-uglify](https://www.npmjs.com/package/rollup-plugin-uglify) for minification of JavaScript in production builds

#### Supporting dependencies

 - [@babel/core](https://www.npmjs.com/package/@babel/core) and [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) to support rollup-plugin-babel
 - [less](https://www.npmjs.com/package/less) to supplement rollup-plugin-postcss and transpile LESS stylesheets into CSS
 - [effortless-css](https://www.npmjs.com/package/effortless-css) to provide Less CSS mixins
 - [eslint](https://www.npmjs.com/package/eslint), [babel-eslint](https://www.npmjs.com/package/babel-eslint), [eslint-config-myterminal](https://www.npmjs.com/package/eslint-config-myterminal), [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb), [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import), [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) and [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) to support ESlint in linting JavaScript files

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
 - Find a way to generate source-maps
 - Find a way to build UMD modules
 - Find a way to write and run tests

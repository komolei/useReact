
const path = require('path');

const joinPath = url => path.join('../src', url);
// const appJs = path.join('../src', 'app.js')

const appJs = joinPath('app.js');

// import 'babel-polyfill'
// require("babel-polyfill");   

module.exports = {
    // main: ["babel-polyfill", appJs]
    main: appJs,
    index:joinPath('index.js'),
    // ts: joinPath('index.ts'),
}
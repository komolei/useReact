
// import App from './components/app'

// import App from "./store/index";

import RootDom from './entry/index';
import './less/global.less';
let div = document.createElement('div');
div.setAttribute('id', 'app');
document.body.appendChild(div)
const app = document.querySelector('#app');


// if (module.hot) {
//     console.log(
//         'hot updated------------------------------------------sssssssss222222'
//     );
//     module.hot.accept('./index.js', function () {
//         console.log('Accepting the updated printMe module!');
//         printMe();
//     })
// }

import React from 'react';
import { render } from 'react-dom';
render(<RootDom />, app);


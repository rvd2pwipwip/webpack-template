import './style.css';
import jsLogo from './img/javascript-1.svg';

const image = document.createElement('img');
image.src = jsLogo;
image.style.maxWidth = '200px'; 

document.body.appendChild(image);

console.log('This is a webpack template');

// npm start to view in browser
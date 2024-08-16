import './style.css';
import jsLogo from './img/javascript-1.svg';

const logo = new Image();
logo.src = jsLogo;
logo.style.maxWidth = '200px'; 

document.body.appendChild(logo);

console.log('This is a webpack template');

// npm start to view in browser
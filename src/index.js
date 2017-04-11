import {sayHello} from './module';

const element = document.createElement('h1');

element.innerHTML = sayHello('Chris');

document.body.appendChild(element);


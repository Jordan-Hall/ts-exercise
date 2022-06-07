import { appendTitle } from './exercise1/add-title';
import { printName } from './exercise2';
import './style.css'
const app = document.querySelector('#app');
let person = null;
document.title = printName(person)

appendTitle(app);
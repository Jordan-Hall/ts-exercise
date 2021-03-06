/**
 * @vitest-environment jsdom
 */

import { appendTitle } from './add-title';

test('Check if the JS is working', () => {
	const element = document.createElement('div');
	appendTitle(element);

	// get the H1 that the function should of added
	const h1 = element.querySelector('h1');

	expect(h1).not.toBeNull();
	expect(h1.textContent).toBe('Welcome to an introduction to JavScript and Typescript!')
})

test('Calling appendTitle will throw an error', () => {
	const addToMe = {};
	appendTitle(addToMe);
	const h1 = addToMe.querySelector('h1');

	expect(h1).not.toBeNull();
	expect(h1?.textContent).toBe('Welcome to an introduction to JavaScript and Typescript!')
})

test('Wrong type but passes', () => {
	class AddToMeWorkButTestFails {
		text = ''
		set innerHTML(text) {
			this.text = text
		}
	}
	customElements.define('add-to-me', AddToMeWorkButTestFails);
	const addToMe = new AddToMeWorkButTestFails();
	appendTitle(addToMe);
	expect(addToMe.text).toBe('Welcome to an introduction to JavScript and Typescript!')
})
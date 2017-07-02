/*var assert = require('assert');

describe('The login page of Trello', function() {
	it('Shows an error if credentials are incorrect', function() {
		browser.url('https://trello.com/');
		browser.click('=Log In');
		browser.waitForVisible('#user', 10000);					//This needs to be changedd to page load
		browser.setValue('#user', 'jared.chapman.0613@gmail.com');
		browser.setValue('#password', 'thisIsTheWrongPassword');
		browser.click('#login',0,0);
		browser.waitForVisible('.error-message', 10000);
		var msgShouldSay = 'Invalid password';
		var msgSays = browser.getText('p.error-message');
		assert.equal(msgShouldSay, msgSays);
	});

});
*/

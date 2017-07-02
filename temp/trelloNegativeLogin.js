/*var assert = require('assert');

describe('The login page of Trello', function() {
	it('Logs in if credentials are correct', function() {
		browser.url('https://trello.com/');
		browser.click('=Log In');
		browser.waitForVisible('#user', 10000);					//This needs to be changed to page load
		browser.setValue('#user', 'jared.chapman.0613@gmail.com');
		browser.setValue('#password', 'amidoingthisright?');
		browser.click('#login',0,0);
		browser.waitForVisible('.member-initials', 10000);
		var initials = 'JC';
		var initialsShouldSay = browser.getText('.member-initials');
		assert.equal(initialsShouldSay, initials);
	});
});

*/

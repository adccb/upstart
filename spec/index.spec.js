const doTheThing = require('../index.js')

describe('the thing', () => {
	it('should do the thing', () => {
		expect(doTheThing()).toEqual('do a thing!')
	})
})
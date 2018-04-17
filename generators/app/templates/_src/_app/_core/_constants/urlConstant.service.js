'use strict'
export default function(app) {
	let urls;
	if (NODE_ENV === 'production') {
		urls = {
			apiEndpoint: '',
			cdn: ''
		}
	} else {
		urls = {
			apiEndpoint: 'http://localhost:3000',
			cdn: ''
		}
	}

	app.constant('urlConstantService', urls);
}
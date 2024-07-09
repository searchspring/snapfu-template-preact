// DO NOT EDIT - THIS FILE CAN/WILL BE REPLACED!!!
// ***********************************************
// Snap Cypress Configuration
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************

const { defineConfig } = require('cypress');

module.exports = defineConfig({
	defaultCommandTimeout: 12000,
	viewportWidth: 1280,
	viewportHeight: 960,
	chromeWebSecurity: false,
	video: false,
	screenshotOnRunFailure: false,
	e2e: {
		testIsolation: false,
		setupNodeEvents(on, config) {
			require('./cypress/plugins/index.js')(on, config);
			require('cypress-fail-fast/plugin')(on, config);
			return config;
		},
	},
});
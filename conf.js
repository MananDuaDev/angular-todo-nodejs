exports.config = {
	//seleniumAddress: 'http://localhost:4444/wd/hub',
	//directConnect: true,
	specs: ['test.js'],

	capabilities: {
		'browserName': 'chrome',

	},
	useAllAngular2AppRoots: true,
	framework: 'jasmine',
	noGlobals: false
};

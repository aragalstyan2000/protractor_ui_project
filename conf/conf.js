exports.config = {
    directConnect: true,
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine',
    specs: ['../tests/*_spec.js'],
    baseUrl: 'https://www.epicgames.com',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};

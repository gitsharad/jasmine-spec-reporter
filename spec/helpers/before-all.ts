global.SpecReporter = require("../../built/main").SpecReporter;
global.TestProcessor = require("./test-processor").TestProcessor;

beforeAll(() => {
    let addMatchers = require("./test-helper").addMatchers;
    addMatchers();
});

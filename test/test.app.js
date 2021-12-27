const fs = require('fs');
const path = require('path');
const eslint = require('eslint');

function getErrors(configFile, fileToTest) {
    const CLIEngine = eslint.CLIEngine;

    const cli = new CLIEngine({
        configFile: configFile,
    });

    return cli.executeOnText(fs.readFileSync(fileToTest, 'utf8'));
}

test('Validate ESLint configs', () => {
    ['lib/vue3-essential-base.js'].forEach((file) => {
        path.resolve(__dirname, './App.vue');
        it(`load config ${file} in ESLint to validate all rules are correct`, () => {
            expect(getErrors(file, path.resolve(__dirname, './App.vue')).results[0].messages).toEqual([]);
        });
    });
});

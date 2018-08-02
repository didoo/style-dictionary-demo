/* eslint-disable */

const StyleDictionaryPackage = require('./build-style-dictionary-package');
const getStyleDictionaryConfig = require('./build-style-dictionary-config');

console.log('Build started...');

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS

['web', 'ios', 'android'].map(function(platform) {
    ['brand#1', 'brand#2', 'brand#3'].map(function(brand) {

        console.log('\n==============================================');
        console.log(`\nProcessing: [${platform}] [${brand}]`);

        const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(brand, platform));

        if (platform === 'web') {
            StyleDictionary.buildPlatform('web/js');
            StyleDictionary.buildPlatform('web/json');
            StyleDictionary.buildPlatform('web/scss');
        } else if (platform === 'ios') {
            StyleDictionary.buildPlatform('ios');
        } else if (platform === 'android') {
            StyleDictionary.buildPlatform('android');
        }
        StyleDictionary.buildPlatform('styleguide');

        console.log('\nEnd processing');

    })
})

console.log('\n==============================================');
console.log('\nBuild completed!');
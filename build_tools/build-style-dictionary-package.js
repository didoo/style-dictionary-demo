/* eslint-disable */

const StyleDictionary = require('style-dictionary');

// REGISTER CUSTOM FORMATS + TRANSFORMS + TRANSFORM GROUPS

// if you want to see the available pre-defined formats, transforms and transform groups uncomment this
// console.log(StyleDictionary);

StyleDictionary.registerFormat({
    name: 'json/flat',
    formatter: function(dictionary) {
        // console.log(dictionary.allProperties);
        return JSON.stringify(dictionary.allProperties, null, 2);
    }
});

// we wanted to use this custom transform instead of the "prefix" property applied to the platforms
// because we wanted to apply the "token" prefix only to actual tokens and not to the aliases
// but we found out that in case of "name/cti/constant" the prefix was not respecting the case for the "prefix"
//
// StyleDictionary.registerTransform({
//     name: 'name/prefix-token',
//     type: 'name',
//     matcher: function(prop) {
//         return prop.attributes.category !== 'alias';
//     },
//     transformer: function(prop) {
//         return `token-${prop.name}`;
//     }
// });

StyleDictionary.registerTransformGroup({
    name: 'styleguide',
    transforms: ["attribute/cti", "name/cti/kebab", "size/px", "color/css"]
});

StyleDictionary.registerTransformGroup({
    name: 'tokens-js',
    transforms: ["name/cti/constant", "size/px", "color/hex"]
});

StyleDictionary.registerTransformGroup({
    name: 'tokens-json',
    transforms: ["attribute/cti", "name/cti/kebab", "size/px", "color/css"]
});

StyleDictionary.registerTransformGroup({
    name: 'tokens-scss',
    // to see the pre-defined "scss" transformation use: console.log(StyleDictionary.transformGroup['scss']);
    transforms: [ "name/cti/kebab", "time/seconds", "size/px", "color/css" ]
});

module.exports = StyleDictionary;

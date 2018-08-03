const StyleDictionaryPackage = require('style-dictionary');

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

function getStyleDictionaryConfig(brand, platform) {
    return {
        "source": [
            `src/brands/${brand}/*.json`,
            "src/globals/**/*.json",
            `src/platforms/${platform}/*.json`
        ],
        "platforms": {
            "web/js": {
                "transformGroup": "tokens-js",
                "buildPath": `dist/web/${brand}/`,
                "prefix": "token",
                "files": [
                    // uncomment these ones if you need to generate more formats
                    // {
                    //     "destination": "tokens.module.js",
                    //     "format": "javascript/module"
                    // },
                    // {
                    //     "destination": "tokens.object.js",
                    //     "format": "javascript/object"
                    // },
                    {
                        "destination": "tokens.es6.js",
                        "format": "javascript/es6"
                    }
                ]
            },
            "web/json": {
                "transformGroup": "tokens-json",
                "buildPath": `dist/web/${brand}/`,
                "prefix": "token",
                "files": [
                    {
                        "destination": "tokens.json",
                        "format": "json/flat"
                    }
                ]
            },
            "web/scss": {
                "transformGroup": "tokens-scss",
                "buildPath": `dist/web/${brand}/`,
                "prefix": "token",
                "files": [
                    {
                        "destination": "tokens.scss",
                        "format": "scss/variables"
                    }
                ]
            },
            "styleguide": {
                "transformGroup": "styleguide",
                "buildPath": `dist/styleguide/`,
                "prefix": "token",
                "files": [
                    {
                        "destination": `${platform}_${brand}.json`,
                        "format": "json/flat"
                    },
                    {
                        "destination": `${platform}_${brand}.scss`,
                        "format": "scss/variables"
                    }
                ]
            },
            "android": {
                "transformGroup": "android",
                "buildPath": `dist/android/${brand}/`,
                "prefix": "token",
                "files": [
                    // I still have to agree with the Android devs which format they prefer, so for now I use the default example found in the Style Dictionary documentation
                    {
                        "destination": "colors.xml",
                        "template": "android/colors"
                    }
                ]
            },
            "ios": {
                "transformGroup": "ios",
                "buildPath": `dist/ios/${brand}/`,
                "files": [
                    // I still have to agree with the iOS devs which format they prefer, so for now I use the default example found in the Style Dictionary documentation
                    {
                        "destination": "StyleDictionaryColor.h",
                        "template": "ios/colors.h",
                        "className": "StyleDictionaryColor",
                        "type": "StyleDictionaryColorName",
                        "filter": {
                            "attributes": {
                                "category": "color"
                            }
                        }
                    },
                    {
                        "destination": "StyleDictionaryColor.m",
                        "template": "ios/colors.m",
                        "className": "StyleDictionaryColor",
                        "type": "StyleDictionaryColorName",
                        "filter": {
                            "attributes": {
                                "category": "color"
                            }
                        }
                    }
                ]
            }
        }
    };
}

// REGISTER CUSTOM FORMATS + TRANSFORMS + TRANSFORM GROUPS

// if you want to see the available pre-defined formats, transforms and transform groups uncomment this
// console.log(StyleDictionary);

StyleDictionaryPackage.registerFormat({
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
// StyleDictionaryPackage.registerTransform({
//     name: 'name/prefix-token',
//     type: 'name',
//     matcher: function(prop) {
//         return prop.attributes.category !== 'alias';
//     },
//     transformer: function(prop) {
//         return `token-${prop.name}`;
//     }
// });

StyleDictionaryPackage.registerTransformGroup({
    name: 'styleguide',
    transforms: ["attribute/cti", "name/cti/kebab", "size/px", "color/css"]
});

StyleDictionaryPackage.registerTransformGroup({
    name: 'tokens-js',
    transforms: ["name/cti/constant", "size/px", "color/hex"]
});

StyleDictionaryPackage.registerTransformGroup({
    name: 'tokens-json',
    transforms: ["attribute/cti", "name/cti/kebab", "size/px", "color/css"]
});

StyleDictionaryPackage.registerTransformGroup({
    name: 'tokens-scss',
    // to see the pre-defined "scss" transformation use: console.log(StyleDictionary.transformGroup['scss']);
    transforms: [ "name/cti/kebab", "time/seconds", "size/px", "color/css" ]
});

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
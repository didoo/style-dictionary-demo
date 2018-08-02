/* eslint-disable */

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

function getStyleDictionaryConfig(brand, platform) {
    return {
        "source": [
            `src/brands/${brand}/*.json`,
            "src/globals/base/*.json",
            "src/globals/avatar/*.json",
            "src/globals/brick/*.json",
            "src/globals/button/*.json",
            "src/globals/color/*.json",
            "src/globals/gift/*.json",
            "src/globals/icon/*.json",
            "src/globals/input/*.json",
            "src/globals/mark/*.json",
            "src/globals/modal/*.json",
            "src/globals/onlinestatus/*.json",
            "src/globals/spacing/*.json",
            "src/globals/tabbar/*.json",
            "src/globals/typography/*.json",
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
                    {
                        "destination": "font_dimens.xml",
                        "template": "android/fontDimens"
                    },
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
                    },
                    {
                        "destination": "StyleDictionarySize.h",
                        "template": "ios/static.h",
                        "className": "StyleDictionarySize",
                        "type": "float",
                        "filter": {
                            "attributes": {
                                "category": "size"
                            }
                        }
                    },
                    {
                        "destination": "StyleDictionarySize.m",
                        "template": "ios/static.m",
                        "className": "StyleDictionarySize",
                        "type": "float",
                        "filter": {
                            "attributes": {
                                "category": "size"
                            }
                        }
                    }
                ]
            }
        }
    };
}

module.exports = getStyleDictionaryConfig;
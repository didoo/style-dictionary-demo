
//
// StyleDictionaryColor.h
//
// Do not edit directly, generated on Fri Aug 03 2018 09:00:51 GMT+0100 (BST)
//

#import <UIKit/UIKit.h>


typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorPrimary,
ColorSecondary,
ColorGreen,
ColorBlue,
ColorYellow,
ColorRed,
ColorFeatureChat,
ColorFeatureBlog,
ColorFeatureShop,
ColorFeatureSettings,
ColorBlack,
ColorGray60,
ColorGray40,
ColorGray24,
ColorGray12,
ColorGray3,
ColorActionPrimary,
ColorActionDestructive,
ColorBorder,
ColorUserAuthenticated,
ColorUserAnonymous,
ColorSocialFacebook,
ColorSocialTwitter,
ColorSocialVkontakte,
ColorSocialOdnoklassniki,
ColorSocialGoogle,
ColorSocialInstagram,
ColorSocialLinkedin
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end

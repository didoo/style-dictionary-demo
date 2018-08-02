
//
// StyleDictionaryColor.h
//
// Do not edit directly, generated on Thu Aug 02 2018 10:40:38 GMT+0100 (BST)
//

#import <UIKit/UIKit.h>


typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorPrimary,
ColorSecondary,
ColorRedCarrot,
ColorPinkRose,
ColorYellowSun,
ColorGreenDew,
ColorGreenGrass,
ColorPurpleLavanda,
ColorBlueSky,
ColorBlueRain,
ColorProductAttentionBoost,
ColorProductBilling,
ColorProductBoost,
ColorProductBump,
ColorProductBundleSale,
ColorProductChatQuota,
ColorProductChatWithNewbies,
ColorProductChatWithTired,
ColorProductCriteria,
ColorProductCrush,
ColorProductExtraShows,
ColorProductFavourites,
ColorProductInvisibleMode,
ColorProductLikedYou,
ColorProductNeverLooseAccount,
ColorProductRiseup,
ColorProductSpecialDelivery,
ColorProductSpotlight,
ColorProductSpp,
ColorProductUndo,
ColorProductVerification,
ColorBlack,
ColorGray60,
ColorGray40,
ColorGray24,
ColorGray12,
ColorGray3,
ColorActionPrimary,
ColorActionDestructive,
ColorBorder,
ColorPopularityVeryhigh,
ColorPopularityHigh,
ColorPopularityAverage,
ColorPopularityLow,
ColorPopularityVerylow,
ColorOnlineStatusOnline,
ColorOnlineStatusIdle,
ColorProviderFacebook,
ColorProviderTwitter,
ColorProviderVkontakte,
ColorProviderOdnoklassniki,
ColorProviderGoogle,
ColorProviderInstagram,
ColorProviderLinkedin
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end

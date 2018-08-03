
//
// StyleDictionaryColor.m
//
// Do not edit directly, generated on Fri Aug 03 2018 08:52:38 GMT+0100 (BST)
//

#import "StyleDictionaryColor.h"


@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
#3B5998,
#4267B2,
[UIColor colorWithRed:0.29f green:0.55f blue:0.44f alpha:1.00f],
[UIColor colorWithRed:0.08f green:0.13f blue:0.24f alpha:1.00f],
[UIColor colorWithRed:0.99f green:0.64f blue:0.07f alpha:1.00f],
[UIColor colorWithRed:0.75f green:0.02f blue:0.01f alpha:1.00f],
[UIColor colorWithRed:0.29f green:0.55f blue:0.44f alpha:1.00f],
[UIColor colorWithRed:0.08f green:0.13f blue:0.24f alpha:1.00f],
[UIColor colorWithRed:0.99f green:0.64f blue:0.07f alpha:1.00f],
[UIColor colorWithRed:0.75f green:0.02f blue:0.01f alpha:1.00f],
[UIColor colorWithRed:0.00f green:0.00f blue:0.00f alpha:1.00f],
[UIColor colorWithRed:0.42f green:0.42f blue:0.42f alpha:1.00f],
[UIColor colorWithRed:0.58f green:0.58f blue:0.58f alpha:1.00f],
[UIColor colorWithRed:0.77f green:0.77f blue:0.77f alpha:1.00f],
[UIColor colorWithRed:0.88f green:0.88f blue:0.88f alpha:1.00f],
[UIColor colorWithRed:0.96f green:0.96f blue:0.96f alpha:1.00f],
#3B5998,
[UIColor colorWithRed:0.75f green:0.02f blue:0.01f alpha:1.00f],
[UIColor colorWithRed:0.88f green:0.88f blue:0.88f alpha:1.00f],
[UIColor colorWithRed:0.29f green:0.55f blue:0.44f alpha:1.00f],
[UIColor colorWithRed:0.58f green:0.58f blue:0.58f alpha:1.00f],
[UIColor colorWithRed:0.28f green:0.40f blue:0.67f alpha:1.00f],
[UIColor colorWithRed:0.10f green:0.69f blue:1.00f alpha:1.00f],
[UIColor colorWithRed:0.31f green:0.45f blue:0.60f alpha:1.00f],
[UIColor colorWithRed:1.00f green:0.51f blue:0.00f alpha:1.00f],
[UIColor colorWithRed:0.86f green:0.29f blue:0.24f alpha:1.00f],
[UIColor colorWithRed:0.85f green:0.19f blue:0.46f alpha:1.00f],
[UIColor colorWithRed:0.00f green:0.46f blue:0.72f alpha:1.00f]
    ];
  });

  return colorArray;
}

@end

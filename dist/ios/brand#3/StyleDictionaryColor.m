
//
// StyleDictionaryColor.m
//
// Do not edit directly, generated on Thu Aug 02 2018 10:40:38 GMT+0100 (BST)
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
#EA4335,
#34A853,
[UIColor colorWithRed:1.00f green:0.40f blue:0.11f alpha:1.00f],
[UIColor colorWithRed:1.00f green:0.26f blue:0.47f alpha:1.00f],
[UIColor colorWithRed:1.00f green:0.78f blue:0.19f alpha:1.00f],
[UIColor colorWithRed:0.00f green:0.79f blue:0.66f alpha:1.00f],
[UIColor colorWithRed:0.09f green:0.83f blue:0.09f alpha:1.00f],
[UIColor colorWithRed:0.44f green:0.00f blue:0.89f alpha:1.00f],
[UIColor colorWithRed:0.10f green:0.69f blue:1.00f alpha:1.00f],
[UIColor colorWithRed:0.17f green:0.55f blue:0.99f alpha:1.00f],
[UIColor colorWithRed:1.00f green:0.40f blue:0.11f alpha:1.00f],
[UIColor colorWithRed:0.09f green:0.83f blue:0.09f alpha:1.00f],
[UIColor colorWithRed:1.00f green:0.26f blue:0.47f alpha:1.00f],
[UIColor colorWithRed:0.44f green:0.00f blue:0.89f alpha:1.00f],
[UIColor colorWithRed:0.09f green:0.83f blue:0.09f alpha:1.00f],
[UIColor colorWithRed:0.10f green:0.69f blue:1.00f alpha:1.00f],
[UIColor colorWithRed:0.09f green:0.83f blue:0.09f alpha:1.00f],
[UIColor colorWithRed:1.00f green:0.40f blue:0.11f alpha:1.00f],
#EA4335,
[UIColor colorWithRed:0.44f green:0.00f blue:0.89f alpha:1.00f],
[UIColor colorWithRed:0.00f green:0.79f blue:0.66f alpha:1.00f],
[UIColor colorWithRed:1.00f green:0.78f blue:0.19f alpha:1.00f],
[UIColor colorWithRed:0.10f green:0.69f blue:1.00f alpha:1.00f],
[UIColor colorWithRed:1.00f green:0.40f blue:0.11f alpha:1.00f],
[UIColor colorWithRed:0.09f green:0.83f blue:0.09f alpha:1.00f],
[UIColor colorWithRed:0.09f green:0.83f blue:0.09f alpha:1.00f],
[UIColor colorWithRed:0.17f green:0.55f blue:0.99f alpha:1.00f],
[UIColor colorWithRed:0.17f green:0.55f blue:0.99f alpha:1.00f],
#EA4335,
#EA4335,
[UIColor colorWithRed:0.10f green:0.69f blue:1.00f alpha:1.00f],
[UIColor colorWithRed:0.00f green:0.00f blue:0.00f alpha:1.00f],
[UIColor colorWithRed:0.42f green:0.42f blue:0.42f alpha:1.00f],
[UIColor colorWithRed:0.58f green:0.58f blue:0.58f alpha:1.00f],
[UIColor colorWithRed:0.77f green:0.77f blue:0.77f alpha:1.00f],
[UIColor colorWithRed:0.88f green:0.88f blue:0.88f alpha:1.00f],
[UIColor colorWithRed:0.96f green:0.96f blue:0.96f alpha:1.00f],
#EA4335,
[UIColor colorWithRed:1.00f green:0.40f blue:0.11f alpha:1.00f],
[UIColor colorWithRed:0.88f green:0.88f blue:0.88f alpha:1.00f],
[UIColor colorWithRed:0.09f green:0.83f blue:0.09f alpha:1.00f],
[UIColor colorWithRed:0.09f green:0.83f blue:0.09f alpha:1.00f],
[UIColor colorWithRed:1.00f green:0.78f blue:0.19f alpha:1.00f],
[UIColor colorWithRed:1.00f green:0.40f blue:0.11f alpha:1.00f],
[UIColor colorWithRed:1.00f green:0.40f blue:0.11f alpha:1.00f],
[UIColor colorWithRed:0.09f green:0.83f blue:0.09f alpha:1.00f],
[UIColor colorWithRed:1.00f green:0.78f blue:0.19f alpha:1.00f],
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

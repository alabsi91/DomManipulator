/**
 *
 * CSSProprties
 *
 * @typedef {Object} CssObject
 *
 * @property {"normal"} alignContent
 *
 * The CSS **`align-content`** property sets how the browser distributes space between and around content items along the cross-axis of a flexbox container, and the main-axis of a grid container.
 *
 * **Syntax**: `normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>`
 *
 * **Initial value**: `normal`
 *
 * ---
 *
 * _Supported in Flex Layout_
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
 * | :------: | :-----: | :-------: | :----: | :----: |
 * |  **29**  | **28**  |   **9**   | **12** | **11** |
 * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
 *
 * ---
 *
 * _Supported in Grid Layout_
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **57** | **52**  | **10.1** | **16** | No  |
 *
 * ---
 *
 * @property {"normal" | "stretch"} alignItems
 *
 * The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. The align-self property sets the alignment of an item within its containing block. In Flexbox it controls the alignment of items on the Cross Axis, in Grid Layout it controls the alignment of items on the Block Axis within their grid area.
 *
 * **Syntax**: `normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]`
 *
 * **Initial value**: `normal`
 *
 * ---
 *
 * _Supported in Flex Layout_
 *
 * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
 * | :------: | :-----: | :-----: | :----: | :----: |
 * |  **52**  | **20**  |  **9**  | **12** | **11** |
 * | 21 _-x-_ |         | 7 _-x-_ |        |        |
 *
 * ---
 *
 * _Supported in Grid Layout_
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **57** | **52**  | **10.1** | **16** | No  |
 *
 * @property {"auto" | "normal" | "stretch"} alignSelf
 *
 * The **`align-self`** CSS property aligns flex items of the current flex line overriding the `align-items` value. If any of the item's cross-axis margin is set to `auto`, then `align-self` is ignored. In Grid layout `align-self` aligns the item inside the grid area.
 *
 * **Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>`
 *
 * **Initial value**: `auto`
 *
 * ---
 *
 * _Supported in Flex Layout_
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
 * | :------: | :-----: | :-------: | :----: | :----: |
 * |  **36**  | **20**  |   **9**   | **12** | **11** |
 * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
 *
 * ---
 *
 * _Supported in Grid Layout_
 *
 * | Chrome | Firefox |  Safari  |  Edge  |      IE      |
 * | :----: | :-----: | :------: | :----: | :----------: |
 * | **57** | **52**  | **10.1** | **16** | **10** _-x-_ |
 *
 * ---
 *
 * @property {"name duration timing-function delay iteration-count direction fill-mode"} animation
 *
 * The **`animation`** shorthand CSS property sets an animated transition between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.
 *
 * **Syntax**: `<single-animation>#`
 *
 * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
 * | :-----: | :-----: | :-----: | :----: | :----: |
 * | **43**  | **16**  |  **9**  | **12** | **10** |
 * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
 *
 * ---
 *
 * @property {String} animationDelay
 *
 * The **`animation-delay`** CSS property sets when an animation starts. The animation can start later, immediately from its beginning, or immediately and partway through the animation.
 *
 * **Syntax**: `<time>#`
 *
 * **Initial value**: `0s`
 *
 * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
 * | :-----: | :-----: | :-----: | :----: | :----: |
 * | **43**  | **16**  |  **9**  | **12** | **10** |
 * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
 *
 * ---
 *
 * @property {String} animationDirection
 *
 * The **`animation-direction`** CSS property sets whether an animation should play forwards, backwards, or alternating back and forth.
 *
 * **Syntax**: `<single-animation-direction>#`
 *
 * **Initial value**: `normal`
 *
 * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
 * | :-----: | :-----: | :-----: | :----: | :----: |
 * | **43**  | **16**  |  **9**  | **12** | **10** |
 * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
 *
 * ---
 *
 * @property {String} animationDuration
 *
 * The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.
 *
 * **Syntax**: `<time>#`
 *
 * **Initial value**: `0s`
 *
 * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
 * | :-----: | :-----: | :-----: | :----: | :----: |
 * | **43**  | **16**  |  **9**  | **12** | **10** |
 * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
 *
 * ---
 *
 * @property {String} animationFillMode
 *
 * The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.
 *
 * **Syntax**: `<single-animation-fill-mode>#`
 *
 * **Initial value**: `none`
 *
 * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
 * | :-----: | :-----: | :-----: | :----: | :----: |
 * | **43**  | **16**  |  **9**  | **12** | **10** |
 * | 3 _-x-_ | 5 _-x-_ | 5 _-x-_ |        |        |
 *
 * ---
 *
 * @property {String} animationIterationCount
 *
 * The **`animation-iteration-count`** CSS property sets the number of times an animation cycle should be played before stopping.
 *
 * **Syntax**: `<single-animation-iteration-count>#`
 *
 * **Initial value**: `1`
 *
 * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
 * | :-----: | :-----: | :-----: | :----: | :----: |
 * | **43**  | **16**  |  **9**  | **12** | **10** |
 * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
 *
 * ---
 *
 * @property {String} animationName
 *
 * The **`animation-name`** CSS property sets one or more animations to apply to an element. Each name is an `@keyframes` at-rule that sets the property values for the animation sequence.
 *
 * **Syntax**: `[ none | <keyframes-name> ]#`
 *
 * **Initial value**: `none`
 *
 * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
 * | :-----: | :-----: | :-----: | :----: | :----: |
 * | **43**  | **16**  |  **9**  | **12** | **10** |
 * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
 *
 * ---
 *
 * @property {String} animationPlayState
 *
 * The **`animation-play-state`** CSS property sets whether an animation is running or paused.
 *
 * **Syntax**: `<single-animation-play-state>#`
 *
 * **Initial value**: `running`
 *
 * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
 * | :-----: | :-----: | :-----: | :----: | :----: |
 * | **43**  | **16**  |  **9**  | **12** | **10** |
 * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
 *
 * ---
 *
 * @property {String} animationTimingFunction
 *
 * The `**animation-timing-function**` CSS property sets how an animation progresses through the duration of each cycle.
 *
 * **Syntax**: `<timing-function>#`
 *
 * **Initial value**: `ease`
 *
 * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
 * | :-----: | :-----: | :-----: | :----: | :----: |
 * | **43**  | **16**  |  **9**  | **12** | **10** |
 * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
 *
 * ---
 *
 * @property {String} appearance
 *
 * The **`-moz-appearance`** CSS property is used in Gecko (Firefox) to display an element using platform-native styling based on the operating system's theme.
 *
 * **Syntax**: `none | auto | button | textfield | menulist-button | <compat-auto>`
 *
 * **Initial value**: `auto`
 *
 * |   Chrome    |   Firefox   |   Safari    |     Edge     | IE  |
 * | :---------: | :---------: | :---------: | :----------: | :-: |
 * | **1** _-x-_ | **1** _-x-_ | **3** _-x-_ | **12** _-x-_ | No  |
 *
 * ---
 *
 * @property {String} aspectRatio
 *
 * The **`aspect-ratio`**    CSS property sets a _**preferred aspect ratio**_ for the box, which will be used in the calculation of auto sizes and some other layout functions.
 *
 * **Syntax**: `auto | <ratio>`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **79** | **71**  |   No   | **79** | No  |
 *
 * ---
 *
 * @property {String} backdropFilter
 *
 * The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.
 *
 * **Syntax**: `none | <filter-function-list>`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox |   Safari    |  Edge  | IE  |
 * | :----: | :-----: | :---------: | :----: | :-: |
 * | **76** |   n/a   | **9** _-x-_ | **17** | No  |
 *
 * ---
 *
 * @property {String} backfaceVisibility
 *
 * The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.
 *
 * **Syntax**: `visible | hidden`
 *
 * **Initial value**: `visible`
 *
 * |  Chrome  | Firefox  |    Safari     |  Edge  |   IE   |
 * | :------: | :------: | :-----------: | :----: | :----: |
 * |  **36**  |  **16**  | **5.1** _-x-_ | **12** | **10** |
 * | 12 _-x-_ | 10 _-x-_ |               |        |        |
 *
 * ---
 *
 * @property {String} backgroundAttachment
 *
 * The **`background-attachment`** CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.
 *
 * **Syntax**: `<attachment>#`
 *
 * **Initial value**: `scroll`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} backgroundBlendMode
 *
 * The **`background-blend-mode`** CSS property sets how an element's background images should blend with each other and with the element's background color.
 *
 * **Syntax**: `<blend-mode>#`
 *
 * **Initial value**: `normal`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **35** | **30**  | **8**  | **79** | No  |
 *
 * ---
 *
 * @property {String} background
 *
 * The **`background`** shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.
 *
 * **Syntax**: `[ <bg-layer> , ]* <final-bg-layer>`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} backgroundColor
 *
 * The **`background-color`** CSS property sets the background color of an element.
 *
 * **Syntax**: `<color>`
 *
 * **Initial value**: `transparent`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} backgroundImage
 *
 * The **`background-image`** CSS property sets one or more background images on an element.
 *
 * **Syntax**: `<bg-image>#`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 *
 * @property {String} backgroundPosition
 *
 * The **`background-position`** CSS property sets the initial position for each background image. The position is relative to the position layer set by `background-origin`.
 *
 * **Syntax**: `<bg-position>#`
 *
 * **Initial value**: `0% 0%`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 * @property {String} backgroundPositionX
 *
 * The **`background-position-x`** CSS property sets the initial horizontal position for each background image. The position is relative to the position layer set by `background-origin`.
 *
 * **Syntax**: `[ center | [ [ left | right | x-start | x-end ]? <length-percentage>? ]! ]#`
 *
 * **Initial value**: `left`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  | **49**  | **1**  | **12** | **6** |
 *
 * ---
 *
 * @property {String} backgroundPositionY
 *
 * The **`background-position-y`** CSS property sets the initial vertical position, relative to the background position layer defined by `background-origin`, for each defined background image.
 *
 * **Syntax**: `[ center | [ [ top | bottom | y-start | y-end ]? <length-percentage>? ]! ]#`
 *
 * **Initial value**: `top`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  | **49**  | **1**  | **12** | **6** |
 *
 * ---
 *
 * @property {String} backgroundRepeat
 *
 * The **`background-repeat`** CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.
 *
 * **Syntax**: `<repeat-style>#`
 *
 * **Initial value**: `repeat`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} backgroundClip
 *
 * The **`background-clip`** CSS property sets whether an element's background `<color>` or `<image>` extends underneath its border.
 *
 * **Syntax**: `<box>#`
 *
 * **Initial value**: `border-box`
 *
 * | Chrome | Firefox |   Safari    |  Edge  |  IE   |
 * | :----: | :-----: | :---------: | :----: | :---: |
 * | **1**  |  **4**  | **3** _-x-_ | **12** | **9** |
 *
 * ---
 *
 * @property {String} backgroundOrigin
 *
 * The **`background-origin`** CSS property sets the _background positioning area_. In other words, it sets the origin position of an image set with the `background-image` property.
 *
 * **Syntax**: `<box>#`
 *
 * **Initial value**: `padding-box`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **4**  | **3**  | **12** | **9** |
 *
 * ---
 *
 * @property {String} backgroundSize
 *
 * The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.
 *
 * **Syntax**: `<bg-size>#`
 *
 * **Initial value**: `auto auto`
 *
 * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
 * | :-----: | :-----: | :-----: | :----: | :---: |
 * |  **3**  |  **4**  |  **5**  | **12** | **9** |
 * | 1 _-x-_ |         | 3 _-x-_ |        |       |
 *
 * ---
 *
 * @property {String} blockOverflow
 *
 * **Syntax**: `clip | ellipsis | <string>`
 *
 * **Initial value**: `clip`
 *
 * ---
 *
 * @property {String} blockSize
 *
 * The **`block-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
 *
 * **Syntax**: `<'width'>`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **57** | **41**  | **12.1** | **79** | No  |
 *
 * ---
 *
 * @property {String} borderBlockColor
 *
 * The **`border-block-color`** CSS property defines the color of the logical block borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<'border-top-color'>{1,2}`
 *
 * **Initial value**: `currentcolor`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |  n/a   | **66**  |   No   | n/a  | No  |
 *
 * ---
 *
 * @property {String} borderBlockEndColor
 *
 * The **`border-block-end-color`** CSS property defines the color of the logical block-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<'border-top-color'>`
 *
 * **Initial value**: `currentcolor`
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **69** | **41**  | **12.1** | **79** | No  |
 *
 * ---
 *
 * @property {String} borderBlockEndStyle
 *
 * The **`border-block-end-style`** CSS property defines the style of the logical block end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<'border-top-style'>`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **69** | **41**  | **12.1** | **79** | No  |
 *
 * ---
 *
 * @property {String} borderBlockEndWidth
 *
 * The **`border-block-end-width`** CSS property defines the width of the logical block-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<'border-top-width'>`
 *
 * **Initial value**: `medium`
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **69** | **41**  | **12.1** | **79** | No  |
 *
 * ---
 *
 * @property {String} borderBlockStartColor
 *
 * The **`border-block-start-color`** CSS property defines the color of the logical block-start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<'border-top-color'>`
 *
 * **Initial value**: `currentcolor`
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **69** | **41**  | **12.1** | **79** | No  |
 *
 * ---
 *
 * @property {String} borderBlockStartStyle
 *
 * The **`border-block-start-style`** CSS property defines the style of the logical block start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<'border-top-style'>`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **69** | **41**  | **12.1** | **79** | No  |
 *
 * ---
 *
 * @property {String} borderBlockStartWidth
 *
 * The **`border-block-start-width`** CSS property defines the width of the logical block-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<'border-top-width'>`
 *
 * **Initial value**: `medium`
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **69** | **41**  | **12.1** | **79** | No  |
 *
 * ---
 *
 * @property {String} borderBlockStyle
 *
 * The **`border-block-style`** CSS property defines the style of the logical block borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<'border-top-style'>`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **69** | **66**  |   No   | **79** | No  |
 *
 * ---
 *
 * @property {String} borderBlockWidth
 *
 * The **`border-block-width`** CSS property defines the width of the logical block borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<'border-top-width'>`
 *
 * **Initial value**: `medium`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **69** | **66**  |   No   | **79** | No  |
 *
 * ---
 *
 * @property {String} border
 *
 * The **`border-block`** CSS property is a shorthand property for setting the individual logical block border property values in a single place in the style sheet.
 *
 * **Syntax**: `<'border-top-width'> || <'border-top-style'> || <'color'>`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **69** | **66**  |   No   | **79** | No  |
 *
 * ---
 *
 * @property {String} borderBottom
 *
 * The **`border-bottom`** CSS property is a shorthand that sets the values of `border-bottom-width`, `border-bottom-style` and `border-bottom-color`. These properties set an element's bottom border.
 *
 * **Syntax**: `<line-width> || <line-style> || <color>`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} borderBottomColor
 *
 * The **`border-bottom-color`** CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties `border-color` or `border-bottom`.
 *
 * **Syntax**: `<'border-top-color'>`
 *
 * **Initial value**: `currentcolor`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} borderBottomLeftRadius
 *
 * The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element.
 *
 * **Syntax**: `<length-percentage>{1,2}`
 *
 * **Initial value**: `0`
 *
 * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
 * | :-----: | :-----: | :-----: | :----: | :---: |
 * |  **4**  |  **4**  |  **5**  | **12** | **9** |
 * | 1 _-x-_ |         | 3 _-x-_ |        |       |
 *
 * ---
 *
 * @property {String} borderBottomRightRadius
 *
 * The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element.
 *
 * **Syntax**: `<length-percentage>{1,2}`
 *
 * **Initial value**: `0`
 *
 * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
 * | :-----: | :-----: | :-----: | :----: | :---: |
 * |  **4**  |  **4**  |  **5**  | **12** | **9** |
 * | 1 _-x-_ |         | 3 _-x-_ |        |       |
 *
 * ---
 *
 * @property {String} borderBottomStyle
 *
 * The **`border-bottom-style`** CSS property sets the line style of an element's bottom `border`.
 *
 * **Syntax**: `<line-style>`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox | Safari |  Edge  |   IE    |
 * | :----: | :-----: | :----: | :----: | :-----: |
 * | **1**  |  **1**  | **1**  | **12** | **5.5** |
 *
 * ---
 *
 * @property {String} borderBottomWidth
 *
 * The **`border-bottom-width`** CSS property sets the width of the bottom border of a box.
 *
 * **Syntax**: `<line-width>`
 *
 * **Initial value**: `medium`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} borderCollapse
 *
 * The **`border-collapse`** CSS property sets whether cells inside a `<table>` have shared or separate borders.
 *
 * **Syntax**: `collapse | separate`
 *
 * **Initial value**: `separate`
 *
 * | Chrome | Firefox | Safari  |  Edge  |  IE   |
 * | :----: | :-----: | :-----: | :----: | :---: |
 * | **1**  |  **1**  | **1.2** | **12** | **5** |
 *
 * ---
 *
 * @property {String} borderEndEndRadius
 *
 * The **`border-end-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on on the element's `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<length-percentage>{1,2}`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |   No   | **66**  |   No   |  No  | No  |
 *
 * ---
 *
 * @property {String} borderEndStartRadius
 *
 * The **`border-end-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<length-percentage>{1,2}`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |   No   | **66**  |   No   |  No  | No  |
 *
 * ---
 *
 * @property {String} borderColor
 *
 * The **`border-color`** shorthand CSS property sets the color of all sides of an element's border.
 *
 * **Syntax**: `<color>{1,4}`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} borderImage
 *
 * The **`border-image`** CSS property draws an image in place of an element's `border-style`.
 *
 * **Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`
 *
 * | Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
 * | :-----: | :-------: | :-----: | :----: | :----: |
 * | **16**  |  **15**   |  **6**  | **12** | **11** |
 * | 7 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |
 *
 * ---
 *
 * @property {String} borderImageOutset
 *
 * The **`border-image-outset`** CSS property sets the distance by which an element's border image is set out from its border box.
 *
 * **Syntax**: `[ <length> | <number> ]{1,4}`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox | Safari |  Edge  |   IE   |
 * | :----: | :-----: | :----: | :----: | :----: |
 * | **15** | **15**  | **6**  | **12** | **11** |
 *
 * ---
 *
 * @property {String} borderImageRepeat
 *
 * The **`border-image-repeat`** CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's border image.
 *
 * **Syntax**: `[ stretch | repeat | round | space ]{1,2}`
 *
 * **Initial value**: `stretch`
 *
 * | Chrome | Firefox | Safari |  Edge  |   IE   |
 * | :----: | :-----: | :----: | :----: | :----: |
 * | **15** | **15**  | **6**  | **12** | **11** |
 *
 * ---
 *
 * @property {String} borderImageSlice
 *
 * The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.
 *
 * **Syntax**: `<number-percentage>{1,4} && fill?`
 *
 * **Initial value**: `100%`
 *
 * | Chrome | Firefox | Safari |  Edge  |   IE   |
 * | :----: | :-----: | :----: | :----: | :----: |
 * | **15** | **15**  | **6**  | **12** | **11** |
 *
 * ---
 *
 * @property {String} borderImageSource
 *
 * The **`border-image-source`** CSS property sets the source image used to create an element's border image.
 *
 * **Syntax**: `none | <image>`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox | Safari |  Edge  |   IE   |
 * | :----: | :-----: | :----: | :----: | :----: |
 * | **15** | **15**  | **6**  | **12** | **11** |
 *
 * ---
 *
 * @property {String} borderImageWidth
 *
 * The **`border-image-width`** CSS property sets the width of an element's border image.
 *
 * **Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`
 *
 * **Initial value**: `1`
 *
 * | Chrome | Firefox | Safari |  Edge  |   IE   |
 * | :----: | :-----: | :----: | :----: | :----: |
 * | **15** | **13**  | **6**  | **12** | **11** |
 *
 * ---
 *
 * @property {String} borderInlineColor
 *
 * The **`border-inline-color`** CSS property defines the color of the logical inline borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<'border-top-color'>{1,2}`
 *
 * **Initial value**: `currentcolor`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **69** | **66**  |   No   | **79** | No  |
 *
 * ---
 *
 * @property {String} borderInlineEndColor
 *
 * The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<'border-top-color'>`
 *
 * **Initial value**: `currentcolor`
 *
 * | Chrome |           Firefox           |  Safari  |  Edge  | IE  |
 * | :----: | :-------------------------: | :------: | :----: | :-: |
 * | **69** |           **41**            | **12.1** | **79** | No  |
 * |        | 3 _(-moz-border-end-color)_ |          |        |     |
 *
 * ---
 *
 * @property {String} borderInlineEndStyle
 *
 * The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<'border-top-style'>`
 *
 * **Initial value**: `none`
 *
 * | Chrome |           Firefox           |  Safari  |  Edge  | IE  |
 * | :----: | :-------------------------: | :------: | :----: | :-: |
 * | **69** |           **41**            | **12.1** | **79** | No  |
 * |        | 3 _(-moz-border-end-style)_ |          |        |     |
 *
 * ---
 *
 * @property {String} borderInlineEndWidth
 *
 * The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<'border-top-width'>`
 *
 * **Initial value**: `medium`
 *
 * | Chrome |           Firefox           |  Safari  |  Edge  | IE  |
 * | :----: | :-------------------------: | :------: | :----: | :-: |
 * | **69** |           **41**            | **12.1** | **79** | No  |
 * |        | 3 _(-moz-border-end-width)_ |          |        |     |
 *
 * ---
 *
 * @property {String} borderInlineStartColor
 *
 * The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<'border-top-color'>`
 *
 * **Initial value**: `currentcolor`
 *
 * | Chrome |            Firefox            |  Safari  |  Edge  | IE  |
 * | :----: | :---------------------------: | :------: | :----: | :-: |
 * | **69** |            **41**             | **12.1** | **79** | No  |
 * |        | 3 _(-moz-border-start-color)_ |          |        |     |
 *
 * ---
 *
 * @property {String} borderInlineStartStyle
 *
 * The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<'border-top-style'>`
 *
 * **Initial value**: `none`
 *
 * | Chrome |            Firefox            |  Safari  |  Edge  | IE  |
 * | :----: | :---------------------------: | :------: | :----: | :-: |
 * | **69** |            **41**             | **12.1** | **79** | No  |
 * |        | 3 _(-moz-border-start-style)_ |          |        |     |
 *
 * ---
 *
 * @property {String} borderInlineStartWidth
 *
 * The **`border-inline-start-width`** CSS property defines the width of the logical inline-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<'border-top-width'>`
 *
 * **Initial value**: `medium`
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **69** | **41**  | **12.1** | **79** | No  |
 *
 * ---
 *
 * @property {String} borderInlineStyle
 *
 * The **`border-inline-style`** CSS property defines the style of the logical inline borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<'border-top-style'>`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **69** | **66**  |   No   | **79** | No  |
 *
 * ---
 *
 * @property {String} borderInlineWidth
 *
 * The **`border-inline-width`** CSS property defines the width of the logical inline borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<'border-top-width'>`
 *
 * **Initial value**: `medium`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **69** | **66**  |   No   | **79** | No  |
 *
 * ---
 *
 * @property {String} borderLeft
 *
 * The **`border-left`** CSS property is a shorthand that sets the values of `border-left-width`, `border-left-style` and `border-left-color`. These properties set an element's left border.
 *
 * **Syntax**: `<line-width> || <line-style> || <color>`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} borderLeftColor
 *
 * The **`border-left-color`** CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties `border-color` or `border-left`.
 *
 * **Syntax**: `<color>`
 *
 * **Initial value**: `currentcolor`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} borderLeftStyle
 *
 * The **`border-left-style`** CSS property sets the line style of an element's left `border`.
 *
 * **Syntax**: `<line-style>`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox | Safari |  Edge  |   IE    |
 * | :----: | :-----: | :----: | :----: | :-----: |
 * | **1**  |  **1**  | **1**  | **12** | **5.5** |
 *
 * ---
 *
 * @property {String} borderLeftWidth
 *
 * The **`border-left-width`** CSS property sets the width of the left border of an element.
 *
 * **Syntax**: `<line-width>`
 *
 * **Initial value**: `medium`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} borderRadius
 *
 * The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
 *
 * **Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`
 *
 * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
 * | :-----: | :-----: | :-----: | :----: | :---: |
 * |  **4**  |  **4**  |  **5**  | **12** | **9** |
 * | 1 _-x-_ |         | 3 _-x-_ |        |       |
 *
 * ---
 *
 * @property {String} borderRight
 *
 * The **`border-right`** CSS property is a shorthand that sets the values of `border-right-width`, `border-right-style` and `border-right-color`. These properties set an element's right border.
 *
 * **Syntax**: `<line-width> || <line-style> || <color>`
 *
 * | Chrome | Firefox | Safari |  Edge  |   IE    |
 * | :----: | :-----: | :----: | :----: | :-----: |
 * | **1**  |  **1**  | **1**  | **12** | **5.5** |
 *
 * ---
 *
 * @property {String} borderRightColor
 *
 * The **`border-right-color`** CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties `border-color` or `border-right`.
 *
 * **Syntax**: `<color>`
 *
 * **Initial value**: `currentcolor`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} borderRightStyle
 *
 * The **`border-right-style`** CSS property sets the line style of an element's right `border`.
 *
 * **Syntax**: `<line-style>`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox | Safari |  Edge  |   IE    |
 * | :----: | :-----: | :----: | :----: | :-----: |
 * | **1**  |  **1**  | **1**  | **12** | **5.5** |
 *
 * ---
 *
 * @property {String} borderRightWidth
 *
 * The **`border-right-width`** CSS property sets the width of the right border of an element.
 *
 * **Syntax**: `<line-width>`
 *
 * **Initial value**: `medium`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} borderSpacing
 *
 * The **`border-spacing`** CSS property sets the distance between the borders of adjacent `<table>` cells. This property applies only when `border-collapse` is `separate`.
 *
 * **Syntax**: `<length> <length>?`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **8** |
 *
 * ---
 *
 * @property {String} borderStartEndRadius
 *
 * The **`border-start-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<length-percentage>{1,2}`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |   No   | **66**  |   No   |  No  | No  |
 *
 * ---
 *
 * @property {String} borderStartStartRadius
 *
 * The **`border-start-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<length-percentage>{1,2}`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |   No   | **66**  |   No   |  No  | No  |
 *
 * ---
 *
 * @property {String} borderStyle
 *
 * The **`border-style`** CSS property is a shorthand property that sets the line style for all four sides of an element's border.
 *
 * **Syntax**: `<line-style>{1,4}`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ----
 *
 * @property {String} borderTop
 *
 * The **`border-top`** CSS property is a shorthand that sets the values of `border-top-width`, `border-top-style` and `border-top-color`. These properties set an element's top border.
 *
 * **Syntax**: `<line-width> || <line-style> || <color>`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} borderTopColor
 *
 * The **`border-top-color`** CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties `border-color` or `border-top`.
 *
 * **Syntax**: `<color>`
 *
 * **Initial value**: `currentcolor`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} borderTopLeftRadius
 *
 * The **`border-top-left-radius`** CSS property rounds the top-left corner of an element.
 *
 * **Syntax**: `<length-percentage>{1,2}`
 *
 * **Initial value**: `0`
 *
 * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
 * | :-----: | :-----: | :-----: | :----: | :---: |
 * |  **4**  |  **4**  |  **5**  | **12** | **9** |
 * | 1 _-x-_ |         | 3 _-x-_ |        |       |
 *
 * ---
 *
 * @property {String} borderTopRightRadius
 *
 * The **`border-top-right-radius`** CSS property rounds the top-right corner of an element.
 *
 * **Syntax**: `<length-percentage>{1,2}`
 *
 * **Initial value**: `0`
 *
 * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
 * | :-----: | :-----: | :-----: | :----: | :---: |
 * |  **4**  |  **4**  |  **5**  | **12** | **9** |
 * | 1 _-x-_ |         | 3 _-x-_ |        |       |
 *
 * ---
 *
 * @property {String} borderTopStyle
 *
 * The **`border-top-style`** CSS property sets the line style of an element's top `border`.
 *
 * **Syntax**: `<line-style>`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox | Safari |  Edge  |   IE    |
 * | :----: | :-----: | :----: | :----: | :-----: |
 * | **1**  |  **1**  | **1**  | **12** | **5.5** |
 *
 * ---
 *
 * @property {String} borderTopWidth
 *
 * The **`border-top-width`** CSS property sets the width of the top border of an element.
 *
 * **Syntax**: `<line-width>`
 *
 * **Initial value**: `medium`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} borderWidth
 *
 * The **`border-width`** shorthand CSS property sets the widths of all four sides of an element's border.
 *
 * **Syntax**: `<line-width>{1,4}`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} bottom
 *
 * The **`bottom`** CSS property participates in specifying the vertical position of a _positioned element_. It has no effect on non-positioned elements.
 *
 * **Syntax**: `<length> | <percentage> | auto`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **5** |
 *
 * ---
 *
 * @property {String} boxDecorationBreak
 *
 * The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.
 *
 * **Syntax**: `slice | clone`
 *
 * **Initial value**: `slice`
 *
 * |    Chrome    | Firefox |    Safari     |     Edge     | IE  |
 * | :----------: | :-----: | :-----------: | :----------: | :-: |
 * | **22** _-x-_ | **32**  | **6.1** _-x-_ | **79** _-x-_ | No  |
 *
 * --
 *
 * @property {String} boxShadow
 *
 * The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radii, and color.
 *
 * **Syntax**: `none | <shadow>#`
 *
 * **Initial value**: `none`
 *
 * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
 * | :-----: | :-----: | :-----: | :----: | :---: |
 * | **10**  |  **4**  | **5.1** | **12** | **9** |
 * | 1 _-x-_ |         | 3 _-x-_ |        |       |
 *
 * ---
 *
 * @property {String} boxSizing
 *
 * The **`box-sizing`** CSS property defines how the user agent should calculate the total width and height of an element.
 *
 * **Syntax**: `content-box | border-box`
 *
 * **Initial value**: `content-box`
 *
 * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
 * | :-----: | :-----: | :-----: | :----: | :---: |
 * | **10**  | **29**  | **5.1** | **12** | **8** |
 * | 1 _-x-_ | 1 _-x-_ | 3 _-x-_ |        |       |
 *
 * ---
 *
 * @property {"auto" | "avoid" | "always" | "all" | "avoid-page" | "page" | "left" | "right" | "recto" | "verso" | "avoid-column" | "column" | "avoid-region" | "region"} breakAfter
 *
 * The **`break-after`** CSS property defines how page, column, or region breaks should behave after a generated box. If there is no generated box, the property is ignored.
 *
 * **Syntax**: `auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region`
 *
 * **Initial value**: `auto`
 *
 * ---
 *
 * _Supported in Multi-column Layout_
 *
 * | Chrome | Firefox | Safari |  Edge  |   IE   |
 * | :----: | :-----: | :----: | :----: | :----: |
 * | **50** |   No    |   No   | **12** | **10** |
 *
 * ---
 *
 * _Supported in Paged Media_
 *
 * | Chrome | Firefox | Safari |  Edge  |   IE   |
 * | :----: | :-----: | :----: | :----: | :----: |
 * | **50** | **65**  | **10** | **12** | **10** |
 *
 * ---
 *
 * _Supported in CSS Regions_
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |   No   |   No    |   No   |  No  | No  |
 *
 * ---
 *
 * @property {"auto" | "avoid" | "always" | "all" | "avoid-page" | "page" | "left" | "right" | "recto" | "verso" | "avoid-column" | "column" | "avoid-region" | "region"} breakBefore
 *
 * The **`break-before`** CSS property sets how page, column, or region breaks should behave before a generated box. If there is no generated box, the property is ignored.
 *
 * **Syntax**: `auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region`
 *
 * **Initial value**: `auto`
 *
 * ---
 *
 * _Supported in Multi-column Layout_
 *
 * | Chrome | Firefox | Safari |  Edge  |   IE   |
 * | :----: | :-----: | :----: | :----: | :----: |
 * | **50** | **65**  |   No   | **12** | **10** |
 *
 * ---
 *
 * _Supported in Paged Media_
 *
 * | Chrome | Firefox | Safari |  Edge  |   IE   |
 * | :----: | :-----: | :----: | :----: | :----: |
 * | **50** | **65**  | **10** | **12** | **10** |
 *
 * ---
 *
 * _Supported in CSS Regions_
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |   No   |   No    |   No   |  No  | No  |
 *
 * ---
 * @property {"auto" | "avoid" | "avoid-page" | "avoid-column" | "avoid-region"} breakInside
 *
 * The **`break-inside`** CSS property defines how page, column, or region breaks should behave inside a generated box. If there is no generated box, the property is ignored.
 *
 * **Syntax**: `auto | avoid | avoid-page | avoid-column | avoid-region`
 *
 * **Initial value**: `auto`
 *
 * ---
 *
 * _Supported in Multi-column Layout_
 *
 * | Chrome | Firefox | Safari |  Edge  |   IE   |
 * | :----: | :-----: | :----: | :----: | :----: |
 * | **50** | **65**  | **10** | **12** | **10** |
 *
 * ---
 *
 * _Supported in Paged Media_
 *
 * | Chrome | Firefox | Safari |  Edge  |   IE   |
 * | :----: | :-----: | :----: | :----: | :----: |
 * | **50** | **65**  | **10** | **12** | **10** |
 *
 * ---
 *
 * _Supported in CSS Regions_
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |   No   |   No    |   No   |  No  | No  |
 *
 * ---
 *
 * @property {"top" | "bottom" | "block-start" | "block-end" | "inline-start" | "inline-end"} captionSide
 *
 * The **`caption-side`** CSS property puts the content of a table's `<caption>` on the specified side. The values are relative to the `writing-mode` of the table.
 *
 * **Syntax**: `top | bottom | block-start | block-end | inline-start | inline-end`
 *
 * **Initial value**: `top`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **8** |
 *
 * ---
 *
 * @property {String} caretColor
 *
 * The **`caret-color`** CSS property sets the color of the insertion caret, the visible marker where the next character typed will be inserted. The caret appears in elements such as `<input>` or those with the `contenteditable` attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.
 *
 * **Syntax**: `auto | <color>`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **57** | **53**  | **11.1** | **79** | No  |
 *
 * ---
 *
 * @property {"none" | "left" | "right" | "both" | "inline-start" | "inline-end"} clear
 *
 * The **`clear`** CSS property sets whether an element must be moved below (cleared) floating elements that precede it. The `clear` property applies to floating and non-floating elements.
 *
 * **Syntax**: `none | left | right | both | inline-start | inline-end`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} clipPath
 *
 * The `**clip-path**` CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.
 *
 * **Syntax**: `<clip-source> | [ <basic-shape> || <geometry-box> ] | none`
 *
 * **Initial value**: `none`
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
 * | :------: | :-----: | :-------: | :----: | :----: |
 * |  **55**  | **3.5** |  **9.1**  | **12** | **10** |
 * | 23 _-x-_ |         | 6.1 _-x-_ |        |        |
 *
 * ---
 *
 * @property {String} clip
 *
 * The **`clip`** CSS property defines what portion of an element is visible. The `clip` property applies only to absolutely positioned elements, that is elements with `position:absolute` or `position:fixed`.
 *
 * **Syntax**: `<shape> | auto`
 *
 * **Initial value**: `auto`
 *
 * ---
 *
 * @property {String} color
 *
 * The **`color`** CSS property sets the foreground color value of an element's text and text decorations, and sets the `currentcolor` value. `currentcolor` may be used as an indirect value on _other_ properties and is the default for other color properties, such as `border-color`.
 *
 * **Syntax**: `<color>`
 *
 * **Initial value**: Varies from one browser to another
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **3** |
 *
 * ---
 *
 * @property {String} colorAdjust
 *
 * The **`color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.
 *
 * **Syntax**: `economy | exact`
 *
 * **Initial value**: `economy`
 *
 * |                Chrome                 | Firefox |                Safari                |                 Edge                  | IE  |
 * | :-----------------------------------: | :-----: | :----------------------------------: | :-----------------------------------: | :-: |
 * | **49** _(-webkit-print-color-adjust)_ | **48**  | **6** _(-webkit-print-color-adjust)_ | **79** _(-webkit-print-color-adjust)_ | No  |
 *
 * ---
 *
 * @property {String} columnCount
 *
 * The **`column-count`** CSS property breaks an element's content into the specified number of columns.
 *
 * **Syntax**: `<integer> | auto`
 *
 * **Initial value**: `auto`
 *
 * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
 * | :-----: | :-----: | :-----: | :----: | :----: |
 * | **50**  | **52**  |  **9**  | **12** | **10** |
 * | 1 _-x-_ |         | 3 _-x-_ |        |        |
 *
 * ---
 *
 * @property {String} columnFill
 *
 * The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.
 *
 * **Syntax**: `auto | balance | balance-all`
 *
 * **Initial value**: `balance`
 *
 * | Chrome | Firefox | Safari  |  Edge  |   IE   |
 * | :----: | :-----: | :-----: | :----: | :----: |
 * | **50** | **52**  |  **9**  | **12** | **10** |
 * |        |         | 8 _-x-_ |        |        |
 *
 * ---
 *
 * @property {String} columnGap
 *
 * The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.
 *
 * **Syntax**: `normal | <length-percentage>`
 *
 * **Initial value**: `normal`
 *
 * ---
 *
 * _Supported in Flex Layout_
 *
 * | Chrome | Firefox |   Safari    | Edge | IE  |
 * | :----: | :-----: | :---------: | :--: | :-: |
 * |   No   | **63**  | **3** _-x-_ |  No  | No  |
 *
 * ---
 *
 * _Supported in Grid Layout_
 *
 * |     Chrome      |     Firefox     |        Safari         |  Edge  | IE  |
 * | :-------------: | :-------------: | :-------------------: | :----: | :-: |
 * |     **66**      |     **61**      | **10.1** _(grid-gap)_ | **16** | No  |
 * | 57 _(grid-gap)_ | 52 _(grid-gap)_ |                       |        |     |
 *
 * ---
 *
 * _Supported in Multi-column Layout_
 *
 * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
 * | :-----: | :-----: | :-----: | :----: | :----: |
 * | **50**  | **52**  | **10**  | **12** | **10** |
 * | 1 _-x-_ |         | 3 _-x-_ |        |        |
 *
 * ---
 *
 * @property {String} columnRule
 *
 * The **`column-rule`** CSS property sets the width, style, and color of the rule (line) drawn between columns in a multi-column layout.
 *
 * **Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`
 *
 * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
 * | :-----: | :-----: | :-----: | :----: | :----: |
 * | **50**  | **52**  |  **9**  | **12** | **10** |
 * | 1 _-x-_ |         | 3 _-x-_ |        |        |
 *
 * ---
 *
 * @property {String} columnRuleColor
 *
 * The **`column-rule-color`** CSS property sets the color of the rule (line) drawn between columns in a multi-column layout.
 *
 * **Syntax**: `<color>`
 *
 * **Initial value**: `currentcolor`
 *
 * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
 * | :-----: | :-----: | :-----: | :----: | :----: |
 * | **50**  | **52**  |  **9**  | **12** | **10** |
 * | 1 _-x-_ |         | 3 _-x-_ |        |        |
 *
 * ---
 *
 * @property {String} columnRuleStyle
 *
 * The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.
 *
 * **Syntax**: `<'border-style'>`
 *
 * **Initial value**: `none`
 *
 * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
 * | :-----: | :-----: | :-----: | :----: | :----: |
 * | **50**  | **52**  |  **9**  | **12** | **10** |
 * | 1 _-x-_ |         | 3 _-x-_ |        |        |
 *
 * ---
 *
 * @property {String} columnRuleWidth
 *
 * The **`column-rule-width`** CSS property sets the width of the rule (line) drawn between columns in a multi-column layout.
 *
 * **Syntax**: `<'border-width'>`
 *
 * **Initial value**: `medium`
 *
 * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
 * | :-----: | :-----: | :-----: | :----: | :----: |
 * | **50**  | **52**  |  **9**  | **12** | **10** |
 * | 1 _-x-_ |         | 3 _-x-_ |        |        |
 *
 * ---
 *
 * @property {String} columns
 *
 * The **`columns`** CSS property sets the column width and column count of an element.
 *
 * **Syntax**: `<'column-width'> || <'column-count'>`
 *
 * | Chrome | Firefox | Safari  |  Edge  |   IE   |
 * | :----: | :-----: | :-----: | :----: | :----: |
 * | **50** | **52**  |  **9**  | **12** | **10** |
 * |        |         | 3 _-x-_ |        |        |
 *
 * ---
 *
 * @property {String} columnSpan
 *
 * The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.
 *
 * **Syntax**: `none | all`
 *
 * **Initial value**: `none`
 *
 * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
 * | :-----: | :-----: | :-------: | :----: | :----: |
 * | **50**  | **71**  |   **9**   | **12** | **10** |
 * | 6 _-x-_ |         | 5.1 _-x-_ |        |        |
 *
 * ---
 *
 * @property {String} columnWidth
 *
 * The **`column-width`** CSS property specifies the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.
 *
 * **Syntax**: `<length> | auto`
 *
 * **Initial value**: `auto`
 *
 * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
 * | :-----: | :-----: | :-----: | :----: | :----: |
 * | **50**  | **50**  |  **9**  | **12** | **10** |
 * | 1 _-x-_ |         | 3 _-x-_ |        |        |
 *
 * ---
 *
 * @property {String} contain
 *
 * The **`contain`** CSS property allows an author to indicate that an element and its contents are, as much as possible, _independent_ of the rest of the document tree. This allows the browser to recalculate layout, style, paint, size, or any combination of them for a limited area of the DOM and not the entire page.
 *
 * **Syntax**: `none | strict | content | [ size || layout || style || paint ]`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **52** | **69**  |   No   | **79** | No  |
 *
 * ---
 *
 * @property {String} content
 *
 * The **`content`** CSS property replaces an element with a generated value. Objects inserted using the `content` property are _anonymous replaced elements._
 *
 * **Syntax**: `normal | none | [ <content-replacement> | <content-list> ] [/ <string> ]?`
 *
 * **Initial value**: `normal`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **8** |
 *
 * ---
 *
 * @property {String} counterIncrement
 *
 * The **`counter-increment`** CSS property increases or decreases the value of a CSS counter by a given value.
 *
 * **Syntax**: `[ <custom-ident> <integer>? ]+ | none`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **2**  |  **1**  | **3**  | **12** | **8** |
 *
 * ---
 *
 * @property {String} counterReset
 *
 * The **`counter-reset`** CSS property resets a CSS counter to a given value.
 *
 * **Syntax**: `[ <custom-ident> <integer>? ]+ | none`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **2**  |  **1**  | **3**  | **12** | **8** |
 *
 * ---
 *
 * @property {String} counterSet
 *
 * The **`counter-set`** CSS property sets a CSS counter to a given value. It manipulates the value of existing counters, and will only create new counters if there isn't already a counter of the given name on the element.
 *
 * **Syntax**: `[ <custom-ident> <integer>? ]+ | none`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |   No   | **68**  |   No   |  No  | No  |
 *
 * ---
 *
 * @property {"auto" | "default" | "none" | "context-menu" | "help" | "pointer" | "progress" | "wait" | "cell" | "crosshair" | "text" | "vertical-text" | "alias" | "copy" | "move" | "no-drop" | "not-allowed" | "e-resize" | "n-resize" | "ne-resize" | "nw-resize" | "s-resize" | "se-resize" | "sw-resize" | "w-resize" | "ew-resize" | "ns-resize" | "nesw-resize" | "nwse-resize" | "col-resize" | "row-resize" | "all-scroll" | "zoom-in" | "zoom-out" | "grab" | "grabbing"} cursor
 *
 * The **`cursor`** CSS property sets mouse cursor to display when the mouse pointer is over an element.
 *
 * **Syntax**: `[ [ <url> [ <x> <y> ]? , ]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing ] ]`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari  |  Edge  |  IE   |
 * | :----: | :-----: | :-----: | :----: | :---: |
 * | **1**  |  **1**  | **1.2** | **12** | **4** |
 *
 * ---
 *
 * @property {"ltr" | "rtl"} direction
 *
 * The **`direction`** CSS property sets the direction of text, table columns, and horizontal overflow. Use `rtl` for languages written from right to left (like Hebrew or Arabic), and `ltr` for those written from left to right (like English and most other languages).
 *
 * **Syntax**: `ltr | rtl`
 *
 * **Initial value**: `ltr`
 *
 * | Chrome | Firefox | Safari |  Edge  |   IE    |
 * | :----: | :-----: | :----: | :----: | :-----: |
 * | **2**  |  **1**  | **1**  | **12** | **5.5** |
 *
 * ---
 *
 * @property {"inline" | "inline-block" | "inline-flex" | "inline-flexbox" | "inline-table" | "list-item" | "none" | "ruby" | "ruby-base" | "ruby-base-container" | "ruby-text" | "ruby-text-container" | "run-in" | "table" | "table-caption" | "table-cell" | "table-column" | "table-column-group" | "table-footer-group" | "table-header-group" | "table-row" | "table-row-group" | "inherit" | "initial" | "unset"} display
 *
 * The **`display`** CSS property defines the _display type_ of an element, which consists of the two basic qualities of how an element generates boxes — the **outer display type** defining how the box participates in flow layout, and the **inner display type** defining how the children of the box are laid out.
 *
 * **Syntax**: `[ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy>`
 *
 * **Initial value**: `inline`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} emptyCells
 *
 * The **`empty-cells`** CSS property sets whether borders and backgrounds appear around `<table>` cells that have no visible content.
 *
 * **Syntax**: `show | hide`
 *
 * **Initial value**: `show`
 *
 * | Chrome | Firefox | Safari  |  Edge  |  IE   |
 * | :----: | :-----: | :-----: | :----: | :---: |
 * | **1**  |  **1**  | **1.2** | **12** | **8** |
 *
 * ---
 *
 * @property {String} fill - Sets or returns the color of the svg element
 * @property {String} filter
 *
 * The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.
 *
 * **Syntax**: `none | <filter-function-list>`
 *
 * **Initial value**: `none`
 *
 * |  Chrome  | Firefox | Safari  |  Edge  | IE  |
 * | :------: | :-----: | :-----: | :----: | :-: |
 * |  **53**  | **35**  | **9.1** | **12** | No  |
 * | 18 _-x-_ |         | 6 _-x-_ |        |     |
 *
 * ---
 *
 * @property {String} flex
 *
 * The **`flex`** CSS property sets how a flex item will grow or shrink to fit the space available in its flex container. It is a shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.
 *
 * **Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |    IE    |
 * | :------: | :-----: | :-------: | :----: | :------: |
 * |  **29**  | **20**  |   **9**   | **12** |  **11**  |
 * | 21 _-x-_ |         | 6.1 _-x-_ |        | 10 _-x-_ |
 *
 * ---
 *
 * @property {String} flexBasis
 *
 * The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.
 *
 * **Syntax**: `content | <'width'>`
 *
 * **Initial value**: `auto`
 *
 * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
 * | :------: | :-----: | :-----: | :----: | :----: |
 * |  **29**  | **22**  |  **9**  | **12** | **11** |
 * | 22 _-x-_ |         | 7 _-x-_ |        |        |
 *
 * ---
 *
 * @property {String} flexDirection
 *
 * The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
 *
 * **Syntax**: `row | row-reverse | column | column-reverse`
 *
 * **Initial value**: `row`
 *
 * |  Chrome  | Firefox | Safari  |  Edge  |    IE    |
 * | :------: | :-----: | :-----: | :----: | :------: |
 * |  **29**  | **20**  |  **9**  | **12** |  **11**  |
 * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
 *
 * ---
 *
 * @property {String} flexFlow
 *
 * The **`flex-flow`** CSS property is a shorthand property for `flex-direction` and `flex-wrap` properties.
 *
 * **Syntax**: `<'flex-direction'> || <'flex-wrap'>`
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
 * | :------: | :-----: | :-------: | :----: | :----: |
 * |  **29**  | **28**  |   **9**   | **12** | **11** |
 * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
 *
 * ---
 *
 * @property {String} flexGrow
 *
 * The **`flex-grow`** CSS property sets how much of the available space in the flex container should be assigned to that item (the flex grow factor). If all sibling items have the same flex grow factor, then all items will receive the same share of available space, otherwise it is distributed according to the ratio defined by the different flex grow factors.
 *
 * **Syntax**: `<number>`
 *
 * **Initial value**: `0`
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |            IE            |
 * | :------: | :-----: | :-------: | :----: | :----------------------: |
 * |  **29**  | **20**  |   **9**   | **12** |          **11**          |
 * | 22 _-x-_ |         | 6.1 _-x-_ |        | 10 _(-ms-flex-positive)_ |
 *
 * ---
 *
 * @property {String} flexShrink
 *
 * The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.
 *
 * **Syntax**: `<number>`
 *
 * **Initial value**: `1`
 *
 * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
 * | :------: | :-----: | :-----: | :----: | :----: |
 * |  **29**  | **20**  |  **9**  | **12** | **10** |
 * | 22 _-x-_ |         | 8 _-x-_ |        |        |
 *
 * ---
 *
 * @property {String} flexWrap
 *
 * The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
 *
 * **Syntax**: `nowrap | wrap | wrap-reverse`
 *
 * **Initial value**: `nowrap`
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
 * | :------: | :-----: | :-------: | :----: | :----: |
 * |  **29**  | **28**  |   **9**   | **12** | **11** |
 * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
 *
 * ---
 *
 * @property {String} float
 *
 * The **`float`** CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).
 *
 * **Syntax**: `left | right | none | inline-start | inline-end`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} font
 *
 * The **`font`** CSS property is a shorthand for `font-style`, `font-variant`, `font-weight`, `font-size`, `line-height`, and `font-family`. Alternatively, it sets an element's font to a system font.
 *
 * **Syntax**: `[ [ <'font-style'> || <font-variant-css21> || <'font-weight'> || <'font-stretch'> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ] | caption | icon | menu | message-box | small-caption | status-bar`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **3** |
 *
 * ---
 *
 * @property {String} fontFamily
 *
 * The **`font-family`** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.
 *
 * **Syntax**: `[ <family-name> | <generic-family> ]#`
 *
 * **Initial value**: depends on user agent
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **3** |
 *
 * ---
 *
 * @property {String} fontFeatureSettings
 *
 * The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.
 *
 * **Syntax**: `normal | <feature-tag-value>#`
 *
 * **Initial value**: `normal`
 *
 * |  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
 * | :------: | :------: | :-----: | :----: | :----: |
 * |  **48**  |  **34**  | **9.1** | **15** | **10** |
 * | 16 _-x-_ | 15 _-x-_ |         |        |        |
 *
 * ---
 *
 * @property {String} fontKerning
 *
 * The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.
 *
 * **Syntax**: `auto | normal | none`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari  |  Edge  | IE  |
 * | :----: | :-----: | :-----: | :----: | :-: |
 * | **33** | **32**  |  **9**  | **79** | No  |
 * |        |         | 6 _-x-_ |        |     |
 *
 * ---
 *
 * @property {String} fontLanguageOverride
 *
 * The **`font-language-override`** CSS property controls the use of language-specific glyphs in a typeface.
 *
 * **Syntax**: `normal | <string>`
 *
 * **Initial value**: `normal`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |   No   | **34**  |   No   |  No  | No  |
 * |        | 4 _-x-_ |        |      |     |
 *
 * ---
 *
 * @property {String} fontOpticalSizing
 *
 * The **`font-optical-sizing`** CSS property sets whether text rendering is optimized for viewing at different sizes. This only works for fonts that have an optical size variation axis.
 *
 * **Syntax**: `auto | none`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **79** | **62**  | **11** | **17** | No  |
 *
 * ---
 *
 * @property {String} fontSize
 *
 * The **`font-size`** CSS property sets the size of the font. This property is also used to compute the size of `em`, `ex`, and other relative `<length>` units.
 *
 * **Syntax**: `<absolute-size> | <relative-size> | <length-percentage>`
 *
 * **Initial value**: `medium`
 *
 * | Chrome | Firefox | Safari |  Edge  |   IE    |
 * | :----: | :-----: | :----: | :----: | :-----: |
 * | **1**  |  **1**  | **1**  | **12** | **5.5** |
 *
 * ---
 *
 * @property {String} fontStyle
 *
 * The **`font-style`** CSS property sets whether a font should be styled with a normal, italic, or oblique face from its `font-family`.
 *
 * **Syntax**: `normal | italic | oblique <angle>?`
 *
 * **Initial value**: `normal`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} fontSynthesis
 *
 * The **`font-synthesis`** CSS property controls which missing typefaces, bold or italic, may be synthesized by the browser.
 *
 * **Syntax**: `none | [ weight || style ]`
 *
 * **Initial value**: `weight style`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |   No   | **34**  | **9**  |  No  | No  |
 *
 * ---
 *
 * @property {String} fontVariant
 *
 * The **font-variant** CSS property is a shorthand for the longhand properties `font-variant-caps`, `font-variant-numeric`, `font-variant-alternates`, `font-variant-ligatures`, and `font-variant-east-asian`. You can also set the CSS Level 2 (Revision 1) values of `font-variant`, (that is, `normal` or `small-caps`), by using the `font` shorthand.
 *
 * **Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> || stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero || <east-asian-variant-values> || <east-asian-width-values> || ruby ]`
 *
 * **Initial value**: `normal`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} fontVariantCaps
 *
 * The **`font-variant-caps`** CSS property controls the use of alternate glyphs for capital letters.
 *
 * **Syntax**: `normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps`
 *
 * **Initial value**: `normal`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **52** | **34**  |   No   | **79** | No  |
 *
 * ---
 * @property {String} fontVariantEastAsian
 *
 * The **`font-variant-east-asian`** CSS property controls the use of alternate glyphs for East Asian scripts, like Japanese and Chinese.
 *
 * **Syntax**: `normal | [ <east-asian-variant-values> || <east-asian-width-values> || ruby ]`
 *
 * **Initial value**: `normal`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **63** | **34**  |   No   | **79** | No  |
 *
 * ---
 *
 *
 * @property {String} fontVariantLigatures
 *
 * The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.
 *
 * **Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]`
 *
 * **Initial value**: `normal`
 *
 * |  Chrome  | Firefox | Safari  |  Edge  | IE  |
 * | :------: | :-----: | :-----: | :----: | :-: |
 * |  **34**  | **34**  | **9.1** | **79** | No  |
 * | 31 _-x-_ |         | 7 _-x-_ |        |     |
 *
 * ---
 *
 * @property {String} fontVariantNumeric
 *
 * The **`font-variant-numeric`** CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.
 *
 * **Syntax**: `normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]`
 *
 * **Initial value**: `normal`
 *
 * | Chrome | Firefox | Safari  |  Edge  | IE  |
 * | :----: | :-----: | :-----: | :----: | :-: |
 * | **52** | **34**  | **9.1** | **79** | No  |
 *
 * ---
 *
 * @property {String} fontVariantPosition
 *
 * The **`font-variant-position`** CSS property controls the use of alternate, smaller glyphs that are positioned as superscript or subscript.
 *
 * **Syntax**: `normal | sub | super`
 *
 * **Initial value**: `normal`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |   No   | **34**  |   No   |  No  | No  |
 *
 * ---
 *
 * @property {String} fontVariantSettings
 *
 * The **`font-variation-settings`** CSS property provides low-level control over variable font characteristics, by specifying the four letter axis names of the characteristics you want to vary, along with their values.
 *
 * **Syntax**: `normal | [ <string> <number> ]#`
 *
 * **Initial value**: `normal`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **62** | **62**  | **11** | **17** | No  |
 *
 * ---
 *
 * @property {"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "bold" | "bolder" | "lighter" | "normal" | "inherit" | "initial" | "unset"} fontWeight
 *
 * The **`font-weight`** CSS property specifies the weight (or boldness) of the font. The font weights available to you will depend on the `font-family` you are using. Some fonts are only available in `normal` and `bold`.
 *
 * **Syntax**: `<font-weight-absolute> | bolder | lighter`
 *
 * **Initial value**: `normal`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **2**  |  **1**  | **1**  | **12** | **3** |
 *
 * ---
 *
 * @property {String} fontSizeAdjust
 *
 * The **`font-size-adjust`** CSS property sets how the font size should be chosen based on the height of lowercase rather than capital letters.
 *
 * **Syntax**: `none | <number>`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |  n/a   |  **1**  |   No   | n/a  | No  |
 *
 * ---
 *
 * @property {String} fontStretch
 *
 * The **`font-stretch`** CSS property selects a normal, condensed, or expanded face from a font.
 *
 * **Syntax**: `<font-stretch-absolute>`
 *
 * **Initial value**: `normal`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **60** |  **9**  | **11** | **12** | **9** |
 *
 * ---
 *
 * @property {String} gridAutoColumns
 *
 * The **`grid-auto-columns`** CSS property specifies the size of an implicitly-created grid column track.
 *
 * **Syntax**: `<track-size>+`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox |  Safari  |          Edge           |             IE              |
 * | :----: | :-----: | :------: | :---------------------: | :-------------------------: |
 * | **57** | **70**  | **10.1** |         **16**          | **10** _(-ms-grid-columns)_ |
 * |        |         |          | 12 _(-ms-grid-columns)_ |                             |
 *
 * ---
 *
 * @property {String} gridAutoFlow
 *
 * The **`grid-auto-flow`** CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.
 *
 * **Syntax**: `[ row | column ] || dense`
 *
 * **Initial value**: `row`
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **57** | **52**  | **10.1** | **16** | No  |
 *
 * ---
 *
 * @property {String} gridAutoRows
 *
 * The **`grid-auto-rows`** CSS property specifies the size of an implicitly-created grid row track.
 *
 * **Syntax**: `<track-size>+`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox |  Safari  |         Edge         |            IE            |
 * | :----: | :-----: | :------: | :------------------: | :----------------------: |
 * | **57** | **70**  | **10.1** |        **16**        | **10** _(-ms-grid-rows)_ |
 * |        |         |          | 12 _(-ms-grid-rows)_ |                          |
 *
 * ---
 *
 * @property {String} gridColumnEnd
 *
 * The **`grid-column-end`** CSS property specifies a grid item’s end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.
 *
 * **Syntax**: `<grid-line>`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **57** | **52**  | **10.1** | **16** | No  |
 *
 * ---
 *
 * @property {String} gridColumnStart
 *
 * The **`grid-column-start`** CSS property specifies a grid item’s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.
 *
 * **Syntax**: `<grid-line>`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **57** | **52**  | **10.1** | **16** | No  |
 *
 * ---
 *
 * @property {String} gridRowEnd
 *
 * The **`grid-row-end`** CSS property specifies a grid item’s end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.
 *
 * **Syntax**: `<grid-line>`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **57** | **52**  | **10.1** | **16** | No  |
 *
 * ---
 *
 * @property {String} gridRowStart
 *
 * The **`grid-row-start`** CSS property specifies a grid item’s start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.
 *
 * **Syntax**: `<grid-line>`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **57** | **52**  | **10.1** | **16** | No  |
 *
 * ---
 *
 * @property {String} gridTemplateAreas
 *
 * The **`grid-template-areas`** CSS property specifies named grid areas.
 *
 * **Syntax**: `none | <string>+`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **57** | **52**  | **10.1** | **16** | No  |
 *
 * ---
 *
 * @property {String} gridTemplateColumns
 *
 * The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.
 *
 * **Syntax**: `none | <track-list> | <auto-track-list> | subgrid <line-name-list>?`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **57** | **52**  | **10.1** | **16** | No  |
 *
 * ---
 *
 * @property {String} gridTemplateRows
 *
 * The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.
 *
 * **Syntax**: `none | <track-list> | <auto-track-list> | subgrid <line-name-list>?`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **57** | **52**  | **10.1** | **16** | No  |
 *
 * ---
 *
 * @property {String} hangingPunctuation
 *
 * The **`hanging-punctuation`** CSS property specifies whether a punctuation mark should hang at the start or end of a line of text. Hanging punctuation may be placed outside the line box.
 *
 * **Syntax**: `none | [ first || [ force-end | allow-end ] || last ]`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |   No   |   No    | **10** |  No  | No  |
 *
 * ---
 *
 * @property {String} height
 *
 * The **`height`** CSS property specifies the height of an element. By default, the property defines the height of the content area. If `box-sizing` is set to `border-box`, however, it instead determines the height of the border area.
 *
 * **Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content(<length-percentage>)`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} hyphens
 *
 * The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. You can prevent hyphenation entirely, use hyphenation in manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.
 *
 * **Syntax**: `none | manual | auto`
 *
 * **Initial value**: `manual`
 *
 * |  Chrome  | Firefox |    Safari     |     Edge     |      IE      |
 * | :------: | :-----: | :-----------: | :----------: | :----------: |
 * |  **55**  | **43**  | **5.1** _-x-_ | **12** _-x-_ | **10** _-x-_ |
 * | 13 _-x-_ | 6 _-x-_ |               |              |              |
 *
 * ---
 *
 * @property {String} icon - Provides the author the ability to style an element with an iconic equivalent
 * @property {String} imageOrientation
 *
 * The **`image-orientation`** CSS property specifies a layout-independent correction to the orientation of an image. It should _not_ be used for any other orientation adjustments; instead, the `transform` property should be used with the `rotate` `<transform-function>`.
 *
 * **Syntax**: `from-image | <angle> | [ <angle>? flip ]`
 *
 * **Initial value**: `0deg`
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **81** | **26**  | **13.1** | **81** | No  |
 *
 * ---
 *
 * @property {String} imageRendering
 *
 * The **`image-rendering`** CSS property sets an image scaling algorithm. The property applies to an element itself, to any images set in its other properties, and to its descendants.
 *
 * **Syntax**: `auto | crisp-edges | pixelated`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **13** | **3.6** | **6**  | **79** | No  |
 *
 * ---
 *
 * @property {String} imageResolution
 *
 * **Syntax**: `[ from-image || <resolution> ] && snap?`
 *
 * **Initial value**: `1dppx`
 *
 * ---
 *
 * @property {String} initialLetter
 *
 * The `initial-letter` CSS property sets styling for dropped, raised, and sunken initial letters.
 *
 * **Syntax**: `normal | [ <number> <integer>? ]`
 *
 * **Initial value**: `normal`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |   No   |   No    | **9**  |  No  | No  |
 *
 * ---
 *
 * @property {String} initialSize
 *
 * The **`inline-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
 *
 * **Syntax**: `<'width'>`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **57** | **41**  | **12.1** | **79** | No  |
 *
 * ---
 *
 * @property {String} inset
 *
 * The **`inset`** CSS property defines the logical block and inline start and end offsets of an element, which map to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<'top'>{1,4}`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |   No   | **66**  |   No   |  No  | No  |
 *
 * ---
 *
 * @property {String} insetBlock
 *
 * The **`inset-block`** CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<'top'>{1,2}`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |  n/a   | **63**  |   No   | n/a  | No  |
 *
 * ---
 *
 * @property {String} insetBlockEnd
 *
 * The **`inset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<'top'>`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |  n/a   | **63**  |   No   | n/a  | No  |
 *
 * ---
 *
 * @property {String} insetBlockStart
 *
 * The **`inset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<'top'>`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |  n/a   | **63**  |   No   | n/a  | No  |
 *
 * ---
 *
 * @property {String} insetInline
 *
 * The **`inset-inline`** CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<'top'>{1,2}`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |  n/a   | **63**  |   No   | n/a  | No  |
 *
 * ---
 *
 * @property {String} insetInlineEnd
 *
 * The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<'top'>`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |  n/a   | **63**  |   No   | n/a  | No  |
 *
 * ---
 *
 * @property {String} insetInlineStart
 *
 * The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<'top'>`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |  n/a   | **63**  |   No   | n/a  | No  |
 *
 * ---
 *
 * @property {String} isolation
 *
 * The **`isolation`** CSS property determines whether an element must create a new stacking context.
 *
 * **Syntax**: `auto | isolate`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **41** | **36**  | **8**  | **79** | No  |
 *
 * ---
 *
 * @property {"baseline" | "center" | "end" | "first baseline" | "flex-end" | "flex-start" | "last baseline" | "left" | "right" | "safe" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" | "unsafe" | "inherit" | "initial" | "unset"} justifyContent
 *
 * The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
 *
 * **Syntax**: `normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]`
 *
 * **Initial value**: `normal`
 *
 * ---
 *
 * _Supported in Flex Layout_
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
 * | :------: | :-----: | :-------: | :----: | :----: |
 * |  **52**  | **20**  |   **9**   | **12** | **11** |
 * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
 *
 * ---
 *
 * _Supported in Grid Layout_
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **57** | **52**  | **10.1** | **16** | No  |
 *
 * ---
 *
 * @property {String} justifyItems
 *
 * The CSS **`justify-items`** property defines the default `justify-self` for all items of the box, giving them all a default way of justifying each box along the appropriate axis.
 *
 * **Syntax**: `normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ] | legacy | legacy && [ left | right | center ]`
 *
 * **Initial value**: `legacy`
 *
 * ---
 *
 * _Supported in Flex Layout_
 *
 * | Chrome | Firefox | Safari |  Edge  |   IE   |
 * | :----: | :-----: | :----: | :----: | :----: |
 * | **52** | **20**  | **9**  | **12** | **11** |
 *
 * ---
 *
 * _Supported in Grid Layout_
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **57** | **45**  | **10.1** | **16** | No  |
 *
 * ---
 *
 * @property {String} justifySelf
 *
 * The CSS **`justify-self`** property set the way a box is justified inside its alignment container along the appropriate axis.
 *
 * **Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ]`
 *
 * **Initial value**: `auto`
 *
 * ---
 *
 * _Supported in Flex Layout_
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **57** | **45**  | **10.1** | **16** | No  |
 *
 * ---
 *
 * _Supported in Grid Layout_
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **57** | **45**  | **10.1** | **16** | No  |
 *
 * ---
 *
 * @property {String} left
 *
 * The **`left`** CSS property participates in specifying the horizontal position of a _positioned element_. It has no effect on non-positioned elements.
 *
 * **Syntax**: `<length> | <percentage> | auto`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  |   IE    |
 * | :----: | :-----: | :----: | :----: | :-----: |
 * | **1**  |  **1**  | **1**  | **12** | **5.5** |
 *
 * ---
 *
 * @property {String} letterSpacing
 *
 * The **`letter-spacing`** CSS property sets the spacing behavior between text characters.
 *
 * **Syntax**: `normal | <length>`
 *
 * **Initial value**: `normal`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} lineBreak
 *
 * The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.
 *
 * **Syntax**: `auto | loose | normal | strict | anywhere`
 *
 * **Initial value**: `auto`
 *
 * | Chrome  | Firefox |   Safari    |  Edge  |   IE    |
 * | :-----: | :-----: | :---------: | :----: | :-----: |
 * | **58**  | **69**  | **3** _-x-_ | **14** | **5.5** |
 * | 1 _-x-_ |         |             |        |         |
 *
 * ---
 *
 * @property {String} lineHeight
 *
 * The **`line-height`** CSS property sets the amount of space used for lines, such as in text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.
 *
 * **Syntax**: `normal | <number> | <length> | <percentage>`
 *
 * **Initial value**: `normal`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} lineHeightStep
 *
 * The **`line-height-step`** CSS property sets the step unit for line box heights. When the property is set, line box heights are rounded up to the closest multiple of the unit.
 *
 * **Syntax**: `<length>`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |  n/a   |   No    |   No   | n/a  | No  |
 *
 * ---
 *
 * @property {String} listStyle
 *
 * The **`list-style`** CSS property is a shorthand to set list style properties `list-style-type`, `list-style-image`, and `list-style-position`.
 *
 * **Syntax**: `<'list-style-type'> || <'list-style-position'> || <'list-style-image'>`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} listStyleImage
 *
 * The **`list-style-image`** CSS property sets an image to be used as the list item marker.
 *
 * **Syntax**: `<url> | none`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} listStylePosition
 *
 * The **`list-style-position`** CSS property sets the position of the `::marker` relative to a list item.
 *
 * **Syntax**: `inside | outside`
 *
 * **Initial value**: `outside`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 *
 * @property {String} listStyleType
 *
 * The **`list-style-type`** CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.
 *
 * **Syntax**: `<counter-style> | <string> | none`
 *
 * **Initial value**: `disc`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} marginBlock
 *
 * The **`margin-block`** CSS property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
 *
 * **Syntax**: `<'margin-left'>{1,2}`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |  n/a   | **66**  |   No   | n/a  | No  |
 *
 * ---
 *
 * @property {String} marginBlockEnd
 *
 * The **`margin-block-end`** CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
 *
 * **Syntax**: `<'margin-left'>`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **69** | **41**  | **12.1** | **79** | No  |
 *
 * ---
 *
 * @property {String} marginBlockStart
 *
 * The **`margin-block-start`** CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
 *
 * **Syntax**: `<'margin-left'>`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **69** | **41**  | **12.1** | **79** | No  |
 *
 * ---
 *
 * @property {String} margin
 *
 * The **`margin`** CSS property sets the margin area on all four sides of an element. It is a shorthand for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.
 *
 * **Syntax**: `[ <length> | <percentage> | auto ]{1,4}`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **3** |
 *
 * ---
 *
 * @property {String} marginBottom
 *
 * The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
 *
 * **Syntax**: `<length> | <percentage> | auto`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **3** |
 *
 * ---
 *
 * @property {String} marginInline
 *
 * The **`margin-inline`** CSS property defines the logical inline start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
 *
 * **Syntax**: `<'margin-left'>{1,2}`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |  n/a   | **66**  |   No   | n/a  | No  |
 *
 * ---
 *
 * @property {String} marginInlineEnd
 *
 * The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<'margin-left'>`
 *
 * **Initial value**: `0`
 *
 * |          Chrome          |        Firefox        |          Safari          |  Edge  | IE  |
 * | :----------------------: | :-------------------: | :----------------------: | :----: | :-: |
 * |          **69**          |        **41**         |         **12.1**         | **79** | No  |
 * | 2 _(-webkit-margin-end)_ | 3 _(-moz-margin-end)_ | 3 _(-webkit-margin-end)_ |        |     |
 *
 * ---
 *
 * @property {String} marginInlineStart
 *
 * The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<'margin-left'>`
 *
 * **Initial value**: `0`
 *
 * |           Chrome           |         Firefox         |           Safari           |  Edge  | IE  |
 * | :------------------------: | :---------------------: | :------------------------: | :----: | :-: |
 * |           **69**           |         **41**          |          **12.1**          | **79** | No  |
 * | 2 _(-webkit-margin-start)_ | 3 _(-moz-margin-start)_ | 3 _(-webkit-margin-start)_ |        |     |
 *
 * ---
 *
 * @property {String} marginLeft
 *
 * The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
 *
 * **Syntax**: `<length> | <percentage> | auto`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **3** |
 *
 * ---
 *
 * @property {String} marginRight
 *
 * The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
 *
 * **Syntax**: `<length> | <percentage> | auto`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **3** |
 *
 * ---
 *
 * @property {String} marginTop
 *
 * The **`margin-top`** CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
 *
 * **Syntax**: `<length> | <percentage> | auto`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **3** |
 *
 * ---
 *
 * @property {String} maskBorderMode
 *
 * The **`mask-border-mode`** CSS property specifies the blending mode used in a mask border.
 *
 * **Syntax**: `luminance | alpha`
 *
 * **Initial value**: `alpha`
 *
 * ---
 *
 * @property {String} maskBorderOutset
 *
 * The **`mask-border-outset`** CSS property specifies the distance by which an element's mask border is set out from its border box.
 *
 * **Syntax**: `[ <length> | <number> ]{1,4}`
 *
 * **Initial value**: `0`
 *
 * ---
 *
 * @property {String} maskBorderRepeat
 *
 * The **`mask-border-repeat`** CSS property sets how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border.
 *
 * **Syntax**: `[ stretch | repeat | round | space ]{1,2}`
 *
 * **Initial value**: `stretch`
 *
 * ---
 *
 * @property {String} maskBorderSlice
 *
 * The **`mask-border-slice`** CSS property divides the image set by `mask-border-source` into regions. These regions are used to form the components of an element's mask border.
 *
 * **Syntax**: `<number-percentage>{1,4} fill?`
 *
 * **Initial value**: `0`
 *
 * ---
 *
 * @property {String} maskBorderSource
 *
 * The **`mask-border-source`** CSS property sets the source image used to create an element's mask border.
 *
 * **Syntax**: `none | <image>`
 *
 * **Initial value**: `none`
 *
 * ---
 *
 * @property {String} maskBorderWidth
 *
 * The **`mask-border-width`** CSS property sets the width of an element's mask border.
 *
 * **Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`
 *
 * **Initial value**: `auto`
 *
 * ---
 *
 * @property {String} maskClip
 *
 * The **`mask-clip`** CSS property determines the area, which is affected by a mask. The painted content of an element must be restricted to this area.
 *
 * **Syntax**: `[ <geometry-box> | no-clip ]#`
 *
 * **Initial value**: `border-box`
 *
 * |   Chrome    | Firefox |   Safari    |     Edge     | IE  |
 * | :---------: | :-----: | :---------: | :----------: | :-: |
 * | **1** _-x-_ | **53**  | **4** _-x-_ | **79** _-x-_ | No  |
 *
 * ---
 *
 * @property {String} maskComposite
 *
 * The **`mask-composite`** CSS property represents a compositing operation used on the current mask layer with the mask layers below it.
 *
 * **Syntax**: `<compositing-operator>#`
 *
 * **Initial value**: `add`
 *
 * | Chrome | Firefox | Safari | Edge  | IE  |
 * | :----: | :-----: | :----: | :---: | :-: |
 * |   No   | **53**  |   No   | 18-79 | No  |
 *
 * ---
 *
 * @property {String} maskImage
 *
 * The **`mask-image`** CSS property sets the image that is used as mask layer for an element.
 *
 * **Syntax**: `<mask-reference>#`
 *
 * **Initial value**: `none`
 *
 * |   Chrome    | Firefox |   Safari    |  Edge  | IE  |
 * | :---------: | :-----: | :---------: | :----: | :-: |
 * | **1** _-x-_ | **53**  | **4** _-x-_ | **16** | No  |
 *
 * ---
 *
 * @property {String} maskMode
 *
 * The **`mask-mode`** CSS property sets whether the mask reference defined by `mask-image` is treated as a luminance or alpha mask.
 *
 * **Syntax**: `<masking-mode>#`
 *
 * **Initial value**: `match-source`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |   No   | **53**  |   No   |  No  | No  |
 *
 * ---
 *
 * @property {String} maskOrigin
 *
 * The **`mask-origin`** CSS property sets the origin of a mask.
 *
 * **Syntax**: `<geometry-box>#`
 *
 * **Initial value**: `border-box`
 *
 * |   Chrome    | Firefox |   Safari    |     Edge     | IE  |
 * | :---------: | :-----: | :---------: | :----------: | :-: |
 * | **1** _-x-_ | **53**  | **4** _-x-_ | **79** _-x-_ | No  |
 *
 * ---
 *
 * @property {String} maskPosition
 *
 * The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.
 *
 * **Syntax**: `<position>#`
 *
 * **Initial value**: `center`
 *
 * |   Chrome    | Firefox |    Safari     |  Edge  | IE  |
 * | :---------: | :-----: | :-----------: | :----: | :-: |
 * | **1** _-x-_ | **53**  | **3.2** _-x-_ | **18** | No  |
 *
 * ---
 *
 * @property {String} maskRepeat
 *
 * The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.
 *
 * **Syntax**: `<repeat-style>#`
 *
 * **Initial value**: `no-repeat`
 *
 * |   Chrome    | Firefox |    Safari     |  Edge  | IE  |
 * | :---------: | :-----: | :-----------: | :----: | :-: |
 * | **1** _-x-_ | **53**  | **3.2** _-x-_ | **18** | No  |
 *
 * ---
 *
 * @property {String} maskSize
 *
 * The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.
 *
 * **Syntax**: `<bg-size>#`
 *
 * **Initial value**: `auto`
 *
 * |   Chrome    | Firefox |   Safari    |  Edge  | IE  |
 * | :---------: | :-----: | :---------: | :----: | :-: |
 * | **4** _-x-_ | **53**  | **4** _-x-_ | **18** | No  |
 *
 * ---
 *
 * @property {String} maskType
 *
 * The **`mask-type`** CSS property sets whether an SVG `<mask>` element is used as a _luminance_ or an _alpha_ mask. It applies to the `<mask>` element itself.
 *
 * **Syntax**: `luminance | alpha`
 *
 * **Initial value**: `luminance`
 *
 * | Chrome | Firefox | Safari  |  Edge  | IE  |
 * | :----: | :-----: | :-----: | :----: | :-: |
 * | **24** | **35**  | **6.1** | **79** | No  |
 *
 * ---
 *
 * @property {String} maxBlockSize
 *
 * The `**max-block-size**` CSS property specifies the maximum size of an element in the direction opposite that of the writing direction as specified by `writing-mode`. That is, if the writing direction is horizontal, then `max-block-size` is equivalent to `max-height`; if the writing direction is vertical, `max-block-size` is the same as `max-width`.
 *
 * **Syntax**: `<'max-width'>`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **57** | **41**  | **12.1** | **79** | No  |
 *
 * ---
 *
 * @property {String} maxHeight
 *
 * The **`max-height`** CSS property sets the maximum height of an element. It prevents the used value of the `height` property from becoming larger than the value specified for `max-height`.
 *
 * **Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content(<length-percentage>)`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox | Safari  |  Edge  |  IE   |
 * | :----: | :-----: | :-----: | :----: | :---: |
 * | **18** |  **1**  | **1.3** | **12** | **7** |
 *
 * ---
 *
 *
 * @property {String} maxInlineSize
 *
 * The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block depending on its writing mode. It corresponds to the `max-width` or the `max-height` property depending on the value defined for `writing-mode`. If the writing mode is vertically oriented, the value of `max-inline-size` relates to the maximal height of the element, otherwise it relates to the maximal width of the element. It relates to `max-block-size`, which defines the other dimension of the element.
 *
 * **Syntax**: `<'max-width'>`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox |   Safari   |  Edge  | IE  |
 * | :----: | :-----: | :--------: | :----: | :-: |
 * | **57** | **41**  |  **12.1**  | **79** | No  |
 * |        |         | 10.1 _-x-_ |        |     |
 *
 * ---
 *
 * @property {String} maxLines
 *
 * **Syntax**: `none | <integer>`
 *
 * **Initial value**: `none`
 *
 * ---
 *
 * @property {String} maxWidth
 *
 * The **`max-width`** CSS property sets the maximum width of an element. It prevents the used value of the `width` property from becoming larger than the value specified by `max-width`.
 *
 * **Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content(<length-percentage>)`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **7** |
 *
 * ---
 *
 * @property {String} minBlockSize
 *
 * The **`min-block-size`** CSS property defines the minimum horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
 *
 * **Syntax**: `<'min-width'>`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **57** | **41**  | **12.1** | **79** | No  |
 *
 * ---
 *
 * @property {String} minHeight
 *
 * The **`min-height`** CSS property sets the minimum height of an element. It prevents the used value of the `height` property from becoming smaller than the value specified for `min-height`.
 *
 * **Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content(<length-percentage>)`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari  |  Edge  |  IE   |
 * | :----: | :-----: | :-----: | :----: | :---: |
 * | **1**  |  **3**  | **1.3** | **12** | **7** |
 *
 * ---
 *
 * @property {String} minInlineSize
 *
 * The **`min-inline-size`** CSS property defines the horizontal or vertical minimal size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
 *
 * **Syntax**: `<'min-width'>`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **57** | **41**  | **12.1** | **79** | No  |
 *
 * ---
 *
 * @property {String} minWidth
 *
 * The **`min-width`** CSS property sets the minimum width of an element. It prevents the used value of the `width` property from becoming smaller than the value specified for `min-width`.
 *
 * **Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content(<length-percentage>)`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **7** |
 *
 * ---
 *
 * @property {String} mixBlendMode
 *
 * The **`mix-blend-mode`** CSS property sets how an element's content should blend with the content of the element's parent and the element's background.
 *
 * **Syntax**: `<blend-mode>`
 *
 * **Initial value**: `normal`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **41** | **32**  | **8**  | **79** | No  |
 *
 * ---
 *
 * @property {String} offsetDistance
 *
 * The **`offset-distance`** CSS property specifies a position along an `offset-path`.
 *
 * **Syntax**: `<length-percentage>`
 *
 * **Initial value**: `0`
 *
 * |         Chrome         | Firefox | Safari |  Edge  | IE  |
 * | :--------------------: | :-----: | :----: | :----: | :-: |
 * |         **55**         | **72**  |   No   | **79** | No  |
 * | 46 _(motion-distance)_ |         |        |        |     |
 *
 * ---
 *
 * @property {String} offsetPath
 *
 * The **`offset-path`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.
 *
 * **Syntax**: `none | ray( [ <angle> && <size>? && contain? ] ) | <path()> | <url> | [ <basic-shape> || <geometry-box> ]`
 *
 * **Initial value**: `none`
 *
 * |       Chrome       | Firefox | Safari |  Edge  | IE  |
 * | :----------------: | :-----: | :----: | :----: | :-: |
 * |       **55**       | **72**  |   No   | **79** | No  |
 * | 46 _(motion-path)_ |         |        |        |     |
 *
 * ---
 *
 * @property {String} offsetRotate
 *
 * The **`offset-rotate`** CSS property defines the direction of the element while positioning along the offset path.
 *
 * **Syntax**: `[ auto | reverse ] || <angle>`
 *
 * **Initial value**: `auto`
 *
 * |         Chrome         | Firefox | Safari |  Edge  | IE  |
 * | :--------------------: | :-----: | :----: | :----: | :-: |
 * |         **56**         | **72**  |   No   | **79** | No  |
 * | 46 _(motion-rotation)_ |         |        |        |     |
 *
 * ---
 *
 * @property {String} objectFit
 *
 * The **`object-fit`** CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.
 *
 * **Syntax**: `fill | contain | cover | none | scale-down`
 *
 * **Initial value**: `fill`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **31** | **36**  | **10** | **16** | No  |
 *
 * ---
 *
 * @property {String} objectPosition
 *
 * The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.
 *
 * **Syntax**: `<position>`
 *
 * **Initial value**: `50% 50%`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **31** | **36**  | **10** | **16** | No  |
 *
 * ---
 *
 * @property {String} offsetAnchor
 *
 * **Syntax**: `auto | <position>`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **79** | **72**  |   No   | **79** | No  |
 *
 * ---
 *
 * @property {String} opacity
 *
 * The **`opacity`** CSS property sets the transparency of an element or the degree to which content behind an element is visible.
 *
 * **Syntax**: `<alpha-value>`
 *
 * **Initial value**: `1.0`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **2**  | **12** | **9** |
 *
 * ---
 *
 * @property {String} order
 *
 * The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.
 *
 * **Syntax**: `<integer>`
 *
 * **Initial value**: `0`
 *
 * |  Chrome  | Firefox | Safari  |  Edge  |    IE    |
 * | :------: | :-----: | :-----: | :----: | :------: |
 * |  **29**  | **20**  |  **9**  | **12** |  **11**  |
 * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
 *
 * ---
 *
 * @property {String} orphans
 *
 * The **`orphans`** CSS property sets the minimum number of lines in a block container that must be shown at the _bottom_ of a page, region, or column.
 *
 * **Syntax**: `<integer>`
 *
 * **Initial value**: `2`
 *
 * | Chrome | Firefox | Safari  |  Edge  |  IE   |
 * | :----: | :-----: | :-----: | :----: | :---: |
 * | **25** |   No    | **1.3** | **12** | **8** |
 * @property {String} outline
 *
 * The **`outline`** CSS property is a shorthand to set various outline properties in a single declaration: `outline-style`, `outline-width`, and `outline-color`.
 *
 * **Syntax**: `[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]`
 *
 * | Chrome | Firefox | Safari  |  Edge  |  IE   |
 * | :----: | :-----: | :-----: | :----: | :---: |
 * | **1**  | **1.5** | **1.2** | **12** | **8** |
 *
 * ---
 *
 * @property {String} outlineColor
 *
 * The **`outline-color`** CSS property sets the color of an element's outline.
 *
 * **Syntax**: `<color> | invert`
 *
 * **Initial value**: `invert`, for browsers supporting it, `currentColor` for the other
 *
 * | Chrome | Firefox | Safari  |  Edge  |  IE   |
 * | :----: | :-----: | :-----: | :----: | :---: |
 * | **1**  | **1.5** | **1.2** | **12** | **8** |
 *
 * ---
 *
 * @property {String} outlineOffset
 *
 * The **`outline-offset`** CSS property sets the amount of space between an outline and the edge or border of an element.
 *
 * **Syntax**: `<length>`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox | Safari  |  Edge  | IE  |
 * | :----: | :-----: | :-----: | :----: | :-: |
 * | **1**  | **1.5** | **1.2** | **15** | No  |
 *
 * ---
 *
 * @property {String} outlineStyle
 *
 * The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
 *
 * **Syntax**: `auto | <'border-style'>`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox | Safari  |  Edge  |  IE   |
 * | :----: | :-----: | :-----: | :----: | :---: |
 * | **1**  | **1.5** | **1.2** | **12** | **8** |
 *
 * ---
 *
 * @property {String} outlineWidth
 *
 * The **`outline-width`** CSS property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
 *
 * **Syntax**: `<line-width>`
 *
 * **Initial value**: `medium`
 *
 * | Chrome | Firefox | Safari  |  Edge  |  IE   |
 * | :----: | :-----: | :-----: | :----: | :---: |
 * | **1**  | **1.5** | **1.2** | **12** | **8** |
 *
 * ---
 *
 * @property {String} overflowAnchor
 *
 * **Syntax**: `auto | none`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **56** | **66**  |   No   | **79** | No  |
 *
 * ---
 *
 * @property {String} overflowBlock
 *
 * **Syntax**: `visible | hidden | clip | scroll | auto`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |   No   | **69**  |   No   |  No  | No  |
 *
 * ---
 *
 * @property {String} overflowClipBox
 *
 * The **`overflow-clip-box`** CSS property specifies relative to which box the clipping happens when there is an overflow. It is short hand for the `overflow-clip-box-inline` and `overflow-clip-box-block` properties.
 *
 * **Syntax**: `padding-box | content-box`
 *
 * **Initial value**: `padding-box`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |   No   | **29**  |   No   |  No  | No  |
 *
 * ---
 *
 * @property {String} overflowInline
 *
 * **Syntax**: `visible | hidden | clip | scroll | auto`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |   No   | **69**  |   No   |  No  | No  |
 *
 * ---
 *
 * @property {String} overflowWrap
 *
 * The `**overflow-wrap**` CSS property sets whether the browser should insert line breaks within words to prevent text from overflowing its content box.
 *
 * **Syntax**: `normal | break-word | anywhere`
 *
 * **Initial value**: `normal`
 *
 * |     Chrome      |      Firefox      |     Safari      |       Edge       |          IE           |
 * | :-------------: | :---------------: | :-------------: | :--------------: | :-------------------: |
 * |     **23**      |      **49**       |     **6.1**     |      **18**      | **5.5** _(word-wrap)_ |
 * | 1 _(word-wrap)_ | 3.5 _(word-wrap)_ | 1 _(word-wrap)_ | 12 _(word-wrap)_ |                       |
 *
 * ---
 *
 * @property {String} overflow
 *
 * The **`overflow`** CSS property sets what to do when an element's content is too big to fit in its block formatting context. It is a shorthand for `overflow-x` and `overflow-y`.
 *
 * **Syntax**: `[ visible | hidden | clip | scroll | auto ]{1,2}`
 *
 * **Initial value**: `visible`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} overflowX
 *
 * The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.
 *
 * **Syntax**: `visible | hidden | clip | scroll | auto`
 *
 * **Initial value**: `visible`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  | **3.5** | **3**  | **12** | **5** |
 *
 * ---
 *
 * @property {String} overflowY
 *
 * The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.
 *
 * **Syntax**: `visible | hidden | clip | scroll | auto`
 *
 * **Initial value**: `visible`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  | **1.5** | **3**  | **12** | **5** |
 *
 * ---
 *
 * @property {String} overscrollBehavior
 *
 * The **`overscroll-behavior`** CSS property sets what a browser does when reaching the boundary of a scrolling area. It's a shorthand for `overscroll-behavior-x` and `overscroll-behavior-y`.
 *
 * **Syntax**: `[ contain | none | auto ]{1,2}`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **63** | **59**  |   No   | **18** | No  |
 *
 * ---
 *
 * @property {String} overscrollBehaviorBlock
 *
 * The **`overscroll-behavior-block`** CSS property sets the browser's behavior when the block direction boundary of a scrolling area is reached.
 *
 * **Syntax**: `contain | none | auto`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **77** | **73**  |   No   | **79** | No  |
 *
 * ---
 *
 * @property {String} overscrollBehaviorInline
 *
 * The **`overscroll-behavior-inline`** CSS property sets the browser's behavior when the inline direction boundary of a scrolling area is reached.
 *
 * **Syntax**: `contain | none | auto`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **77** | **73**  |   No   | **79** | No  |
 *
 * ---
 *
 * @property {String} overscrollBehaviorX
 *
 * The **`overscroll-behavior-x`** CSS property sets the browser's behavior when the horizontal boundary of a scrolling area is reached.
 *
 * **Syntax**: `contain | none | auto`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **63** | **59**  |   No   | **18** | No  |
 *
 * ---
 *
 * @property {String} overscrollBehaviorY
 *
 * The **`overscroll-behavior-y`** CSS property sets the browser's behavior when the vertical boundary of a scrolling area is reached.
 *
 * **Syntax**: `contain | none | auto`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **63** | **59**  |   No   | **18** | No  |
 *
 * ---
 *
 * @property {String} paddingBlock
 *
 * The **`padding-block`** CSS property defines the logical block start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
 *
 * **Syntax**: `<'padding-left'>{1,2}`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |  n/a   | **66**  |   No   | n/a  | No  |
 *
 * ---
 *
 * @property {String} paddingBlockEnd
 *
 * The **`padding-block-end`** CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<'padding-left'>`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **69** | **41**  | **12.1** | **79** | No  |
 *
 * ---
 *
 * @property {String} paddingBlockStart
 *
 * The **`padding-block-start`** CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<'padding-left'>`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **69** | **41**  | **12.1** | **79** | No  |
 *
 * ---
 *
 * @property {String} padding
 *
 * The **`padding`** CSS property sets the padding area on all four sides of an element. It is a shorthand for `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.
 *
 * **Syntax**: `[ <length> | <percentage> ]{1,4}`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} paddingBottom
 *
 * The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element.
 *
 * **Syntax**: `<length> | <percentage>`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} paddingInline
 *
 * The **`padding-inline`** CSS property defines the logical inline start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
 *
 * **Syntax**: `<'padding-left'>{1,2}`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |  n/a   | **66**  |   No   | n/a  | No  |
 *
 * ---
 *
 * @property {String} paddingInlineEnd
 *
 * The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<'padding-left'>`
 *
 * **Initial value**: `0`
 *
 * |          Chrome           |        Firefox         |          Safari           |  Edge  | IE  |
 * | :-----------------------: | :--------------------: | :-----------------------: | :----: | :-: |
 * |          **69**           |         **41**         |         **12.1**          | **79** | No  |
 * | 2 _(-webkit-padding-end)_ | 3 _(-moz-padding-end)_ | 3 _(-webkit-padding-end)_ |        |     |
 *
 * ---
 *
 * @property {String} paddingInlineStart
 *
 * The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
 *
 * **Syntax**: `<'padding-left'>`
 *
 * **Initial value**: `0`
 *
 * |           Chrome            |         Firefox          |           Safari            |  Edge  | IE  |
 * | :-------------------------: | :----------------------: | :-------------------------: | :----: | :-: |
 * |           **69**            |          **41**          |          **12.1**           | **79** | No  |
 * | 2 _(-webkit-padding-start)_ | 3 _(-moz-padding-start)_ | 3 _(-webkit-padding-start)_ |        |     |
 *
 * ---
 *
 * @property {String} paddingLeft
 *
 * The **`padding-left`** CSS property sets the width of the padding area on the left side of an element.
 *
 * **Syntax**: `<length> | <percentage>`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} paddingRight
 *
 * The **`padding-right`** CSS property sets the width of the padding area on the right side of an element.
 *
 * **Syntax**: `<length> | <percentage>`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} paddingTop
 *
 * The **`padding-top`** padding area on the top of an element.
 *
 * **Syntax**: `<length> | <percentage>`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} pageBreakAfter
 *
 * The **`page-break-after`** CSS property adjusts page breaks _after_ the current element.
 *
 * **Syntax**: `auto | always | avoid | left | right | recto | verso`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari  |  Edge  |  IE   |
 * | :----: | :-----: | :-----: | :----: | :---: |
 * | **1**  |  **1**  | **1.2** | **12** | **4** |
 *
 * ---
 *
 * @property {String} pageBreakBefore
 *
 * The **`page-break-before`** CSS property adjusts page breaks _before_ the current element.
 *
 * **Syntax**: `auto | always | avoid | left | right | recto | verso`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari  |  Edge  |  IE   |
 * | :----: | :-----: | :-----: | :----: | :---: |
 * | **1**  |  **1**  | **1.2** | **12** | **4** |
 *
 * ---
 *
 * @property {String} pageBreakInside
 *
 * The **`page-break-inside`** CSS property adjusts page breaks _inside_ the current element.
 *
 * **Syntax**: `auto | avoid`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari  |  Edge  |  IE   |
 * | :----: | :-----: | :-----: | :----: | :---: |
 * | **1**  | **19**  | **1.3** | **12** | **8** |
 *
 * ---
 *
 * @property {String} paintOrder
 *
 * The **`paint-order`** CSS property lets you control the order in which the fill and stroke (and painting markers) of text content and shapes are drawn.
 *
 * **Syntax**: `normal | [ fill || stroke || markers ]`
 *
 * **Initial value**: `normal`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **35** | **60**  | **8**  | **17** | No  |
 *
 * ---
 *
 * @property {String} perspective
 *
 * The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective. Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property.
 *
 * **Syntax**: `none | <length>`
 *
 * **Initial value**: `none`
 *
 * |  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
 * | :------: | :------: | :-----: | :----: | :----: |
 * |  **36**  |  **16**  |  **9**  | **12** | **10** |
 * | 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |        |
 *
 * ---
 *
 * @property {String} perspectiveOrigin
 *
 * The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.
 *
 * **Syntax**: `<position>`
 *
 * **Initial value**: `50% 50%`
 *
 * |  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
 * | :------: | :------: | :-----: | :----: | :----: |
 * |  **36**  |  **16**  |  **9**  | **12** | **10** |
 * | 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |        |
 *
 * ---
 *
 * @property {String} placeContent
 *
 * The `**place-content**` CSS property is a shorthand for `align-content` and `justify-content`. It can be used in any layout method which utilizes both of these alignment values.
 *
 * **Syntax**: `<'align-content'> <'justify-content'>?`
 *
 * **Initial value**: `normal`
 *
 * ---
 *
 * _Supported in Flex Layout_
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **59** | **45**  | **9**  | **79** | No  |
 *
 * ---
 *
 * _Supported in Grid Layout_
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **59** | **53**  | **11** | **79** | No  |
 *
 * ---
 *
 * @property {"auto" | "none" | "visiblePainted" | "visibleFill" | "visibleStroke" | "visible" | "painted" | "fill" | "stroke" | "all" | "inherit"} pointerEvents
 *
 * The **`pointer-events`** CSS property sets under what circumstances (if any) a particular graphic element can become the target of mouse events.
 *
 * **Syntax**: `auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  |   IE   |
 * | :----: | :-----: | :----: | :----: | :----: |
 * | **1**  | **1.5** | **4**  | **12** | **11** |
 *
 * ---
 *
 * @property {"absolute" | "fixed" | "relative" | "static" | "sticky" | "-ms-page" | "-webkit-sticky" | "inherit" | "initial" | "unset"} position
 *
 * The **`position`** CSS property sets how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.
 *
 * **Syntax**: `static | relative | absolute | sticky | fixed`
 *
 * **Initial value**: `static`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * --
 *
 * @property {String} quotes
 *
 * The **`quotes`** CSS property sets how quotation marks appear.
 *
 * **Syntax**: `none | auto | [ <string> <string> ]+`
 *
 * **Initial value**: depends on user agent
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **11** | **1.5** | **9**  | **12** | **8** |
 *
 * ---
 *
 * @property {String} resize
 *
 * The **`resize`** CSS property sets whether an element is resizable, and if so, in which directions.
 *
 * **Syntax**: `none | both | horizontal | vertical | block | inline`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **1**  |  **4**  | **3**  | **79** | No  |
 *
 * ---
 *
 * @property {String} right
 *
 *  The **`right`** CSS property participates in specifying the horizontal position of a _positioned element_. It has no effect on non-positioned elements.
 *
 * **Syntax**: `<length> | <percentage> | auto`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  |   IE    |
 * | :----: | :-----: | :----: | :----: | :-----: |
 * | **1**  |  **1**  | **1**  | **12** | **5.5** |
 *
 * ---
 *
 * @property {String} rotate
 *
 * The **`rotate`** CSS property allows you to specify rotation transforms individually and independantly of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
 *
 * **Syntax**: `none | <angle> | [ x | y | z | <number>{3} ] && <angle>`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |   No   | **72**  |   No   |  No  | No  |
 *
 * @property {String} rowGap
 *
 * The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's grid rows.
 *
 * **Syntax**: `normal | <length-percentage>`
 *
 * **Initial value**: `normal`
 *
 * ---
 *
 * _Supported in Flex Layout_
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |   No   | **63**  |   No   |  No  | No  |
 *
 * ---
 *
 * _Supported in Grid Layout_
 *
 * |       Chrome        |       Firefox       |          Safari           |  Edge  | IE  |
 * | :-----------------: | :-----------------: | :-----------------------: | :----: | :-: |
 * |       **66**        |       **61**        | **10.1** _(grid-row-gap)_ | **16** | No  |
 * | 57 _(grid-row-gap)_ | 52 _(grid-row-gap)_ |                           |        |     |
 *
 * ---
 *
 * @property {String} rubyAlign
 *
 * The `**ruby-align**` CSS property defines the distribution of the different ruby elements over the base.
 *
 * **Syntax**: `start | center | space-between | space-around`
 *
 * **Initial value**: `space-around`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |   No   | **38**  |   No   |  No  | No  |
 *
 * ---
 *
 * @property {String} rubyMerge
 *
 * **Syntax**: `separate | collapse | auto`
 *
 * **Initial value**: `separate`
 *
 * ---
 *
 * @property {String} rubyPosition
 *
 * The `**ruby-position**` CSS property defines the position of a ruby element relatives to its base element. It can be position over the element (`over`), under it (`under`), or between the characters, on their right side (`inter-character`).
 *
 * **Syntax**: `over | under | inter-character`
 *
 * **Initial value**: `over`
 *
 * | Chrome | Firefox | Safari | Edge  | IE  |
 * | :----: | :-----: | :----: | :---: | :-: |
 * |   No   | **38**  |   No   | 12-79 | No  |
 *
 * ---
 *
 * @property {String} scale
 *
 * The **`scale`** CSS property allows you to specify scale transforms individually and independantly of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
 *
 * **Syntax**: `none | <number>{1,3}`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |   No   | **72**  |   No   |  No  | No  |
 *
 * ---
 *
 * @property {String} scrollBehavior
 *
 * The **`scroll-behavior`** CSS property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs.
 *
 * **Syntax**: `auto | smooth`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **61** | **36**  |   No   | **79** | No  |
 *
 * ---
 *
 * @property {String} scrollMargin
 *
 * The **`scroll-margin`** property is a shorthand property which sets all of the `scroll-margin` longhands, assigning values much like the `margin` property does for the `margin-*` longhands.
 *
 * **Syntax**: `<length>{1,4}`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox |            Safari             |  Edge  | IE  |
 * | :----: | :-----: | :---------------------------: | :----: | :-: |
 * | **69** | **68**  | **11** _(scroll-snap-margin)_ | **79** | No  |
 *
 * ---
 *
 * @property {String} scrollMarginBlock
 *
 * The `scroll-margin-block` property is a shorthand property which sets the scroll-margin longhands in the block dimension.
 *
 * **Syntax**: `<length>{1,2}`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **69** | **68**  |   No   | **79** | No  |
 *
 * ---
 *
 * @property {String} scrollMarginBlockEnd
 *
 * The `scroll-margin-block-end` property defines the margin of the scroll snap area at the end of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
 *
 * **Syntax**: `<length>`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **69** | **68**  |   No   | **79** | No  |
 *
 * ---
 *
 * @property {String} scrollMarginBlockStart
 *
 * The `scroll-margin-block-start` property defines the margin of the scroll snap area at the start of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
 *
 * **Syntax**: `<length>`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **69** | **68**  |   No   | **79** | No  |
 *
 * ---
 *
 * @property {String} scrollMarginBottom
 *
 * The `scroll-margin-bottom` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
 *
 * **Syntax**: `<length>`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox |                Safari                |  Edge  | IE  |
 * | :----: | :-----: | :----------------------------------: | :----: | :-: |
 * | **69** | **68**  | **11** _(scroll-snap-margin-bottom)_ | **79** | No  |
 *
 * ---
 *
 * @property {String} scrollMarginInline
 *
 * The `scroll-margin-inline` property is a shorthand property which sets the scroll-margin longhands in the inline dimension.
 *
 * **Syntax**: `<length>{1,2}`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |   No   | **68**  |   No   |  No  | No  |
 *
 * ---
 *
 * @property {String} scrollMarginInlineEnd
 *
 * The `scroll-margin-inline-end` property defines the margin of the scroll snap area at the end of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
 *
 * **Syntax**: `<length>`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **69** | **68**  |   No   | **79** | No  |
 *
 * ---
 *
 * @property {String} scrollMarginInlineStart
 *
 * The `scroll-margin-inline-start` property defines the margin of the scroll snap area at the start of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
 *
 * **Syntax**: `<length>`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **69** | **68**  |   No   | **79** | No  |
 *
 * ---
 *
 * @property {String} scrollMarginLeft
 *
 * The `scroll-margin-left` property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
 *
 * **Syntax**: `<length>`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox |               Safari               |  Edge  | IE  |
 * | :----: | :-----: | :--------------------------------: | :----: | :-: |
 * | **69** | **68**  | **11** _(scroll-snap-margin-left)_ | **79** | No  |
 *
 * ---
 *
 * @property {String} scrollMarginRight
 *
 * The `scroll-margin-right` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
 *
 * **Syntax**: `<length>`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox |               Safari                |  Edge  | IE  |
 * | :----: | :-----: | :---------------------------------: | :----: | :-: |
 * | **69** | **68**  | **11** _(scroll-snap-margin-right)_ | **79** | No  |
 *
 * ---
 *
 * @property {String} scrollMarginTop
 *
 * The `scroll-margin-top` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
 *
 * **Syntax**: `<length>`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox |              Safari               |  Edge  | IE  |
 * | :----: | :-----: | :-------------------------------: | :----: | :-: |
 * | **69** | **68**  | **11** _(scroll-snap-margin-top)_ | **79** | No  |
 *
 * ---
 *
 * @property {String} scrollPadding
 *
 * The scroll-padding property is a shorthand property which sets all of the scroll-padding longhands, assigning values much like the padding property does for the padding-\* longhands.
 *
 * The scroll-padding properties define offsets for the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
 *
 * **Syntax**: `[ auto | <length-percentage> ]{1,4}`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **69** | **68**  | **11** | **79** | No  |
 *
 * ---
 *
 * @property {String} scrollPaddingBlock
 *
 * The `scroll-padding-block` property is a shorthand property which sets the scroll-padding longhands for the block dimension.
 *
 * The scroll-padding properties define offsets for the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
 *
 * **Syntax**: `[ auto | <length-percentage> ]{1,2}`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **69** | **68**  |   No   | **79** | No  |
 *
 * ---
 *
 * @property {String} scrollPaddingBlockEnd
 *
 * The `scroll-padding-block-end` property defines offsets for the end edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
 *
 * **Syntax**: `auto | <length-percentage>`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **69** | **68**  |   No   | **79** | No  |
 *
 * ---
 *
 * @property {String} scrollPaddingBlockStart
 *
 * The `scroll-padding-block-start` property defines offsets for the start edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
 *
 * **Syntax**: `auto | <length-percentage>`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **69** | **68**  |   No   | **79** | No  |
 *
 * ---
 *
 * @property {String} scrollPaddingBottom
 *
 * The `scroll-padding-bottom` property defines offsets for the bottom of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
 *
 * **Syntax**: `auto | <length-percentage>`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **69** | **68**  | **11** | **79** | No  |
 *
 * ---
 *
 * @property {String} scrollPaddingInline
 *
 * The `scroll-padding-inline` property is a shorthand property which sets the scroll-padding longhands for the inline dimension.
 * The scroll-padding properties define offsets for the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
 *
 * **Syntax**: `[ auto | <length-percentage> ]{1,2}`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **69** | **68**  |   No   | **79** | No  |
 *
 * ---
 *
 * @property {String} scrollPaddingInlineEnd
 *
 * The `scroll-padding-inline-end` property defines offsets for the end edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
 *
 * **Syntax**: `auto | <length-percentage>`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **69** | **68**  |   No   | **79** | No  |
 *
 * ---
 *
 * @property {String} scrollPaddingInlineStart
 *
 * The `scroll-padding-inline-start` property defines offsets for the start edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
 *
 * **Syntax**: `auto | <length-percentage>`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **69** | **68**  |   No   | **79** | No  |
 *
 * ---
 *
 * @property {String} scrollPaddingleft
 *
 * The `scroll-padding-left` property defines offsets for the left of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
 *
 * **Syntax**: `auto | <length-percentage>`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **69** | **68**  | **11** | **79** | No  |
 *
 * ---
 *
 * @property {String} scrollPaddingRight
 *
 * The `scroll-padding-right` property defines offsets for the right of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
 *
 * **Syntax**: `auto | <length-percentage>`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-:
 *
 * ---
 *
 * @property {String} scrollPaddingTop
 *
 * The `scroll-padding-top` property defines offsets for the top of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
 *
 * **Syntax**: `auto | <length-percentage>`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **69** | **68**  | **11** | **79** | No  |
 *
 * ---
 *
 * @property {String} scrollSnapAlign
 *
 * The `scroll-snap-align` property specifies the box’s snap position as an alignment of its snap area (as the alignment subject) within its snap container’s snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.
 *
 * **Syntax**: `[ none | start | end | center ]{1,2}`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **69** | **68**  | **11** | **79** | No  |
 *
 * ---
 *
 * @property {String} scrollSnapMargin
 *
 * The **`scroll-margin`** property is a shorthand property which sets all of the `scroll-margin` longhands, assigning values much like the `margin` property does for the `margin-*` longhands.
 *
 * **Syntax**: `<length>{1,4}`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox |            Safari             |  Edge  | IE  |
 * | :----: | :-----: | :---------------------------: | :----: | :-: |
 * | **69** | **68**  | **11** _(scroll-snap-margin)_ | **79** | No  |
 *
 * ---
 *
 * @property {String} scrollSnapMarginBottom
 *
 * The `scroll-margin-bottom` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
 *
 * **Syntax**: `<length>`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox |                Safari                |  Edge  | IE  |
 * | :----: | :-----: | :----------------------------------: | :----: | :-: |
 * | **69** | **68**  | **11** _(scroll-snap-margin-bottom)_ | **79** | No  |
 *
 * ---
 *
 * @property {String} scrollSnapMarginLeft
 *
 * The `scroll-margin-left` property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
 *
 * **Syntax**: `<length>`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox |               Safari               |  Edge  | IE  |
 * | :----: | :-----: | :--------------------------------: | :----: | :-: |
 * | **69** | **68**  | **11** _(scroll-snap-margin-left)_ | **79** | No  |
 *
 * ---
 *
 * @property {String} scrollSnapMarginRight
 *
 * The `scroll-margin-right` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
 *
 * **Syntax**: `<length>`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox |               Safari                |  Edge  | IE  |
 * | :----: | :-----: | :---------------------------------: | :----: | :-: |
 * | **69** | **68**  | **11** _(scroll-snap-margin-right)_ | **79** | No  |
 *
 * ---
 *
 * @property {String} scrollSnapMarginTop
 *
 * The `scroll-margin-top` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
 *
 * **Syntax**: `<length>`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox |              Safari               |  Edge  | IE  |
 * | :----: | :-----: | :-------------------------------: | :----: | :-: |
 * | **69** | **68**  | **11** _(scroll-snap-margin-top)_ | **79** | No  |
 *
 * ---
 *
 * @property {String} scrollSnapStop
 *
 * The **`scroll-snap-stop`** CSS property defines whether the scroll container is allowed to "pass over" possible snap positions.
 *
 * **Syntax**: `normal | always`
 *
 * **Initial value**: `normal`
 *
 * | Chrome | Firefox | Safari |  Edge  | IE  |
 * | :----: | :-----: | :----: | :----: | :-: |
 * | **75** |   No    |   No   | **79** | No  |
 *
 * ---
 *
 * @property {String} scrollSnapType
 *
 * The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.
 *
 * **Syntax**: `none | [ x | y | block | inline | both ] [ mandatory | proximity ]?`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox | Safari  |     Edge     |      IE      |
 * | :----: | :-----: | :-----: | :----------: | :----------: |
 * | **69** |  39-68  | **11**  | **12** _-x-_ | **10** _-x-_ |
 * |        |         | 9 _-x-_ |              |              |
 *
 * ---
 *
 * @property {String} scrollColor
 *
 * The **`scrollbar-color`** CSS property sets the color of the scrollbar track and thumb.
 *
 * **Syntax**: `auto | dark | light | <color>{2}`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |   No   | **64**  |   No   |  No  | No  |
 *
 * ---
 *
 * @property {String} scrollWidth
 *
 * The `scrollbar-width` property allows the author to set the maximum thickness of an element’s scrollbars when they are shown.
 *
 * **Syntax**: `auto | thin | none`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * |   No   | **64**  |   No   |  No  | No  |
 *
 * ---
 *
 * @property {String} shapeImageThreshold
 *
 * The **`shape-image-threshold`** CSS property sets the alpha channel threshold used to extract the shape using an image as the value for `shape-outside`.
 *
 * **Syntax**: `<alpha-value>`
 *
 * **Initial value**: `0.0`
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **37** | **62**  | **10.1** | **79** | No  |
 *
 * --
 *
 * @property {String} shapeMargin
 *
 * The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.
 *
 * **Syntax**: `<length-percentage>`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox |     Safari     |  Edge  | IE  |
 * | :----: | :-----: | :------------: | :----: | :-: |
 * | **37** | **62**  | **10.1** _-x-_ | **79** | No  |
 *
 * ---
 *
 * @property {String} shapeOutside
 *
 * The **`shape-outside`** CSS property defines a shape—which may be non-rectangular—around which adjacent inline content should wrap. By default, inline content wraps around its margin box; `shape-outside` provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.
 *
 * **Syntax**: `none | <shape-box> || <basic-shape> | <image>`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **37** | **62**  | **10.1** | **79** | No  |
 *
 * ---
 *
 * @property {String} tableLayout
 *
 * The **`table-layout`** CSS property sets the algorithm used to lay out `<table>` cells, rows, and columns.
 *
 * **Syntax**: `auto | fixed`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **14** |  **1**  | **1**  | **12** | **5** |
 *
 * ---
 *
 * @property {String} tabSize
 *
 * The **`tab-size`** CSS property is used to customize the width of a tab (`U+0009`) character.
 *
 * **Syntax**: `<integer> | <length>`
 *
 * **Initial value**: `8`
 *
 * | Chrome |   Firefox   | Safari  |  Edge  | IE  |
 * | :----: | :---------: | :-----: | :----: | :-: |
 * | **21** | **4** _-x-_ | **6.1** | **79** | No  |
 *
 * ---
 *
 * @property {"center" | "end" | "justify" | "left" | "right" | "start" | "inherit" | "initial" | "unset"} textAlign
 *
 * The **`text-align`** CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like `vertical-align` but in the horizontal direction.
 *
 * **Syntax**: `start | end | left | right | center | justify | match-parent`
 *
 * **Initial value**: `start`, or a nameless value that acts as `left` if _direction_ is `ltr`, `right` if _direction_ is `rtl` if `start` is not supported by the browser.
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **3** |
 *
 * ---
 *
 * @property {String} textAlignLast
 *
 * The **`text-align-last`** CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.
 *
 * **Syntax**: `auto | start | end | left | right | center | justify`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  |   IE    |
 * | :----: | :-----: | :----: | :----: | :-----: |
 * | **47** | **49**  |   No   | **12** | **5.5** |
 *
 * ---
 *
 * @property {String} textDecoration
 *
 * The **`text-decoration`** CSS property sets the appearance of decorative lines on text. It is a shorthand for `text-decoration-line`, `text-decoration-color`, and `text-decoration-style`.
 *
 * **Syntax**: `<'text-decoration-line'> || <'text-decoration-style'> || <'text-decoration-color'> || <'text-decoration-thickness'>`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **3** |
 *
 * ---
 *
 * @property {String} textDecorationColor
 *
 * The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.
 *
 * **Syntax**: `<color>`
 *
 * **Initial value**: `currentcolor`
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **57** | **36**  | **12.1** | **79** | No  |
 * |        |         | 8 _-x-_  |        |     |
 *
 * ---
 *
 * @property {String} textDecorationLine
 *
 * The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.
 *
 * **Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **57** | **36**  | **12.1** | **79** | No  |
 * |        |         | 8 _-x-_  |        |     |
 *
 * ---
 *
 * @property {String} textDecorationStyle
 *
 * The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.
 *
 * **Syntax**: `solid | double | dotted | dashed | wavy`
 *
 * **Initial value**: `solid`
 *
 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
 * | :----: | :-----: | :------: | :----: | :-: |
 * | **57** | **36**  | **12.1** | **79** | No  |
 * |        |         | 8 _-x-_  |        |     |
 *
 * ---
 *
 * @property {String} textIndent
 *
 * The **`text-indent`** CSS property sets the length of empty space (indentation) that is put before lines of text in a block.
 *
 * **Syntax**: `<length-percentage> && hanging? && each-line?`
 *
 * **Initial value**: `0`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **3** |
 *
 * ---
 *
 * @property {String} textJustify
 *
 * The **`text-justify`** CSS property sets what type of justification should be applied to text when `text-align``: justify;` is set on an element.
 *
 * **Syntax**: `auto | inter-character | inter-word | none`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  |   IE   |
 * | :----: | :-----: | :----: | :----: | :----: |
 * |  n/a   | **55**  |   No   | **12** | **11** |
 *
 * ---
 *
 * @property {String} textOverflow
 *
 * The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.
 *
 * **Syntax**: `[ clip | ellipsis | <string> ]{1,2}`
 *
 * **Initial value**: `clip`
 *
 * | Chrome | Firefox | Safari  |  Edge  |  IE   |
 * | :----: | :-----: | :-----: | :----: | :---: |
 * | **1**  |  **7**  | **1.3** | **12** | **6** |
 *
 * ---
 *
 * @property {String} textShadow
 *
 * The **`text-shadow`** CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its `decorations`. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.
 *
 * **Syntax**: `none | <shadow-t>#`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox | Safari  |  Edge  |   IE   |
 * | :----: | :-----: | :-----: | :----: | :----: |
 * | **2**  | **3.5** | **1.1** | **12** | **10** |
 *
 * ---
 *
 * @property {String} textTransform
 *
 * The **`text-transform`** CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby
 *
 * **Syntax**: `none | capitalize | uppercase | lowercase | full-width | full-size-kana`
 *
 * **Initial value**: `none`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} top
 *
 * The **`top`** CSS property participates in specifying the vertical position of a _positioned element_. It has no effect on non-positioned elements.
 *
 * **Syntax**: `<length> | <percentage> | auto`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **5** |
 *
 * ---
 *
 * @property {"matrix()" | "matrix3d()" | "none" | "perspective()" | "rotate()" | "rotate3d()" | "rotateX()" | "rotateY()" | "rotateZ()" | "scale()" | "scale3d()" | "scaleX()" | "scaleY()" | "scaleZ()" | "skew()" | "skewX()" | "skewY()" | "translate()" | "translate3d()" | "translateX()" | "translateY()" | "translateZ()" | "inherit" | "initial" | "unset"} transform
 *
 * The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.
 *
 * **Syntax**: `none | <transform-list>`
 *
 * **Initial value**: `none`
 *
 * | Chrome  | Firefox |  Safari   |  Edge  |   IE    |
 * | :-----: | :-----: | :-------: | :----: | :-----: |
 * | **36**  | **16**  |   **9**   | **12** | **10**  |
 * | 1 _-x-_ |         | 3.1 _-x-_ |        | 9 _-x-_ |
 *
 * ---
 *
 * @property {"bottom" | "center" | "inherit" | "initial" | "left" | "right" | "top" | "unset"} transformOrigin
 *
 *  The **`transform-origin`** CSS property sets the origin for an element's transformations.
 *
 * **Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`
 *
 * **Initial value**: `50% 50% 0`
 *
 * | Chrome  |  Firefox  | Safari  |  Edge  |   IE    |
 * | :-----: | :-------: | :-----: | :----: | :-----: |
 * | **36**  |  **16**   |  **9**  | **12** | **10**  |
 * | 1 _-x-_ | 3.5 _-x-_ | 2 _-x-_ |        | 9 _-x-_ |
 *
 * ---
 *
 * @property {String} transformStyle
 *
 * The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.
 *
 * **Syntax**: `flat | preserve-3d`
 *
 * **Initial value**: `flat`
 *
 * |  Chrome  | Firefox  | Safari  |  Edge  | IE  |
 * | :------: | :------: | :-----: | :----: | :-: |
 * |  **36**  |  **16**  |  **9**  | **12** | No  |
 * | 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |     |
 *
 * ---
 *
 * @property {String} transition
 *
 * The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.
 *
 * **Syntax**: `<single-transition>#`
 *
 * ---
 *
 * @property {String} transitionProperty
 *
 * The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.
 *
 * **Syntax**: `none | <single-transition-property>#`
 *
 * **Initial value**: all
 *
 * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
 * | :-----: | :-----: | :-------: | :----: | :----: |
 * | **26**  | **16**  |   **9**   | **12** | **10** |
 * | 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |
 *
 * ---
 *
 * @property {String} transitionDuration
 *
 * The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.
 *
 * **Syntax**: `<time>#`
 *
 * **Initial value**: `0s`
 *
 * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
 * | :-----: | :-----: | :-------: | :----: | :----: |
 * | **26**  | **16**  |   **9**   | **12** | **10** |
 * | 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |
 *
 * ----
 *
 * @property {String} transitionTimingFunction
 *
 * The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.
 *
 * **Syntax**: `<timing-function>#`
 *
 * **Initial value**: `ease`
 *
 * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
 * | :-----: | :-----: | :-------: | :----: | :----: |
 * | **26**  | **16**  |   **9**   | **12** | **10** |
 * | 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |
 *
 * ---
 *
 * @property {String} transitionDelay
 *
 * The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.
 *
 * **Syntax**: `<time>#`
 *
 * **Initial value**: `0s`
 *
 * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
 * | :-----: | :-----: | :-----: | :----: | :----: |
 * | **26**  | **16**  |  **9**  | **12** | **10** |
 * | 1 _-x-_ | 4 _-x-_ | 4 _-x-_ |        |        |
 *
 * ---
 *
 * @property {String} unicodeBidi
 *
 * The **`unicode-bidi`** CSS property, together with the `direction` property, determines how bidirectional text in a document is handled. For example, if a block of content contains both left-to-right and right-to-left text, the user-agent uses a complex Unicode algorithm to decide how to display the text. The `unicode-bidi` property overrides this algorithm and allows the developer to control the text embedding.
 *
 * **Syntax**: `normal | embed | isolate | bidi-override | isolate-override | plaintext`
 *
 * **Initial value**: `normal`
 *
 * | Chrome | Firefox | Safari  |  Edge  |   IE    |
 * | :----: | :-----: | :-----: | :----: | :-----: |
 * | **2**  |  **1**  | **1.3** | **12** | **5.5** |
 *
 * ---
 *
 * @property {String} userSelect
 *
 * The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.
 *
 * **Syntax**: `auto | text | none | contain | all`
 *
 * **Initial value**: `auto`
 *
 * | Chrome  | Firefox |   Safari    |     Edge     |      IE      |
 * | :-----: | :-----: | :---------: | :----------: | :----------: |
 * | **54**  | **69**  | **3** _-x-_ | **12** _-x-_ | **10** _-x-_ |
 * | 1 _-x-_ | 1 _-x-_ |             |              |              |
 *
 * ---
 *
 * @property {String} verticalAlign
 *
 * The **`vertical-align`** CSS property sets vertical alignment of an inline or table-cell box.
 *
 * **Syntax**: `baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length>`
 *
 * **Initial value**: `baseline`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} visibility
 *
 * The **`visibility`** CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a `<table>`.
 *
 * **Syntax**: `visible | hidden | collapse`
 *
 * **Initial value**: `visible`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {"normal" | "pre" | "nowrap" | "pre-wrap" | "pre-line" | "break-spaces"} whiteSpace
 *
 * The **`white-space`** CSS property sets how white space inside an element is handled.
 *
 * **Syntax**: `normal | pre | nowrap | pre-wrap | pre-line | break-spaces`
 *
 * **Initial value**: `normal`
 *
 * | Chrome | Firefox | Safari |  Edge  |   IE    |
 * | :----: | :-----: | :----: | :----: | :-----: |
 * | **1**  |  **1**  | **1**  | **12** | **5.5** |
 *
 * ---
 *
 * @property {String} width
 *
 * The **`width`** CSS property sets an element's width. By default it sets the width of the content area, but if `box-sizing` is set to `border-box`, it sets the width of the border area.
 *
 * **Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content(<length-percentage>)`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} willChange
 *
 * The **`will-change`** CSS property hints to browsers how an element is expected to change. Browsers may set up optimizations before an element is actually changed. These kinds of optimizations can increase the responsiveness of a page by doing potentially expensive work before they are actually required.
 *
 * **Syntax**: `auto | <animateable-feature>#`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari  |  Edge  | IE  |
 * | :----: | :-----: | :-----: | :----: | :-: |
 * | **36** | **36**  | **9.1** | **79** | No  |
 *
 * ---
 *
 * @property {"normal" |" break-all" | "keep-all" | "break-word"} wordBreak
 *
 * The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.
 *
 * **Syntax**: `normal | break-all | keep-all | break-word`
 *
 * **Initial value**: `normal`
 *
 * | Chrome | Firefox | Safari |  Edge  |   IE    |
 * | :----: | :-----: | :----: | :----: | :-----: |
 * | **1**  | **15**  | **3**  | **12** | **5.5** |
 *
 * ---
 *
 * @property {String} wordSpacing
 *
 * The **`word-spacing`** CSS property sets the length of space between words and between tags.
 *
 * **Syntax**: `normal | <length-percentage>`
 *
 * **Initial value**: `normal`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **6** |
 *
 * ----
 *
 * @property {String} wordWrap
 *
 * The `**overflow-wrap**` CSS property sets whether the browser should insert line breaks within words to prevent text from overflowing its content box.
 *
 * **Syntax**: `normal | break-word`
 *
 * **Initial value**: `normal`
 *
 * | Chrome | Firefox | Safari |  Edge  |   IE    |
 * | :----: | :-----: | :----: | :----: | :-----: |
 * | **1**  | **3.5** | **2**  | **12** | **5.5** |
 *
 * ---
 *
 *
 * @property {String} writingMode
 *
 * The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress.
 *
 * **Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`
 *
 * **Initial value**: `horizontal-tb`
 *
 * | Chrome  | Firefox |  Safari   |  Edge  |     IE      |
 * | :-----: | :-----: | :-------: | :----: | :---------: |
 * | **48**  | **41**  | **10.1**  | **12** | **9** _-x-_ |
 * | 8 _-x-_ |         | 5.1 _-x-_ |        |             |
 *
 * ---
 *
 * @property {String} widows
 *
 * The **`widows`** CSS property sets the minimum number of lines in a block container that must be shown at the _top_ of a page, region, or column.
 *
 * **Syntax**: `<integer>`
 *
 * **Initial value**: `2`
 *
 * | Chrome | Firefox | Safari  |  Edge  |  IE   |
 * | :----: | :-----: | :-----: | :----: | :---: |
 * | **25** |   No    | **1.3** | **12** | **8** |
 *
 * ---
 *
 * @property {String} zIndex
 *
 * The **`z-index`** CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.
 *
 * **Syntax**: `auto | <integer>`
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari |  Edge  |  IE   |
 * | :----: | :-----: | :----: | :----: | :---: |
 * | **1**  |  **1**  | **1**  | **12** | **4** |
 *
 * ---
 *
 * @property {String} zoom
 *
 * The non-standard **`zoom`** CSS property can be used to control the magnification level of an element. `transform: scale()` should be used instead of this property, if possible. However, unlike CSS Transforms, `zoom` affects the layout size of the element.
 *
 * **Syntax**: `normal | reset | <number> | <percentage>`
 *
 * **Initial value**: `normal`
 *
 * | Chrome | Firefox | Safari  |  Edge  |   IE    |
 * | :----: | :-----: | :-----: | :----: | :-----: |
 * | **1**  |   No    | **3.1** | **12** | **5.5** |
 *
 * ---
 *
 */

import * as CSS from "./index"

export declare class domElement {
    constructor(targets: String | Element);
};

export interface domElement {
    /**
     * Sets or returns the HTML content (inner HTML) of an element or array of elements.
     * 
     * **Syntax**: `S(targets).text(String)`
    */
    text(text?: String): String | Array<String> | void,
    /**
     * Set a specific style of an element/s using different CSS properties.
     * 
     * **Syntax**: `S(targets).css({CSSPropertiy:`Value`, ...})`
    */
    css(CSSObjectOfProprties: CSS.Properties): void,
    /**
     * Removes the specified CSS property from a CSS declaration block.
     * 
     * **Syntax**: `S(targets).removeCss(propertyName)`
    */
    removeCss(propertyName: String): void,
    /**
     * inserts nodes before the first child of node.
     * 
     * **Syntax**: `S(targets).prepend(element)`
    */
    prepend(element: Element): void,
    /**
     * Inserts nodes after the last child of node.
     * 
     * **Syntax**: `S(targets).append(element)`
    */
    append(element: Element): void,
    /**
     * Returns a copy of node. If deep is true, the copy also includes the node's descendants.
     * 
     * **Syntax**: `S(targets).clone(deep)`
    */
    clone(element: Boolean = false): void,
    /**
     * Set Attribute for an HTML element
     * 
     * **Syntax**: `S(targets).attr(attribute, value)`
    */
    attr(attribute: String | attributes, value: String): void,
    /**
     * Remove Attribute from an HTML element
     * 
     * **Syntax**: `S(targets).removeAttr(attribute)`
    */
    removeAttr(attribute: String | attributes): void,
    /**
     * Set or Return the value attribute from an HTML element
     * 
     * **Syntax**: `S(targets).val(value)`
    */
    val(value: String): "attribute value" | void,
    /**
     * Add event listener to an HTML element
     * 
     * **Syntax**: `S(targets).on(event, functionHandler)`
    */
    on(event: GlobalEventHandlersEventMap, functionHandler: Function): void,
    /**
     * Remove event listener from an HTML element
     * 
     * **Syntax**: `S(targets).off(event, functionHandler)`
    */
    off(event: GlobalEventHandlersEventMap, functionHandler: Function): void,
    /**
     * Remove an HTML element from document
     * 
     * **Syntax**: `S(targets).remove()`
    */
    remove(): void,
    /**
     * Blur an HTML element
     * 
     * **Syntax**: `S(targets).blur()`
    */
    blur(): void,
    /**
     * Focus an HTML element
     * 
     * **Syntax**: `S(targets).focus()`
    */
    focus(): void,
    /**
     * Get the style value of an HTML element
     * 
     * **Syntax**: `S(targets).getStyle(property, toNumber)`
     * 
     * @param {Boolean} [toNumber] - determine the return value type `(string|number)`
     * 
    */
    getStyle(property: String, toNumber = false): String | Number,
    /**
     * Get the style variable from DOM Root
     * 
     * **Syntax**: `S().getCssVar(variable, toNumber)`
     * 
     * @param {Boolean} [toNumber] - determine the return value type `(string|number)`
     * 
    */
    getCssVar(variable: String, toNumber = false): String | Number,
    /**
     * Set a Css style variable
     * 
     * **Syntax**: `S().setCssVar(variable, value)`
     * 
    */
    setCssVar(variable: String, value: String): void,
    /**
     * A wait function to be used only inside async functions
     * 
     * **Syntax**: `await S().wait(time)`
     * 
     * @param {Number} time - time in milliseconds
     * 
    */
    time(time: Number): Promise,
    /**
     * Animate a dom element through CSS properties
     *
     * **Syntax**: `S(targets).animate(from, to, options)`
    */
    animate(from: CSS.Properties, to: CSS.Properties, options: AnimateOptions): void,
    scrollTo(options: ScrollToOptions): void,
}

export declare const S: (targets: any) => domElement

type attributes = "autocomplete" | "async" | "alt" | "class" | "contenteditable" | "dir" | "draggable" | "hidden" | "id" | "lang" | "style" | "src" | "title" | "translate" | "value";

type transitionTimingFunction = "ease" | "linear" | "ease-in" | "ease-out" | "ease-in-out" | "step-start" | "step-end" | "steps(int,start|end)" | "cubic-bezier(n,n,n,n)" | "initial" | "inherit";

interface AnimateOptions {
    /**
     * Animation transition-property
     *
     * **Syntax**: `transition: "CSSPropertiy, ..."`
     *
     * **Initial value**: `all`
    */
    transitionProperty?: String,
    /**
     * Animation transition-timing-function
     *
     * **Syntax**: `ease: ease | linear | ease-in | ease-out | ease-in-out | step-start | step-end | steps(int,start|end) | cubic-bezier(n,n,n,n) | initial | inherit`
     *
     * **Initial value**: `ease`
    */
    ease?: String | transitionTimingFunction,
    /**
     * Remove CSS styles after finishing the animation
     *
     * **Syntax**: `cleanUp: true | false`
     *
     * **Initial value**: `false`
    */
    cleanUp?= false,
    /**
     * Remove CSS Property during the animation.
     *
     * **Syntax**: `clearProp: "CSS Property"`
     *
     * **Initial value**: `none`
    */
    clearProp?: String,
    /**
     * Set the animated element style to display: none after cleanUp
     *
     * Works only if cleanUp === true
     *
     * **Syntax**: `dispalyNone: true | false`
     *
     * **Initial value**: `false`
    */
    dispalyNone?= false,
    /**
     * Repeat the animation number of times. infinity if equals to -1
     *
     * **Syntax**: `repeat: Number`
     *
     * **Initial value**: `0`
    */
    dispalyNone?= 0,
    /**
     * animate the element back to the first state.
     *
     * **Syntax**: `yoyo: true | false`
     *
     * **Initial value**: `false`
    */
    yoyo?= false,
    /**
     * Delay the yoyo animation in milliseconds
     *
     * **Syntax**: `yoyoDelay: Number`
     *
     * **Initial value**: `delay`
    */
    yoyoDelay?: Number,
    /**
     * Yoyo animation duration in milliseconds
     *
     * **Syntax**: `yoyoDuration: Number`
     *
     * **Initial value**: `duration`
    */
    yoyoDuration?: Number,
    /**
     * Delay the animation in milliseconds
     *
     * **Syntax**: `delay: Number`
     *
     * **Initial value**: `0`
    */
    delay?: Number,
    /**
     * Delay the animation once at first play if repeat is on - in milliseconds
     *
     * **Syntax**: `delayOnce: Number`
     *
     * **Initial value**: `0`
    */
    delayOnce?= false,
    /**
     * Animation duration in milliseconds : Number
     *
     * **Syntax**: `duration: Number`
     *
     * **Initial value**: `300`
    */
    duration?= 300,
}

interface ScrollToOptions {
    /**
     * Scroll horizontally on the x-axis
     *
     * **Syntax**: `x: DomElement | CssSelector | Number(scrollPosition) | "max"`
    */
    x: Number | String | Element,
    /**
     * Scroll vertically on the y-axis
     *
     * **Syntax**: `y: DomElement | CssSelector | Number(scrollPosition) | "max"`
    */
    y: Number | String | Element,
    /**
     * Scroll vertically on the x-axis by a numaric value
     *
     * **Syntax**: `byX: ( - | + )Number`
    */
    byX: Number,
    /**
     * Scroll vertically on the y-axis by a numaric value
     *
     * **Syntax**: `byY: ( - | + )Number`
    */
    byY: Number,
    /**
     * Determine the scroll behavior
     *
     * **Syntax**: `behavior: "none" | "smooth"`
     * 
     * **Initial value**: `"none"`
    */
    behavior?: "none" | "smooth",
    /**
     * Control scrolling animation speed (pixel per second) if (bahavior === "smooth")
     *
     * **Syntax**: `pps: Number`
     * 
     * **Initial value**: `30`
    */
    pps?= 30,
    /**
     * Offset vertically on the y-axis from the destination.
     *
     * **Syntax**: `offsetY: Number`
     * 
     * **Initial value**: `0`
    */
    offsetY?= 0,
    /**
     * Offset vertically on the x-axis from the destination.
     *
     * **Syntax**: `offsetX: Number`
     * 
     * **Initial value**: `0`
    */
    offsetX?= 0,
}
type GlobalEventHandlersEventMap =
    "abort" |
    "animationcancel" |
    "animationend" |
    "animationiteration" |
    "animationstart" |
    "auxclick" |
    "blur" |
    "cancel" |
    "canplay" |
    "canplaythrough" |
    "change" |
    "click" |
    "close" |
    "contextmenu" |
    "cuechange" |
    "dblclick" |
    "drag" |
    "dragend" |
    "dragenter" |
    "dragexit" |
    "dragleave" |
    "dragover" |
    "dragstart" |
    "drop" |
    "durationchange" |
    "emptied" |
    "ended" |
    "error" |
    "focus" |
    "focusin" |
    "focusout" |
    "gotpointercapture" |
    "input" |
    "invalid" |
    "keydown" |
    "keypress" |
    "keyup" |
    "load" |
    "loadeddata" |
    "loadedmetadata" |
    "loadstart" |
    "lostpointercapture" |
    "mousedown" |
    "mouseenter" |
    "mouseleave" |
    "mousemove" |
    "mouseout" |
    "mouseover" |
    "mouseup" |
    "pause" |
    "play" |
    "playing" |
    "pointercancel" |
    "pointerdown" |
    "pointerenter" |
    "pointerleave" |
    "pointermove" |
    "pointerout" |
    "pointerover" |
    "pointerup" |
    "progress" |
    "ratechange" |
    "reset" |
    "resize" |
    "scroll" |
    "securitypolicyviolation" |
    "seeked" |
    "seeking" |
    "select" |
    "selectionchange" |
    "selectstart" |
    "stalled" |
    "submit" |
    "suspend" |
    "timeupdate" |
    "toggle" |
    "touchcancel" |
    "touchend" |
    "touchmove" |
    "touchstart" |
    "transitioncancel" |
    "transitionend" |
    "transitionrun" |
    "transitionstart" |
    "volumechange" |
    "waiting" |
    "wheel"

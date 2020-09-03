import "./CSSProprties";
import { gsap } from "gsap";

class domElement {
  constructor(targets) {
    this.element = typeof targets === "string" ? document.querySelectorAll(targets) : [targets];
  }
}

/**
 * Sets or returns the HTML content (inner HTML) of an element or array of elements
 *
 * **Syntax**: `S(targets).text(String)`
 *
 * @param {String} [text]
 *
 * @returns `Array of Strings | String | Void`
 *
 */
domElement.prototype.text = function (text) {
  if (text) {
    for (let i = 0; i < this.element.length; i++) {
      this.element[i]["innerHTML"] = text;
    }
  } else {
    let results = [];
    for (let i = 0; i < this.element.length; i++) {
      results.push(this.element[i]["innerHTML"]);
    }
    return results.length === 1 ? results[0] : results;
  }
};

/**
 * Set a specific style of an element/s using different CSS properties.
 *
 * **Syntax**: `S(targets).css({CSSPropertiy:`Value`, ...})`
 *
 * @param {CssObject} CSSObjectOfProprties
 *
 * @returns `Void`
 *
 * */
domElement.prototype.css = function (CSSObjectOfProprties) {
  for (let i = 0; i < this.element.length; i++) {
    for (const key in CSSObjectOfProprties) {
      this.element[i].style[key] = CSSObjectOfProprties[key];
    }
  }
  return this;
};

/**
 * Removes the specified CSS property from a CSS declaration block.
 *
 * **Syntax**: `S(targets).removeCss(propertyName)`
 *
 * @param {String} propertyName
 *
 * @returns `Void`
 *
 */
domElement.prototype.removeCss = function (propertyName) {
  for (let i = 0; i < this.element.length; i++) {
    this.element[i]["style"].removeProperty(propertyName);
  }
  return this;
};

/**
 * inserts nodes before the first child of node.
 *
 * **Syntax**: `S(targets).prepend(element)`
 *
 * @param {Element} element
 *
 */
domElement.prototype.prepend = function (element) {
  for (let i = 0; i < this.element.length; i++) {
    this.element[i].prepend(element);
  }
  return this;
};

/**
 * Inserts nodes after the last child of node.
 *
 * **Syntax**: `S(targets).append(element)`
 *
 * @param {Element} element
 *
 */
domElement.prototype.append = function (element) {
  for (let i = 0; i < this.element.length; i++) {
    this.element[i].append(element);
  }
  return this;
};

/**
 * Returns a copy of node. If deep is true, the copy also includes the node's descendants.
 *
 * **Syntax**: `S(targets).clone(deep)`
 *
 * @param {boolean} [deep=false]
 *
 */
domElement.prototype.clone = function (deep) {
  return this.element[0].cloneNode(deep);
};

/**
 * Set Attribute for an HTML element
 *
 * **Syntax**: `S(targets).attr(attribute, value)`
 *
 * @param {"autocomplete" | "async" | "alt" | "class" | "contenteditable" | "dir" | "draggable" | "hidden" | "id" | "lang" | "style" | "src" | "title" | "translate"| "value"} attribute attribute name
 * @param {String} value attribute value
 *
 */
domElement.prototype.attr = function (attribute, value) {
  for (let i = 0; i < this.element.length; i++) {
    this.element[i].setAttribute(attribute, value);
  }
  return this;
};

/**
 * Remove Attribute from an HTML element
 *
 * **Syntax**: `S(targets).removeAttr(attribute)`
 *
 * @param {"autocomplete" | "async" | "alt" | "class" | "contenteditable" | "dir" | "draggable" | "hidden" | "id" | "lang" | "style" | "src" | "title" | "translate"| "value"} attribute attribute name
 *
 */
domElement.prototype.removeAttr = function (attribute) {
  for (let i = 0; i < this.element.length; i++) {
    this.element[i].removeAttribute(attribute);
  }
  return this;
};

/**
 * Set or Return the value attribute from an HTML element
 *
 * **Syntax**: `S(targets).val(value)`
 *
 * @param {Object} value HTML element value
 *
 * @returns Value attribute | Void
 *
 */
domElement.prototype.val = function (value) {
  if (value || value === 0) {
    this.element[0].value = value;
  } else {
    return this.element[0].value;
  }
};

/**
 * Add event listener to an HTML element
 *
 * **Syntax**: `S(targets).on(event, functionHandler)`
 *
 * @param {String} event event listener name
 * @param {Event} functionHandler HTML element value
 *
 */
domElement.prototype.on = function (event, functionHandler) {
  for (let i = 0; i < this.element.length; i++) {
    this.element[i]["addEventListener"](event, functionHandler);
  }
  return this;
};

/**
 * Remove event listener from an HTML element
 *
 * **Syntax**: `S(targets).off(event, functionHandler)`
 *
 * @param {String} event event listener name
 * @param {Function} functionHandler HTML element value
 *
 */
domElement.prototype.off = function (event, functionHandler) {
  for (let i = 0; i < this.element.length; i++) {
    this.element[i]["removeEventListener"](event, functionHandler);
  }
  return this;
};

/**
 * Remove an HTML element from document
 *
 * **Syntax**: `S(targets).remove()`
 *
 */
domElement.prototype.remove = function () {
  for (let i = 0; i < this.element.length; i++) {
    this.element[i].remove();
  }
  return this;
};

/**
 * Blur an HTML element
 *
 * **Syntax**: `S(targets).blur()`
 *
 */
domElement.prototype.blur = function () {
  for (let i = 0; i < this.element.length; i++) {
    this.element[i].blur();
  }
  return this;
};

/**
 * Focus an HTML element
 *
 * **Syntax**: `S(targets).focus()`
 *
 */
domElement.prototype.focus = function () {
  for (let i = 0; i < this.element.length; i++) {
    this.element[i].focus();
  }
  return this;
};

/**
 * Get the style value of an HTML element
 *
 * **Syntax**: `S(targets).getStyle(property, toNumber)`
 *
 * @param {String} property CSS property name
 * @param {Boolean} [toNumber]
 *
 * determine the return value type `(string|number)`
 *
 *  **Initial Value** `False`
 *
 * @returns the value of CSS property
 *
 */
domElement.prototype.getStyle = function (property, toNumber = false) {
  if (property && !toNumber) {
    return window.getComputedStyle(this.element[0]).getPropertyValue(property);
  } else if (toNumber && property) {
    return parseFloat(window.getComputedStyle(this.element[0]).getPropertyValue(property));
  } else {
    return window.getComputedStyle(this.element[0]);
  }
};

/**
 * Get the style variable from DOM Root
 *
 * **Syntax**: `S().getCssVar(variable, toNumber)`
 *
 * @param {String} variable CSS variable name
 * @param {Boolean} [toNumber]
 *
 * determine the return value type (string|number)
 *
 *  **Initial Value** `False`
 *
 * @returns the value of the CSS variable
 *
 */
domElement.prototype.getCssVar = function (variable, toNumber = false) {
  if (!toNumber) {
    return window.getComputedStyle(document.documentElement).getPropertyValue(variable);
  } else if (toNumber) {
    return parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue(variable));
  }
};

/**
 * Set a Css style variable
 *
 * **Syntax**: `S().setCssVar(variable, value)`
 *
 * @param {String} variable CSS variable name
 * @param {String} value CSS variable value
 *
 */
domElement.prototype.setCssVar = function (variable, value) {
  return document.documentElement.style.setProperty(variable, value);
};

/**
 * A wait function to be used only inside async functions
 *
 * **Syntax**: `await S().wait(time)`
 *
 * @param {Number} time time in milliseconds
 *
 */
domElement.prototype.wait = function (time) {
  return new Promise((e) => setTimeout(e, time));
};

/**
 * Animate a dom element through CSS properties
 *
 * **Syntax**: `S(targets).animate(from, to, options)`
 *
 * @param {CssObject} [from]
 *
 * Start the animation from CSSValues
 *
 * **Syntax**: `{CSSPropertiy:`(value | +-value)`}`
 *
 * **Initial value**: `auto`
 *
 * @param {CssObject} to
 *
 * Animate to CSSValues
 *
 * **Syntax**: `{CSSPropertiy:`"value" | +-value`}`
 *
 * @param {Object} [options]
 *
 * @param {String} [options.transitionProperty=all]
 *
 * Animation transition-property
 *
 * **Syntax**: `transition: "CSSPropertiy, ..."`
 *
 * **Initial value**: `all`
 *
 * @param {"ease" | "linear" | "ease-in" | "ease-out" | "ease-in-out" | "step-start" | "step-end" | "steps(int,start|end)" | "cubic-bezier(n,n,n,n)" | "initial" | "inherit"} [options.ease=ease]
 *
 * Animation transition-timing-function
 *
 * **Syntax**: `ease: ease | linear | ease-in | ease-out | ease-in-out | step-start | step-end | steps(int,start|end) | cubic-bezier(n,n,n,n) | initial | inherit`
 *
 * **Initial value**: `ease`
 *
 * @param {Boolean} [options.cleanUp=false]
 *
 * Remove CSS styles after finishing the animation
 *
 * **Syntax**: `cleanUp: true | false`
 *
 * **Initial value**: `false`
 *
 * @param {String} [options.clearProp]
 *
 * Remove CSS Property during the animation.
 *
 * **Syntax**: `clearProp: "CSS Property"`
 * *
 * @param {Boolean} [options.dispalyNone=false]
 *
 * Set the animated element style to display: none after cleanUp
 *
 * Works only if cleanUp === true
 *
 * **Syntax**: `dispalyNone: true | false`
 *
 * **Initial value**: `false`
 *
 * @param {Number} [options.repeat=0]
 *
 * Repeat the animation number of times. infinity if equals to -1
 *
 * **Syntax**: `repeat: Number`
 *
 * **Initial value**: `0`
 *
 * @param {Boolean} [options.yoyo=false]
 *
 * animate the element back to the first state.
 *
 * **Syntax**: `yoyo: true | false`
 *
 * **Initial value**: `false`
 *
 * @param {Number} [options.yoyoDelay=options.delay]
 *
 * Delay the yoyo animation in milliseconds
 *
 * **Syntax**: `yoyoDelay: Number`
 *
 * **Initial value**: `delay`
 *
 * @param {Number} [options.yoyoDuration=options.duration]
 *
 * Yoyo animation duration in milliseconds
 *
 * **Syntax**: `yoyoDuration: Number`
 *
 * **Initial value**: `duration`
 *
 * @param {Number} [options.delay=0]
 *
 * Delay the animation in milliseconds
 *
 * **Syntax**: `delay: Number`
 *
 * **Initial value**: `0`
 *
 * @param {Number} [options.delayOnce=0]
 *
 * Delay the animation once at first play if repeat is on - in milliseconds
 *
 * **Syntax**: `delayOnce: Number`
 *
 * **Initial value**: `0`
 *
 * @param {Number} [options.duration=300]
 *
 * Animation duration in milliseconds : Number
 *
 * **Syntax**: `duration: Number`
 *
 * **Initial value**: `300`
 *
 */
domElement.prototype.animate = async function (from, to, options) {
  from = from || {};
  to = to || {};
  options = options || {};
  options.transitionProperty = options.transitionProperty || "all";
  options.ease = options.ease || "ease";
  options.cleanUp = options.cleanUp || false;
  options.dispalyNone = options.dispalyNone || false;
  options.delay = options.delay || 0;
  options.delayOnce = options.delayOnce || false;
  options.yoyoDelay = options.yoyoDelay || options.yoyoDelay === 0 ? options.yoyoDelay : options.delay;
  options.yoyoDuration = options.yoyoDuration || options.yoyoDuration === 0 ? options.yoyoDuration : options.duration;
  options.duration = options.duration || 300;

  if (options.delay) await this.wait(options.delay);

  const fromObject = {};
  const toObject = {};

  this.css({
    transitionDuration: `${0}ms`,
  });

  for (const key in from) {
    if (typeof from[key] === "number") {
      from[key] = parseInt(window.getComputedStyle(this.element[0])[key]) + parseInt(from[key]) + "px";
      fromObject[key] = from[key];
    }
    fromObject[key] = from[key];
    this.element[0].style[key] = from[key];
  }

  await this.wait(10);

  this.css({
    transitionDuration: `${options.duration}ms`,
    transitionProperty: options.transitionProperty,
    transitionTimingFunction: options.ease,
  });

  for (const key in to) {
    if (typeof to[key] === "number") {
      to[key] = parseInt(window.getComputedStyle(this.element[0])[key]) + parseInt(to[key]) + "px";
      toObject[key] = to[key];
    }
    if (!from[key]) {
      const getStyle = window.getComputedStyle(this.element[0])[key];
      this.element[0].style[key] = getStyle;
      fromObject[key] = getStyle;
      await this.wait(10);
    }
    this.element[0].style[key] = to[key];
    toObject[key] = to[key];
  }

  if (options.clearProp) {
    this.removeCss(options.clearProp);
  }

  if (options.cleanUp && !options.repeat) {
    await this.wait(options.duration + 30);
    for (const key in fromObject) this.css({ [key]: "" });
    this.css({
      transitionDuration: "",
      transitionProperty: "",
      transitionTimingFunction: "",
    });
    if (options.dispalyNone) this.css({ display: "none" });
  }

  if (options.yoyo) {
    await this.wait(options.duration + 30);
    this.animate(toObject, fromObject, {
      duration: options.yoyoDuration,
      delay: options.yoyoDelay,
      ease: options.ease,
      transitionProperty: options.transitionProperty,
      clearProp: options.clearProp,
    });
    await this.wait(options.yoyoDuration + options.yoyoDelay + 30);
  }

  if (options.repeat) {
    if (options.repeat === -1) {
      if (!options.yoyo) {
        await this.wait(options.duration + 30);
        this.css(fromObject);
        this.css({
          transitionDuration: `${0}ms`,
          transitionProperty: options.transitionProperty,
          transitionTimingFunction: options.ease,
        });
      }
      this.animate(from, to, { ...options, delay: options.delayOnce ? 0 : options.delay, delayOnce: false });
    } else if (options.repeat > 0) {
      if (!options.yoyo) {
        await this.wait(options.duration + 30);
        this.css(fromObject);
        this.css({
          transitionDuration: `${0}ms`,
          transitionProperty: options.transitionProperty,
          transitionTimingFunction: options.ease,
        });
      }
      this.animate(from, to, {
        repeat: options.repeat--,
        delay: options.delayOnce ? 0 : options.delay,
        delayOnce: false,
        ...options,
      });
    }
  }
};
/**
 *
 * @param {Object} options
 *
 * @param {(String|Number)} options.x
 *
 * Scroll horizontally on the x-axis
 *
 * **Syntax**: `x: DomElement | CssSelector | Number(scrollPosition) | "max"`
 *
 * @param {(String|Number)} options.y
 *
 * Scroll vertically on the y-axis
 *
 * **Syntax**: `y: DomElement | CssSelector | Number(scrollPosition) | "max"`
 *
 * @param {Number} options.byX
 *
 * Scroll vertically on the x-axis by a numaric value
 *
 * **Syntax**: `byX: ( - | + )Number`
 *
 * @param {Number} options.byY
 *
 * Scroll vertically on the y-axis by a numaric value
 *
 * **Syntax**: `byY: ( - | + )Number`
 *
 * @param {"none" | "smooth"} [options.behavior="none"]
 *
 * Determine the scroll behavior
 *
 * **Syntax**: `behavior: "none" | "smooth"`
 *
 * **Initial value**: `"none"`
 *
 * @param {Number} [options.pps=10]
 *
 * Control scrolling animation speed (pixel per second) if (bahavior === "smooth")
 *
 * **Syntax**: `pps: Number`
 *
 * **Initial value**: `30`
 *
 * @param {Number} [options.offsetY=0]
 *
 * Offset vertically on the y-axis from the destination.
 *
 * **Syntax**: `offsetY: Number`
 *
 * **Initial value**: `0`
 *
 * @param {Number} [options.offsetX=0]
 *
 * Offset horizontally on the x-axis from the destination.
 *
 * **Syntax**: `offsetX: Number`
 *
 * **Initial value**: `0`
 */
domElement.prototype.scrollTo = function (options) {
  options = options || {};
  options.pps = options.pps || 30;
  options.behavior = options.behavior || "none";
  options.offsetX = options.offsetX || 0;
  options.offsetY = options.offsetY || 0;

  const container = this.element[0];
  const isRoot = container.tagName === "BODY" || container === window;

  const getMaxScroll = (axis) => {
    let maxScroll;
    if (!isRoot) {
      maxScroll = axis === "x" ? container.scrollWidth - container.clientWidth : container.scrollHeight - container.clientHeight;
    } else if (isRoot) {
      maxScroll = axis === "x" ? document.body.scrollWidth - window.innerWidth : document.body.scrollHeight - window.innerHeight;
    }
    return maxScroll;
  };

  const scroll = (axis) => {
    const element =
      typeof options[axis] === "string" && options[axis] !== "max" ? document.querySelectorAll(options[axis])[0] : [options[axis]][0];

    const elRect =
      typeof options[axis] === "number" || options[axis] === "max"
        ? 0
        : isRoot
        ? element.getBoundingClientRect()[axis]
        : element.getBoundingClientRect()[axis] - container.getBoundingClientRect()[axis];

    let pos;
    if (axis === "x") {
      pos = !isNaN(container.scrollLeft) ? container.scrollLeft : container.scrollX;
    } else {
      pos = !isNaN(container.scrollTop) ? container.scrollTop : container.scrollY;
    }

    const destination =
      typeof options[axis] === "number"
        ? options[axis] + (options.offsetX || options.offsetY)
        : options[axis] === "max"
        ? getMaxScroll(axis) + (options.offsetX || options.offsetY)
        : pos + elRect + (options.offsetX || options.offsetY);

    const count = pos < destination ? "inc" : "dec";

    if (options.behavior === "smooth") {
      const scrolltl = () => {
        count === "inc" ? Math.min((pos += options.pps), destination) : Math.max((pos -= options.pps), destination);

        axis === "x" ? container.scrollTo({ left: pos }) : container.scrollTo({ top: pos });

        if ((pos < destination && count === "inc") || (pos > destination && count === "dec")) {
          window.requestAnimationFrame(scrolltl);
        }
      };

      window.requestAnimationFrame(scrolltl);
    } else axis === "x" ? container.scrollTo({ left: destination }) : container.scrollTo({ top: destination });
  };

  const scrollBy = (axis) => {
    let pos;
    if (axis === "x") {
      pos = !isNaN(container.scrollLeft) ? container.scrollLeft : container.scrollX;
    } else {
      pos = !isNaN(container.scrollTop) ? container.scrollTop : container.scrollY;
    }

    const destination = axis === "x" ? options.byX : options.byY;

    let count = 0;

    if (options.behavior === "smooth") {
      const tl = () => {
        count = Math.min((count += options.pps), Math.abs(destination));

        axis === "x"
          ? container.scrollTo({ left: destination < 0 ? pos - count : pos + count })
          : container.scrollTo({ top: destination < 0 ? pos - count : pos + count });

        if (count < Math.abs(destination)) {
          window.requestAnimationFrame(tl);
        }
      };

      window.requestAnimationFrame(tl);
    } else axis === "x" ? container.scrollTo({ left: pos + destination }) : container.scrollTo({ top: pos + destination });
  };

  if (!isNaN(options.x)) {
    scroll("x");
  } else if (!isNaN(options.y)) {
    scroll("y");
  } else if (!isNaN(options.byX)) {
    scrollBy("x");
  } else if (!isNaN(options.byY)) {
    scrollBy("y");
  }
};

/**
 * inject a circle progress bar to target element
 *
 * **Syntax** `S(target).progress(options)`
 *
 * @param {Object} options
 * @param {Number} options.input
 *
 * ProgressBar value percentage
 *
 * **Initial value**: `0`
 *
 * @param {String} [options.text]
 *
 * Text innerHTML
 *
 * **Initial value**: `Input%`
 *
 * @param {CssObject} [options.textStyle]
 *
 * Text CSS Style object `Ex: textStyle : {fontSize: "10px"}`
 *
 * **Initial value**: `none`
 *
 * @param {String} [options.textColor]
 *
 * Text color
 *
 * **Initial value**: `#2b2b2b`
 *
 * @param {String} [options.backgroundcolor]
 *
 * ProgressBar backgroundcolor
 *
 * **Initial value**: `none`
 *
 * @param {Number} [options.strokeWidth]
 *
 * ProgressBar stroke width
 *
 * **Initial value**: `10`
 *
 * @param {"butt" | "none" | "initial" | "inherit" | "round" | "revert" | "unset" | "square"} [options.strokeLinecap]
 *
 * ProgressBar stroke linecap
 *
 * **Initial value**: `round`
 *
 * @param {String} [options.strokeBackgroundColor]
 *
 * ProgressBar stroke backgroundColor
 *
 * **Initial value**: `lightgrey`
 *
 * @param {"grade"} [options.strokeColor]
 *
 * ProgressBar stroke color
 *
 *  Set to solid color or to gradiant color if `grade`
 *
 * **Initial value**: `grade`
 *
 * @param {String} [options.gradeColor1]
 *
 * ProgressBar stroke gradiant first color `if strokeColor === "grade"`
 *
 * **Initial value**: `red`
 *
 * @param {String} [options.gradeColor2]
 *
 * ProgressBar stroke gradiant second color `if strokeColor === "grade"`
 *
 * **Initial value**: `orange`
 *
 * @param {Boolean} [options.animation]
 *
 * ProgressBar fill animation
 *
 * **Initial value**: `true`
 *
 */
domElement.prototype.progress = function (options) {
  options = options || {};
  options.input = options.input || 0;
  options.text = options.text || options.input + "%";
  options.textStyle = options.textStyle || {};
  options.textColor = options.textColor || "#2b2b2b";
  options.backgroundcolor = options.backgroundcolor || "none";
  options.strokeWidth = options.strokeWidth || 10;
  options.strokeLinecap = options.strokeLinecap || "round";
  options.strokeBackgroundColor =
    options.strokeBackgroundColor === "grade" ? "url(#progressGardeColor)" : options.strokeBackgroundColor || "url(#progressGardeColor)";
  options.strokeColor = options.strokeColor === "grade" ? "url(#progressGardeColor)" : options.strokeColor || "url(#progressGardeColor)";
  options.gradeColor1 = options.gradeColor1 || "red";
  options.gradeColor2 = options.gradeColor2 || "orange";
  options.animation = options.animation === undefined ? true : options.animation;

  const circumference = 2 * Math.PI * (100 - options.strokeWidth / 2);
  const calcProgress = circumference - (options.input * circumference) / 100;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  const circlePg = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  const gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
  const stopColor1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  const stopColor2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  S(svg)
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("viewBox", "0 0 200 200")
    .attr("fill", "none")
    .attr("xmlns", "http://www.w3.org/2000/svg");
  S(txt)
    .attr("x", "50%")
    .attr("y", "0")
    .attr("dy", "57%")
    .attr("text-anchor", "middle")
    .attr("fill", options.textColor)
    .css({ fontSize: "50px", fontWeight: "bold", fontFamily: "sans-serif" })
    .css(options.textStyle)
    .text(options.text);
  S(circle)
    .attr("cx", "100")
    .attr("cy", "100")
    .attr("r", 100 - options.strokeWidth / 2)
    .attr("stroke", options.strokeColor)
    .attr("stroke-width", options.strokeWidth)
    .attr("stroke-dashoffset", circumference)
    .attr("stroke-dasharray", circumference)
    .attr("stroke-linecap", options.strokeLinecap)
    .attr("transform", "rotate(270)")
    .attr("transform-origin", "center");
  S(circlePg)
    .attr("cx", "100")
    .attr("cy", "100")
    .attr("r", 100 - options.strokeWidth / 2)
    .attr("fill", options.backgroundcolor)
    .attr("stroke", options.strokeBackgroundColor)
    .attr("stroke-width", options.strokeWidth);
  S(gradient).attr("x1", "0%").attr("x2", "0%").attr("y1", "0%").attr("y2", "100%").attr("id", "progressGardeColor");
  S(stopColor1).attr("offset", "0%").attr("stop-color", options.gradeColor1);
  S(stopColor2).attr("offset", "65%").attr("stop-color", options.gradeColor2);
  gradient.appendChild(stopColor1);
  gradient.appendChild(stopColor2);
  svg.appendChild(gradient);
  svg.appendChild(circlePg);
  svg.appendChild(circle);
  svg.appendChild(txt);
  this.append(svg);

  gsap.to(circle, { strokeDashoffset: calcProgress, duration: options.animation ? 2 : 0, ease: "back" });
};
/**
 *
 * @param {(String|Element)} targets - CssSelector | DomElement/s
 */
export const S = (targets) => new domElement(targets);

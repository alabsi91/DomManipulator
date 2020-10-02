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
export async function animate(from, to, options) {
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
}

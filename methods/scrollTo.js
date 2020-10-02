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
export function scrollTo(options) {
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
      typeof options[axis] === "string" && options[axis] !== "max"
        ? document.querySelectorAll(options[axis])[0]
        : [options[axis]][0];

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
}

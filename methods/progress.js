import { S } from 'selector_dom';
import { requestFrame } from './requestFrame';

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
 * ProgressBar stroke  gradiant first color `if strokeColor === "grade"`
 *
 * **Initial value**: `red`
 *
 * @param {String} [options.gradeColor2]
 *
 * ProgressBar stroke  gradiant second color `if strokeColor === "grade"`
 *
 * **Initial value**: `orange`
 *
 * @param {Boolean} [options.useMask]
 *
 * Use SVG mask over progressCircle
 *
 * **Initial value**: `false`
 *
 * @param {Number} [options.maskDasharray]
 *
 * Mask dasharray size
 *
 * **Initial value**: `2`
 *
 * @param {"butt" | "none" | "initial" | "inherit" | "round" | "revert" | "unset" | "square"} [options.maskLinecap]
 *
 * Mask dasharray linecap
 *
 * **Initial value**: `butt`
 *
 * @param {Boolean} [options.animation]
 *
 * ProgressBar fill animation
 *
 * **Initial value**: `true`
 *
 * @param {Object} [options.animationOptions]
 *
 * ProgressBar fill animation options
 *
 *  {replay , yoyo, yoyoDelay, yoyoDuration, delay, duration, easingFunction}
 *
 * **Initial value**: `{easingFunction: "easeOutBack", duration: 2000, delay: 300}`
 *
 */
export function progress(options) {
  options = options || {};
  options.input = options.input || 0;
  options.text = options.text || options.input + '%';
  options.textStyle = options.textStyle || {};
  options.textColor = options.textColor || '#2b2b2b';
  options.backgroundcolor = options.backgroundcolor || 'none';
  options.strokeWidth = options.strokeWidth || 10;
  options.strokeLinecap = options.strokeLinecap || 'round';
  options.strokeBackgroundColor =
    options.strokeBackgroundColor === 'grade'
      ? 'url(#progressGardeColor)'
      : options.strokeBackgroundColor || 'url(#progressGardeColor)';
  options.strokeColor =
    options.strokeColor === 'grade' ? 'url(#progressGardeColor)' : options.strokeColor || 'url(#progressGardeColor)';
  options.gradeColor1 = options.gradeColor1 || 'red';
  options.gradeColor2 = options.gradeColor2 || 'orange';
  options.animation = options.animation === undefined ? true : options.animation;
  options.animationOptions = options.animationOptions || {};
  options.cleanBeforeInject = options.cleanBeforeInject === undefined ? true : options.cleanBeforeInject;
  options.maskDasharray = options.maskDasharray || 2;
  options.maskLinecap = options.maskLinecap || 'butt';

  const R = 100 - options.strokeWidth / 2;
  const circumference = 2 * Math.PI * R;
  const calcProgress = circumference - (options.input * circumference) / 100;

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  const circlePg = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  const circleMask = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  const mask = document.createElementNS('http://www.w3.org/2000/svg', 'mask');
  const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
  const stopColor1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
  const stopColor2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
  S(svg)
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('viewBox', '0 0 200 200')
    .attr('fill', 'none')
    .attr('xmlns', 'http://www.w3.org/2000/svg');
  S(txt)
    .attr('x', '50%')
    .attr('y', '0')
    .attr('dy', '57%')
    .attr('text-anchor', 'middle')
    .attr('fill', options.textColor)
    .css({ fontSize: '50px', fontWeight: 'bold', fontFamily: 'sans-serif' })
    .css(options.textStyle)
    .text(options.text);
  S(circle)
    .attr('cx', '100')
    .attr('cy', '100')
    .attr('r', R)
    .attr('stroke', options.strokeColor)
    .attr('stroke-width', options.strokeWidth + 'px')
    .attr('stroke-dashoffset', options.animation ? circumference + 'px' : calcProgress + 'px')
    .attr('stroke-dasharray', circumference + 'px')
    .attr('stroke-linecap', options.strokeLinecap)
    .attr('transform', 'rotate(270)')
    .attr('transform-origin', 'center')
    .attr('mask', options.useMask ? 'url(#progressMask)' : '');
  S(circleMask)
    .attr('cx', '100')
    .attr('cy', '100')
    .attr('r', R)
    .attr('stroke', 'white')
    .attr('stroke-width', options.strokeWidth + 'px')
    .attr('stroke-dashoffset', '550px')
    .attr('stroke-dasharray', options.maskDasharray + 'px')
    .attr('stroke-linecap', options.maskLinecap);
  S(circlePg)
    .attr('cx', '100')
    .attr('cy', '100')
    .attr('r', R)
    .attr('fill', options.backgroundcolor)
    .attr('stroke', options.strokeBackgroundColor)
    .attr('stroke-width', options.strokeWidth + 'px');
  S(gradient).attr('x1', '0%').attr('x2', '0%').attr('y1', '0%').attr('y2', '100%').attr('id', 'progressGardeColor');
  S(mask).attr('id', 'progressMask');
  S(stopColor1).attr('offset', '0%').attr('stop-color', options.gradeColor1);
  S(stopColor2).attr('offset', '65%').attr('stop-color', options.gradeColor2);
  if (options.useMask) {
    mask.appendChild(circleMask);
    svg.appendChild(mask);
  }
  if (options.strokeColor === 'url(#progressGardeColor)' || options.strokeBackgroundColor === 'url(#progressGardeColor)') {
    gradient.appendChild(stopColor1);
    gradient.appendChild(stopColor2);
    svg.appendChild(gradient);
  }
  svg.appendChild(circlePg);
  svg.appendChild(circle);
  svg.appendChild(txt);
  if (options.cleanBeforeInject) this.text(' ');
  this.append(svg);

  if (options.animation) {
    requestFrame(
      {
        from: circumference,
        to: calcProgress,
        duration: 2000,
        delay: 300,
        easingFunction: 'easeOutBack',
        ...options.animationOptions,
      },
      x => {
        S(circle).css({ strokeDashoffset: x + 'px' });
      }
    );
  }
}

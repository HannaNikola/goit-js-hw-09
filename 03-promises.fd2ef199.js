!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("6JpON");function a(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}var u=document.querySelector(".form"),l=document.querySelector('input[name="delay"]'),c=document.querySelector('input[name="step"]'),d=document.querySelector('input[name="amount"]');document.querySelector("button");u.addEventListener("submit",(function(n){n.preventDefault();var t=parseInt(d.value),o=parseInt(l.value),r=parseInt(c.value);if(r<0||o<0||t<=0)e(i).Notify.warning("Invalid input values. Please enter valid values.");else for(var u=o,s=1;s<=t;s++)a(s,u).then((function(n){var t=n.position,o=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(i).Notify.warning("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),u+=r}))}();
//# sourceMappingURL=03-promises.fd2ef199.js.map
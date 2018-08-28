export function throttle(fn, delay) {
  let timer;
  return function(...arg) {
    if (!timer) {
      timer = setTimeout(function() {
        fn(...arg);
        timer = null;
      }, delay);
    }
  };
}

export function debounce(fn, delay) {
  let timer;
  return function(...arg) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(function() {
      fn(...arg);
      timer = null;
    }, delay);
  };
}

export function parseMarkdown() {
  const placeholderReg = /<span class="token punctuation">:<\/span>/gi;
  const reg = new RegExp(`:::imark((.|\n)*):::`);
  let codeBlock = document.querySelector('.language-js');
  const replaced = String(codeBlock.innerHTML)
    .replace(placeholderReg, ':')
    .replace(reg, `<div class="await-point">$1</div>`);
  codeBlock.innerHTML = replaced;
}

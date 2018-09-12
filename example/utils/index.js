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
  let codeBlocks = document.querySelectorAll('pre.language-js');
  let count = 1;
  for (let i = 0; i < codeBlocks.length; i++) {
    const codeBlock = codeBlocks[i];
    const replaced = String(codeBlock.innerHTML)
      .replace(placeholderReg, ':')
      .replace(reg, `<div class="await-point code-${count++}">$1</div>`);
    // ilog.info('replaced', replaced);
    codeBlock.innerHTML = replaced;
  }
}

export function waitPointActive(isActive, className) {
  const wp = document.querySelector(`.${className}`);
  if (isActive) wp.className += ' active';
  else {
    wp.className = wp.className.replace('active', '');
  }
}

export function log(result) {
  const type = result.type === 'confirm' ? 'info' : 'warn';
  ilog[type](result.type, result);
}

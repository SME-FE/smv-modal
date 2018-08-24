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

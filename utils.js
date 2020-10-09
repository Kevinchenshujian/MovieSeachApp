const debounce = (func, delay) => {
  let timeoutId;
  //...rest,accept all arguments, return 一个function
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId); //deboucing an input
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

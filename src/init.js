// eslint-disable-next-line no-extend-native
String.prototype.format = function() {
  let s = this;
  let len = arguments.length;
  if (len === 0) return s;
  for (let i = 0; i < len; i++) {
    s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
  }
  return s;
};

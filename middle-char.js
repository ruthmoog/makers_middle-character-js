(function(exports) {

  function middleChar(string) {
    if (string.length % 2 !== 0) {
      return string[(string.length-1)/2];
    }
    return string[string.length/2 - 1] + string[string.length/2];
  }

  exports.middleChar = middleChar;
})(this);

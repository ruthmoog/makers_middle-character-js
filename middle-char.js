(function(exports) {

  function middleChar(string) {
    var stringMiddle = string.length/2

    if (string.length % 2 !== 0) {
      return string[(string.length-1)/2];
    }
    return string[stringMiddle - 1] + string[stringMiddle];
  }

  exports.middleChar = middleChar;
})(this);

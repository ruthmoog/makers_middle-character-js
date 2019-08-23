(function() {
  function testReturnsString() {
    var string = "A"

    var got = middleChar(string)
    var want = "A"

    if (got !== want)
      throw new Error(`got ${got}, want ${want}`)
  }
  testReturnsString()
})(this);

(function() {
  function testReturnsString() {
    var string = "of"

    var got = middleChar(string)
    var want = "of"

    if (got !== want)
      throw new Error(`got ${got}, want ${want}`)
  }
  testReturnsString()
})(this);

(function() {
  function testReturnsString() {
    var string = "the"

    var got = middleChar(string)
    var want = "h"

    if (got !== want)
      throw new Error(`got ${got}, want ${want}`)
  }
  testReturnsString()
})(this);

(function() {
  function testReturnsString() {
    var string = "test"

    var got = middleChar(string)
    var want = "es"

    if (got !== want)
      throw new Error(`got ${got}, want ${want}`)
  }
  testReturnsString()
})(this);

(function() {
  function testReturnsString() {
    var string = "testy"

    var got = middleChar(string)
    var want = "s"

    if (got !== want)
      throw new Error(`got ${got}, want ${want}`)
  }
  testReturnsString()
})(this);

(function() {
  function testReturnsString() {
    var string = "middle"

    var got = middleChar(string)
    var want = "dd"

    if (got !== want)
      throw new Error(`got ${got}, want ${want}`)
  }
  testReturnsString()
})(this);

(function() {
  function testReturnsString() {
    var string = "testing"

    var got = middleChar(string)
    var want = "t"

    if (got !== want)
      throw new Error(`got ${got}, want ${want}`)
  }
  testReturnsString()
})(this);


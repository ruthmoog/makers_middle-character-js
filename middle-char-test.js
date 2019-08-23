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

// get_middle("test") # => "es"
// get_middle("testing") # => "t"
// get_middle("middle") # => "dd"
// get_middle("A") # => "A"
// get_middle("of") # => "of"
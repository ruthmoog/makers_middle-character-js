(function() {
  function testReturnsStringOf1() {
    var string = "A"

    var got = middleChar(string)
    var want = "A"

    if (got !== want) {
      throw new Error(`got ${got}, want ${want}`)
    } else {
      console.log("Pass: Return a string of length 1")
    }
  } 
  testReturnsStringOf1()
})(this);

(function() {
  function testReturnsStringOf2() {
    var string = "of"

    var got = middleChar(string)
    var want = "of"

    if (got !== want) {
      throw new Error(`got ${got}, want ${want}`)
    } else {
      console.log("Pass: Return a string of length 2")
    }
  }
  testReturnsStringOf2()
})(this);

(function() {
  function testReturnsStringOf3() {
    var string = "the"

    var got = middleChar(string)
    var want = "h"

    if (got !== want) {
      throw new Error(`got ${got}, want ${want}`)
    } else {
      console.log("Pass: Return a string of length 3")
    }
  }
  testReturnsStringOf3()
})(this);

(function() {
  function testReturnsStringOf4() {
    var string = "test"

    var got = middleChar(string)
    var want = "es"

    if (got !== want) {
      throw new Error(`got ${got}, want ${want}`)
    } else {
      console.log("Pass: Return a string of length 4")
    }
  }
  testReturnsStringOf4()
})(this);

(function() {
  function testReturnsStringOf5() {
    var string = "testy"

    var got = middleChar(string)
    var want = "s"

    if (got !== want) {
      throw new Error(`got ${got}, want ${want}`)
    } else {
      console.log("Pass: Return a string of length 5")
    }
  }
  testReturnsStringOf5()
})(this);

(function() {
  function testReturnsStringOf6() {
    var string = "middle"

    var got = middleChar(string)
    var want = "dd"

    if (got !== want) {
      throw new Error(`got ${got}, want ${want}`)
    } else {
      console.log("Pass: Return a string of length 6")
    }
  }
  testReturnsStringOf6()
})(this);

(function() {
  function testReturnsStringOf7() {
    var string = "testing"

    var got = middleChar(string)
    var want = "t"

    if (got !== want) {
      throw new Error(`got ${got}, want ${want}`)
    } else {
      console.log("Pass: Return a string of length 7")
    }
  }
  testReturnsStringOf7()
})(this);

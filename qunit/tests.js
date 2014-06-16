define(function() { 
  QUnit.start();
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  /* require your app components
   * for example, if you have /app/modules/doSomething.js, you can
   * require(['modules/doSomething'], function(theModule) {
   *   // test the things
   * });
   */

  module('QUnit Test Demo');

  test('is a function', function() {
    expect(1);
    stop();
    require(['jquery'], function($) {
      start();
      strictEqual(typeof $, 'function', 'is a function');
    });
  });

  test( "a basic test example", function( assert ) {
      var value = "hello";
      assert.equal( value, "hello", "We expect value to be hello" );
    });


  asyncTest("abcd", 1, function () {
    setTimeout(function () {
        QUnit.start();
        //console.log(nsModel);
        ok(true, "always fine");
    }, 10);
  });

});

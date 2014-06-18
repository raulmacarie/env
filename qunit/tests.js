define(['models/Comments', 'views/comments'],function(Comments, comments) { 
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

  module('simple test');

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

  module('backbone test');
  test("a backbone module test", 2, function() {
    var model = new Comments.Comment();
    model.set('email', 'test');
    ok(Comments, "It works")
    equal( model.get("email"), "test", "email is correct!" );  
    //model.set('test');
  });

  module('react test');
  test("a react view test", 1, function() {
    ok(comments, "It works")
    //equal( model.get("email"), "test", "email is correct!" );  
    //model.set('test');
  })  
});

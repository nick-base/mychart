;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory())
    : typeof define === 'function' && define.amd
    ? define(factory)
    : ((global = global || self), (global.Chart = factory()))
})(this, function () {
  console.info('hello world')
  var index = {
    hello: 'hello',
  }

  return index
})

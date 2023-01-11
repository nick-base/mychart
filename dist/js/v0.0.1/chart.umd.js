!(function (e, o) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = o())
    : 'function' == typeof define && define.amd
    ? define(o)
    : ((e = 'undefined' != typeof globalThis ? globalThis : e || self).Chart = o())
})(this, function () {
  console.info('hello world')
  return { hello: 'hello' }
})

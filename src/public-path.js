// /src/public-path.js
// @sse https://webpack.docschina.org/guides/public-path/
;(function () {
  if (window.__POWERED_BY_QIANKUN__) {
    // eslint-disable-next-line
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
    // __webpack_public_path__ = `${process.env.BASE_URL}/`
  }
})()
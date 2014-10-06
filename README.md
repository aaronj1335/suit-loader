# SUIT CSS loader for webpack

***DEPRECATED***: This loader is way too simplistic. I made it before i really
knew how the webpack ecosystem works with css. I would recommend using [`rework-webpack-loader`](https://github.com/aaronj1335/rework-webpack-loader)
instead.

This is a simple loader for [webpack][] that allows your application to use
[the preprocessor][suitpre] for the [SUIT CSS][] project.

## Example Usage:

In your `webpack.config.js`:

```js
module.exports = {
  /* ... */

  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader!suit-loader'}

      /* ... */
    ]
  }
};
```

[webpack]: http://webpack.github.io
[suitpre]: https://github.com/suitcss/preprocessor
[SUIT CSS]: http://suitcss.github.io

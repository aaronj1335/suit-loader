# SUIT CSS loader for webpack

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

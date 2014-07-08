Injectify include helper [![Build Status](https://travis-ci.org/ftdebugger/injectify-include.svg)](https://travis-ci.org/ftdebugger/injectify-include)
========================

Additional helper for handlebars, include template into template. Work similar to partials but with `browserify`.

Install
-------

```
npm install --save-dev injectify injectify-include
```

Usage
-----

Configure `gulp`:

```js
    var gulp = require("gulp"),
        browserify = require("browserify"),
        source = require("vinyl-source-stream"),
         
    require("injectify-include/inject");
        
    gulp.task('js', function () {
        var bundleStream = browserify('./src/index.js')
            .transform(require("injectify"))
            .bundle();

        return bundleStream
            .pipe(source('index.js'))
            .pipe(gulp.dest('dist'));
    });
```

In file `./src/index.js` require injectify `include` helper:

```js
require("injectify-include");
```

Now you can use `include` helper in your templates:

```handlebars
<h1>Example</h1>

<p>{{include "./other-template.hbs"}}</p>

<p>You also may pass params to template</p>

<p>{{include "./other-template.hbs" value=123 id=userId}}</p>
```

`include` helper works like original browserify `require`. You can require modules relative to template file or
node_modules directory.

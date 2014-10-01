# gulp-browserify-protect 

protect your browserify bundle from other module loaders using the global namespace

## Getting Started
Install the module with: `npm install --save-dev gulp-browserify-protect`

```javascript
var browserifyProtect = require('gulp-browserify-protect');

gulp.task('browserify', function() {

    return gulp.src(srcDir + 'js/app.js')
        .pipe(browserify())
        .pipe(browserifyProtect())
        .pipe(gulp.dest('./public/js/'))
        .pipe( livereload( server ));
});
```

This adds

```js
window._require = window.require;
window.require = undefined;
window._define = window.define;
window.define = undefined;

// browersified bundle goes here

window.require = window._require;
window.define = window._define;
```

to your browserify bundle.

## why?

I have found this useful for embedding code on a page that uses a legacy module loder such as require.js


## License
Copyright (c) 2014 Matthew Conlen. Licensed under the MIT license.

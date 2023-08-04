### App-specific modules without a huge relative path string.

#### Installation
```
npm i -S requier
```

#### Usage

First, you need to set a `directories.requier` property inside your project's `package.json`. This property specifies the folder where your app-specific modules reside.

You can read more about the `directories` property in [NPM's documentation][1].

Example:
```json
{
  "name": "my-awesome-project",
  "version": "0.42.0",
  "main": "index.js",

  //...

  "directories": {
    "requier": "./my_app_modules"
  }
}
```

Then you can start using it:
```js
var r = require('requier');

var mySpecificModule = r('my-specific-module');
```

#### Little tip
To avoid boilerplate, you can register `requier` as a global inside your main file:
```js
// inside your app's main file...
globals.requier = require('requier');

// inside any other file
var mySpecificModule = requier('my-specific-module');
```

#### Testing
This is an experimental package that I wrote in an afternoon. Its code is also very small (15 lines). As such, I didn't bother to write any tests yet.

[1]: https://docs.npmjs.com/files/package.json#directories

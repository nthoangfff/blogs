# root-module
Find root module with folder and package.json.

This module is very useful to support/find additonal configurations, plugins & extensions for your libraries.

For example, if you have a node module called `awesome-module` and want to allow your clients to set configuration parameters. Two most common ways of doing this is via

1. custom configuration file - say `.awesomerc` in the projects root folder
2. a custom entry in root package.json file

[babel](https://babeljs.io/docs/usage/babelrc/), [eslint](http://eslint.org/docs/user-guide/configuring) and other libraries follow this pattern.

To simply load the root package.json:
```
var rootModule = require('root-module'); 
var m = rootModule();
var packageJson = require(m.packageFile);
```

To locate the custom configuration file:
```
var rootModule = require('root-module'); 
var m = rootModule();
var awesomeConfig = m.findFile('.awesomerc');
```

## Installation

Install via npm

```sh
$ npm install root-module --save
```

## Usage

```
var rootModule = require('root-module'); 
var m = rootModule();

console.log(m.module);
console.log(m.folder);
console.log(m.packageFile);

var myConfig = m.findFile('my-config.json');
```

## License

  [MIT](LICENSE)
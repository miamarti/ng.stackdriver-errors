# Do it. Or do not. There is no attempt. =)
Client-side AngularJS library for Stackdriver Error Reporting

![IMG](https://s.aficionados.com.br/imagens/yoda-starwars.jpg)

"Fear is the way to the dark side. Fear leads to anger, anger leads to hatred, hatred leads to suffering."

-- Yoda

<p>
  <a href="https://gitter.im/miamarti/ng.stackdriver-errors?utm_source=share-link&utm_medium=link&utm_campaign=share-link" target="_self"><img src="https://badges.gitter.im/Join%20Chat.svg"></a>
  <img src="https://img.shields.io/badge/version-1.1.0-blue.svg">
  <img src="https://img.shields.io/github/license/mashape/apistatus.svg">
  <a href="https://github.com/miamarti/ng.stackdriver-errors/tarball/master"><img src="https://img.shields.io/github/downloads/atom/atom/latest/total.svg"></a>
  <a href="http://waffle.io/miamarti/ng.stackdriver-errors"><img alt='Stories in Ready' src='https://badge.waffle.io/miamarti/ng.stackdriver-errors.svg?label=ready&title=Ready' height="21" /></a>
</p>

[on npm](https://www.npmjs.com/package/ng-stackdriver-errors)

### Dependencies
Download make the dependencies of simpleGridMaterial and include in your project
* https://angularjs.org/
* https://material.angularjs.org/latest/
* https://github.com/miamarti/stackdriver-errors-js

### Installation
```
$ npm install ng-stackdriver-errors --save
```

### Module AngularJS include
```
require('angular');

angular.module('Requisition', [
  require('angular-animate'),
  require('angular-material'),
  require('ng-stackdriver-errors') //Component Injection
])
```

## Implementation
Inside config:
```
angular.module('example').config(function($exceptionHandlerStdProvider) {

  $exceptionHandlerStdProvider.config({
    key: '<my-api-key>',
    projectId: '<my-project-id>',
    service: '<my-service>',              // (optional)
    version: '<my-service-version>'       // (optional)
  });

  $exceptionHandlerStdProvider.setUser('XUXA-010203');
});
```

Inside the Controller:
```
angular.module('example').controller('ExampleController', function ($exceptionHandlerStd) {

  try {
  ...
  } catch(e) {
    $exceptionHandlerStd.throw(e);
  }
});
```

## Parameters

| Name          | Type          | provider  | Controller | Description                                                  |
| ------------- | ------------- | --------- | ---------- | ------------------------------------------------------------ |
| config        | Method        | true      | false      | sets the stackdriver-errors configuration data               |
| setUser       | Method        | true      | true       | sets the user to be logged on to stackdriver-errors          |
| throw         | Method        | true      | true       | throws an exception                                          |


## Development
Edit `version.js` and run the command below:

```
$ npm run build
```

## Metrics

[![Throughput Graph](https://graphs.waffle.io/miamarti/ng.stackdriver-errors/throughput.svg)](https://waffle.io/miamarti/ng.stackdriver-errors/metrics/throughput)

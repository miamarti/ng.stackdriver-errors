# See how simple =)

[![Join the chat at https://gitter.im/miamarti/ng.stackdriver-errors](https://badges.gitter.im/miamarti/ng.stackdriver-errors.svg)](https://gitter.im/miamarti/ng.stackdriver-errors?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
Client-side AngularJS library for Stackdriver Error Reporting


<p>
  <a href="https://gitter.im/miamarti/ng.stackdriver-errors?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge" target="_blank"><img src="https://badges.gitter.im/Join%20Chat.svg"></a>
  <img src="https://img.shields.io/badge/version-1.2.0-blue.svg">
  <img src="https://img.shields.io/bower/v/bootstrap.svg">
  <img src="https://img.shields.io/github/license/mashape/apistatus.svg">
  <a href="https://github.com/miamarti/ng.stackdriver-errors/tarball/master"><img src="https://img.shields.io/github/downloads/atom/atom/latest/total.svg"></a>
  <a href="http://waffle.io/miamarti/ng.stackdriver-errors"><img alt='Stories in Ready' src='https://badge.waffle.io/miamarti/ng.stackdriver-errors.svg?label=ready&title=Ready' height="21" /></a>
</p>

[on npm](https://www.npmjs.com/package/ng.stackdriver-errors)

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
  require('ng.stackdriver-errors') //Component Injection
])
```

## Implementation
```
...
```

## Parameters

| Name          | Type          | provider  | Controller | Description                                                  |
| ------------- | ------------- | --------- | ---------- | ------------------------------------------------------------ |
| config        | Method        | true      | false      | ...                                                          |
| setUser       | Method        | true      | true       | ...                                                          |
| throw         | Method        | true      | true       | ...                                                          |


## Development
Edit `version.js` and run the command below:

```
$ npm run build
```

## Metrics

[![Throughput Graph](https://graphs.waffle.io/miamarti/ng.stackdriver-errors/throughput.svg)](https://waffle.io/miamarti/ng.stackdriver-errors/metrics/throughput)

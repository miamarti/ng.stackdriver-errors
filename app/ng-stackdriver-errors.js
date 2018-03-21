window.StackTrace = require('stacktrace-js');
window.StackdriverErrorReporter = require('stackdriver-errors-js').StackdriverErrorReporter;

(function(window, angular) {
  'use strict';

  angular.module('ngStackdriverErrors', ['ng']).provider('$exceptionHandlerStd', function() {
    var $this = {
      stackDrive: new window.StackdriverErrorReporter(),

      /**
       * [description]
       * @param  {[type]} exception [description]
       * @param  {[type]} cause     [description]
       * @return {[type]}           [description]
       */
      report: function(e, cause) {
        $this.consoleLog && console.error(e);
        $this.stackDrive.report(e, cause);
      },

      /**
       * [description]
       * @param  {[type]} data [description]
       * @return {[type]}      [description]
       */
      config: function(data) {
        $this.consoleLog = data.consoleLog;
        $this.stackDrive.start(data);
      },

      /**
       * [description]
       * @param  {[type]} userId [description]
       * @return {[type]}        [description]
       */
      setUser: function(userId) {
        $this.stackDrive.setUser(userId + ' [' + screen.availWidth + 'x' + screen.availHeight + ']');
      },

      /**
       * [description]
       * @return {[type]} [description]
       */
      $get: function() {
        return {
          throw: $this.stackDrive.report.bind($this.stackDrive),
          setUser: $this.setUser.bind($this)
        };
      }
    };

    return $this;
  });
})(window, window.angular);

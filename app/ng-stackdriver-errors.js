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
      report: function(exception, cause) {
        $this.stackDrive.report(exception, cause);
      },

      /**
       * [description]
       * @param  {[type]} data [description]
       * @return {[type]}      [description]
       */
      config: function(data) {
        $this.stackDrive.start(data);
      },

      /**
       * [description]
       * @param  {[type]} userId [description]
       * @return {[type]}        [description]
       */
      setUser: function(userId) {
        $this.stackDrive.setUser(userId);
      },

      /**
       * [description]
       * @return {[type]} [description]
       */
      $get: function() {
        return {
          throw: $this.stackDrive.report.bind($this.stackDrive),
          setUser: $this.stackDrive.setUser.bind($this)
        };
      }
    };

    return $this;
  });
})(window, window.angular);

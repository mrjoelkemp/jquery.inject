;(function ($) {
  'use strict';

  $.extend({

    inject: function (scripts) {
      if (typeof scripts === 'undefined') throw new Error('nothing to inject');

      if (! $.isArray(scripts)) scripts = [scripts];

      var promise = $.ajax({
        dataType: 'script',
        cache: true,
        url: scripts[0]
      });

      // Fetch scripts in the order in which they were listed
      return reduce(scripts.slice(1), function (promise, script) {
        return promise.then(function () {
          return $.ajax({
            dataType: 'script',
            cache: true,
            url: script
          });
        });
      }, promise);
    }
  });

  function reduce (list, iterator, memo) {
    (typeof memo === 'undefined') && (memo = 0);

    list.forEach(function (val) {
      memo = iterator(memo, val);
    });

    return memo;
  }

})(window.$);
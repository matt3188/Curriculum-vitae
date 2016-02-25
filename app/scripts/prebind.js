(function($) {
  'use strict';

  $.fn.preBind = function(type, data, fn) {
    this.each(function() {
      var $this = $(this);

      $this.bind(type, data, fn);

      var currentBindings = $.data($this[0], 'events');
      if ($.isArray(currentBindings[type])) {
        currentBindings[type].unshift(currentBindings[type].pop());
      }
    });

    return this;
  };

})();

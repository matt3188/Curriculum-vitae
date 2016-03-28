/* global $: false */

/**
 * Animate on
 */

(function() {
  'use strict';

  var animateOn = {
    selectors: {
      hidden: '.hideme',
      mainHero: '.main-hero'
    },
    class: {
      hide: 'hideme',
      show: 'showme'
    }
  };

  animateOn.init = function() {
    $( window ).scroll(function() {
      // Check the location of each element
      $( animateOn.selectors.hidden ).each(function() {
        var bottomofObject = $( this ).offset().top + $( this ).outerHeight();
        var bottomOfWindow = $( window ).scrollTop() + $( window ).height();
        // If the object is completely visible in the window, add the 'showme' class
        if ( bottomOfWindow >= bottomofObject ) {
          $( this ).addClass( animateOn.class.show );
        }
      });
    });

    animateOn.intro();
  };

  animateOn.intro = function() {
    setTimeout(function() {
      $( animateOn.selectors.mainHero ).addClass( animateOn.class.show );
    }, 1000);
  };

  return animateOn.init();

}());

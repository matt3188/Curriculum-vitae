var app = {
  config: {
    trackCtas: true,
    ctaSelector: '.cta',
    ctaBefore: function( $button ) {
      'use strict';
      return $button;
    }
  },
  titles: {
    contact: 'Please feel free to contact me'
  },
  selectors: {
    mainContent: '.main-content',
    heading: '.heading',
    ctaBanner: '.cta-banner',
    hidden: '.hideme'
  },
  class: {
    odd: 'odd',
    even: 'even',
    shadow: 'has-shadow'
  }
};

(function() {
  'use strict';

  return app;

})();

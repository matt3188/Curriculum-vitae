var app = {
  config: {
    trackCtas: true,
    ctaSelector: '.cta',
    ctaBefore: function($button) {
      'use strict';
      return $button;
    }
  },
  mainSections: {
    cta: {
      class: 'cta-banner',
      hasShadow: false
    },
    experience: {
      hasShadow: false,
      class: 'experience',
      listEl: 'ul',
      listClass: 'horizontal-list experience-list clearfix'
    }
  },
  sections: {
    info: '.my-info',
    cta: '.cta-banner',
    experienceList: '.experience-list',
    socialList: '.social-list'
  },
  titles: {
    experience: 'Work Experience',
    contact: 'Please feel free to contact me'
  },
  ctas: {
    github: 'https://github.com/matt3188',
    linkedin: 'https://uk.linkedin.com/in/matt-coleman-a178783a',
    twitter: 'https://twitter.com/Matt__Coleman',
    facebook: 'https://www.facebook.com/matt.coleman.562',
    downloadCV: ''
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

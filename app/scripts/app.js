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
    infoList: '.info-list',
    cta: '.cta-banner',
    experienceList: '.experience-list',
    socialList: '.social-list'
  },
  titles: {
    hero: 'Hero',
    experience: 'Work Experience',
    contact: 'Please feel free to contact me'
  },
  info: {
    name: 'Matt Coleman',
    age: 27,
    currentJob: 'Front-end developer'
  },
  contactInfo: {
    address: '320 Wricklemarsh, SE3 8ES',
    email: 'hello@matt-coleman.co.uk',
    phone: '07905 404 858'
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
    mainHero: '.main-hero',
    ctaBanner: '.cta-banner',
    hidden: '.hideme'
  },
  class: {
    show: 'showme',
    hide: 'hideme',
    odd: 'odd',
    even: 'even',
    shadow: 'has-shadow'
  }
};
(function() {
  'use strict';

  return app;

})();

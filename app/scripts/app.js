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
    skills: {
      // class: 'professional-skills',
      listEl: 'ul',
      listClass: 'stacked-list skill-list'
    },
    experience: {
      hasShadow: false,
      class: 'experience',
      listEl: 'ul',
      listClass: 'horizontal-list experience-list clearfix'
    },
    interests: {
      class: 'interests'
    }
  },
  sections: {
    info: '.my-info',
    infoList: '.info-list',
    cta: '.cta-banner',
    // skills: '.professional-skills',
    // skillsList: '.skill-list',
    experienceList: '.experience-list',
    socialList: '.social-list'
  },
  titles: {
    hero: 'Hero',
    // skills: 'Professional Skills',
    experience: 'Work Experience',
    contact: 'Please feel free to contact me',
    interests: 'Interests'
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
  // skills: {
  //   'Wordpress': 80,
  //   'Javascript': 65,
  //   'HTML & CSS': 95,
  //   'Photoshop': 90,
  //   'Drupal': 45
  // },
  selectors: {
    mainContent: '.main-content',
    heading: '.heading',
    menuToggle: '#menu-toggle',
    mainMenu: '.nav-main',
    mainHero: '.main-hero',
    ctaBanner: '.cta-banner',
    hidden: '.hideme'
  },
  class: {
    show: 'showme',
    hide: 'hideme',
    odd: 'odd',
    even: 'even',
    open: 'open',
    visible: 'on-screen',
    shadow: 'has-shadow'
  }
};
(function() {
  'use strict';
  return app;
})();

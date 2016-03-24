var app = {
  config: {
    trackCtas: true,
    ctaSelector: '.cta',
    ctaBefore: function($button) {
      return $button;
    }
  },
  mainSections: {
    intro: {
      class: 'intro'
    },
    cta: {
      class: 'cta-banner',
      hasShadow: false
    },
    skills: {
      class: 'professional-skills',
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
    intro: '.intro',
    cta: '.cta-banner',
    skills: '.professional-skills',
    skillsList: '.skill-list',
    experienceList: '.experience-list',
    socialList: '.social-list'
  },
  titles: {
    hero: 'Hero',
    skills: 'Professional Skills',
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
  intro: 'My key skills include but are not limited too HTML, CSS3, Javascript/ jQuery, Wordpress development, Web Design, Cross browser compatibility and implementing JQuery Plugins. I hand code all my work using SublimeText and I adopt a DRY approach, implementing SMACSS along the way. I’m proficient with Adobe’s Creative suite including Photoshop and Illustrator and I love semantic and scalable code. I am a Front-end developer with a strong background in design. This has allowed me to bridge the gap between design and development and bring well rounded solutions to the user. I also have experience with JIRA and Agile methodology. I am passionate and creative with a keen eye for detail. Nothing makes me happier than a well thought out website paying particular attention to how a user can interact and navigate through a site. Summary of skills: HTML, CSS3/SASS, Javascript/ jQuery, Grunt/ Gulp, Git, Wordpress, Web Design.',
  skills: {
    'Wordpress': 80,
    'Javascript': 65,
    'HTML & CSS': 95,
    'Photoshop': 90,
    'Drupal': 45
  },
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

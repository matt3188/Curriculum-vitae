/**
 * Matt's CV
 */

(function () {
  "use strict";

  var app = {
    sections: {
      skills: '.skill-list'
    },
    info: {
      name: 'Matt Coleman',
      address: '320 Wricklemarsh, SE3 8ES',
      age: 27,
      phone: '07905 404 858',
      email: 'hello@matt-coleman.co.uk',
    },
    links: {
      github: 'https://github.com/matt3188',
      linkedin: 'https://uk.linkedin.com/in/matt-coleman-a178783a',
      twitter: 'https://twitter.com/Matt__Coleman',
      facebook: 'https://www.facebook.com/matt.coleman.562'
    },
    skills: {
      'Wordpress': 80,
      'Javascript': 60,
      'HTML & CSS': 60,
      'Photoshop': 95,
      'Drupal': 40,
    }
  };

  app.init = function init() {

    // Populate professional skills
    for (var prop in app.skills) {
      $(app.sections.skills).append('<dt>' + prop + '</dt>' + '<dd data-percentage="' + app.skills[prop] + '"></dd>');
    }

  };

  app.init();

 })();

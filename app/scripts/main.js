/**
 * Matt's CV
 */

(function () {
  "use strict";

  var app = {
    sections: {
      skills: '.professional-skills',
      skillsList: '.skill-list',
      experienceList: '.experience-list',
    },
    titles: {
      skills: 'Professional skills'
    },
    info: {
      name: 'Matt Coleman',
      currentJob: 'Front-end developer',
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
    },
    config: {
      trackCtas: true,
      ctaSelector: '.cta',
      ctaBefore: function($button){ return $button; },
    },
  };

  app.init = function init() {

    app.PopulateTitles();
    app.populateSkills();
    app.populateExperience();
    // app.trackCtas();

  };

  // Titles
  app.PopulateTitles = function() {
    for (var prop in app.titles) {
      $(app.sections.skills).prepend('<h2 class="heading">' + app.titles[prop] + '</h2>');
    }
  };

  // Skills sections
  app.populateSkills = function() {
    // Populate professional skills
    for (var prop in app.skills) {
      $(app.sections.skillsList).append('<dt>' + prop + '</dt>' + '<dd data-percentage="' + app.skills[prop] + '"></dd>');
    }
  };

  app.populateExperience = function() {

    var Class = function(methods) {
      var klass = function() {
          this.initialize.apply(this, arguments);
      };

      for (var property in methods) {
         klass.prototype[property] = methods[property];
      }

      if (!klass.prototype.initialize) klass.prototype.initialize = function(){};

      return klass;
    };

    var Job = new Class ({
      initialize: function(company, startDate, finDate, role, content) {
        this.company = company;
        this.startDate = startDate;
        this.finDate = finDate;
        this.role = role;
        this.content = content;
      },
      toString: function() {
        return  '<time><span class="date-start">' + this.startDate + '</span> - <span class="date-finish">' + this.finDate + '</span></time>' +
                '<h3 class="heading">' + this.company + '</h3>'+
                '<p class="role">' + this.role + '</p>';
      }
    });

    var jobs = {
      popcorn: new Job('Popcorn', 'February 2012', 'August 2014', 'Customer service manager/ Web Developer', 'Lorem ipsum'),
      adnostic: new Job('Adnostic', 'August 2014', 'August 2015', 'Digital Designer', 'Lorem ipsum'),
      dennisDigital: new Job('Dennis Digital', 'August 2015', 'Present', 'Front end developer', 'Lorem ipsum'),
    };

    for (var prop in jobs) {
      $(app.sections.experienceList).append('<li>' + jobs[prop].toString() + '</li>');
    }

  };

  app.trackCtas = function() {
    var $this = this;

    // Set up click listeners for links
    $(app.config.ctaSelector).preBind('click', function(e) {
      var $button = $(this),
      id = $button.attr('id'),
      key = 'single',
      label = $button.attr('data-event-label'),
      href = app.ctas[id];
      if (href !== false) {
        // Update link href
        $button.attr('href', href);
      }
      app.config.ctaBefore($button);
    });
  };

  return app.init();

})();

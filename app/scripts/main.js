/* global $: false */

/**
 * Matt's CV
 */

(function () {
  'use strict';

  var app = {
    config: {
      trackCtas: true,
      ctaSelector: '.cta',
      ctaBefore: function($button){ return $button; }
    },
    sections: {
      info: '.my-info',
      infoList: '.info-list',
      intro: '.intro',
      skills: '.professional-skills',
      skillsList: '.skill-list',
      experienceList: '.experience-list',
      socialList: '.social-list'
    },
    titles: {
      skills: 'Professional Skills',
      experience: 'Work Experience',
      portfolio: 'Portfolio',
      contact: 'Contact me'
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
      facebook: 'https://www.facebook.com/matt.coleman.562'
    },
    intro: 'Short intro to introduce my self',
    skills: {
      'Wordpress': 80,
      'Javascript': 65,
      'HTML & CSS': 95,
      'Photoshop': 90,
      'Drupal': 45
    },
    elements: {
      heading: '.heading',
      contact: '.contact-form'
      contactForm: '.contact-form'
    }
  };

  app.init = function init() {
    app.populateTitles();
    app.populateHero();
    app.populateSocialLinks();
    app.populateIntro();
    app.populateSkills();
    app.populateExperience();
    app.slideToSection();
    app.trackCtas();
  };

  // Titles
  app.populateTitles = function() {
    for (var prop in app.titles) {
      findHeadings();
    }
    // Find all [data-heading] in HTML and insert the
    // correct heading based on app object
    function findHeadings() {
      $('[data-heading="' + prop + '"]').each(function(){
        $(this).attr('data-attr', $(this).text(app.titles[prop]));
      });
    }
  };

  // Main hero
  app.populateHero = function() {
    $(app.sections.info).prepend(
      '<span class="speech-bubble">Hello</span>' +
      '<h1 class="heading main-heading">I\'m <strong>' + app.info.name + '</strong></h1>' +
      '<h2 class="heading sub-heading">' + app.info.currentJob + '</h2>' +
      '<hr />'
    );
    // Makes more sense to put this in the <dl> list so prepend the
    // populated list as it lives in a differnet part of the object
    $(app.sections.infoList).prepend('<dt>Age</dt><dd>' + app.info.age + '</dd>');

    for (var prop in app.contactInfo) {
      $(app.sections.infoList).append('<dt>' + prop + '</dt><dd>' + app.contactInfo[prop] + '</dd>');
    }
  };

  app.populateIntro = function() {
    $(app.sections.intro).append('<p>' + app.intro + '</p>');
  };

  // Skills section
  app.populateSkills = function() {
    for (var prop in app.skills) {
      $(app.sections.skillsList).append('<dt>' + prop + '</dt><dd data-percentage="' + app.skills[prop] + '"></dd>');
    }
  };

  // Social Social links
  app.populateSocialLinks = function() {
    for (var prop in app.ctas) {
      $(app.sections.socialList).append('<li><a id="' + prop + '" class="cta" href="" target="_blank"><i class="icon icon-' + prop + '"></i></a></li>');
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

      if (!klass.prototype.initialize) {
        klass.prototype.initialize = function(){};
      }

      return klass;
    };

    var Job = new Class({
      initialize: function(company, startDate, finDate, role, content) {
        this.company = company;
        this.startDate = startDate;
        this.finDate = finDate;
        this.role = role;
        this.content = content;
      },
      toString: function() {
        return '<time><span class="date-start">' + this.startDate + '</span> - <span class="date-finish">' + this.finDate + '</span></time>' +
               '<h3 class="heading">' + this.company + '</h3>' +
               '<p class="role">' + this.role + '</p>' +
               '<p class="content">' + this.content + '</p>';
      }
    });

    var jobs = {
      popcorn: new Job('Popcorn', 'February 2012', 'August 2014', 'Customer service manager/ Web Developer', 'Lorem ipsum'),
      adnostic: new Job('Adnostic', 'August 2014', 'August 2015', 'Digital Designer', 'Lorem ipsum'),
      dennisDigital: new Job('Dennis Digital', 'August 2015', 'Present', 'Front end developer', 'Lorem ipsum')
    };

    for (var prop in jobs) {
      $(app.sections.experienceList).append('<li class="col-1-2 experience-item"><div class="experience-item-inner">' + jobs[prop].toString() + '</div></li>');
    }

    $('.experience-list li:even').addClass('float-left');
    $('.experience-list li:odd').addClass('float-right');
  };

  app.contactFormValidate = function() {
    $(app.element.contactForm).parsley().on('field:validated', function() {
    var ok = $('.parsley-error').length === 0;
    $('.bs-callout-info').toggleClass('hidden', !ok);
    $('.bs-callout-warning').toggleClass('hidden', ok);
  });
    $(app.elements.contactForm).parsley().on('field:validated', function() {
      var ok = $('.parsley-error').length === 0;
      $('.bs-callout-info').toggleClass('hidden', !ok);
      $('.bs-callout-warning').toggleClass('hidden', ok);
    })
    .on('form:submit', function(e) {

      e.preventDefault();

      var actionurl = e.currentTarget.action;

      $.ajax({
        url: actionurl,
        type: 'post',
        dataType: 'json',
        data: $(app.elements.contactForm).serialize(),
        success: function(data) {
          console.log(data);
        }
      });

    });


  };

  app.slideToSection = function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 800);
          return false;
        }
      }
    });
  };

  // Set up click listeners for links
  app.trackCtas = function() {
    $(app.config.ctaSelector).preBind('click', function() {
      var $button = $(this),
      id = $button.attr('id'),
      href = app.ctas[id];
      if (href !== false) {
        // Update link href
        $button.attr('href', href);
      }
      app.config.ctaBefore($button);
    });
  };

  $(window).scroll( function(){
    /* Check the location of each desired element */
    $('.hideme').each( function(){
      var bottomofObject = $(this).offset().top + $(this).outerHeight();
      var bottomOfWindow = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if( bottomOfWindow > bottomofObject ){
        $(this).animate({
          'opacity': '1'
        }, 500);
      }
    });
  });

  return app.init();

})();

/* global $: false, app: false */

/**
 * Matt's CV
 */

(function() {
  'use strict';

  app.init = function init() {
    app.createSections(function() {
      app.launch();
    });
  };

  app.launch = function() {
    app.contactForm();
    app.populateTitles();
    app.populateHero();
    app.populateSocialLinks();
    // app.populateSkills();
    app.populateExperience();
    app.slideToSection();
    app.menuToogle();
    app.addDownloadbtn();
    app.trackCtas();

    app.animateIn();
  };

  // Creates section skeleton in which to populate with content
  app.createSections = function( callback ) {
    for ( var prop in app.mainSections ) {

      var shadow = app.mainSections[prop].hasShadow;

      $( app.selectors.mainContent ).append(
        '<article id="' + prop + '" class="section ' + app.mainSections[prop].class + ' ' + ( ( shadow === false ) ? '' : app.class.shadow ) + ' ' + app.class.hide + '">' +
        '<h2 class="heading" data-heading="' + prop + '"></h2>' +
        '<' + app.mainSections[prop].listEl + ' class="list ' + app.mainSections[prop].listClass + '"></' + app.mainSections[prop].el + '>'
      );
    }
    callback();
  };

  app.animateIn = function() {
    setTimeout(function() {
      $( app.selectors.mainHero ).addClass( app.class.show );
    }, 1000);
  };

  // Titles
  app.populateTitles = function() {
    for ( var prop in app.titles ) {
      findHeadings();
    }
    // Find all [data-heading] in HTML and insert the
    // correct heading based on app object
    function findHeadings() {
      $( '[data-heading="' + prop + '"]' ).each(function() {
        $( this ).text( app.titles[prop] );
      });
    }
  };

  app.addDownloadbtn = function() {
    $( app.selectors.ctaBanner ).append( '<button id="downloadCV" href="" class="btn btn-download cta">Download CV</button>' );
  };

  // Main hero
  app.populateHero = function() {
    $( app.sections.info ).prepend(
      '<span class="speech-bubble">Hello</span>' +
      '<h1 class="heading main-heading">I\'m <strong>' + app.info.name + '</strong></h1>' +
      '<h2 class="heading sub-heading">' + app.info.currentJob + '</h2>' +
      '<hr />'
    );
    // Makes more sense to put this in the <dl> list so prepend the
    // populated list as it lives in a differnet part of the object
    $( app.sections.infoList ).prepend( '<dt>Age</dt><dd>' + app.info.age + '</dd>' );

    for ( var prop in app.contactInfo ) {
      $( app.sections.infoList ).append( '<dt>' + prop + '</dt><dd>' + app.contactInfo[prop] + '</dd>' );
    }
  };

  // Skills section
  // app.populateSkills = function() {
  //   for ( var prop in app.skills ) {
  //     $( app.sections.skillsList ).append( '<dt>' + prop + '</dt><dd data-percentage="' + app.skills[prop] + '"></dd>' );
  //   }
  // };

  // Social Social links
  app.populateSocialLinks = function() {
    for ( var prop in app.ctas ) {
      $( app.sections.socialList ).append( '<li><a id="' + prop + '" class="cta" href="" target="_blank"><i class="icon icon-' + prop + '"></i></a></li>' );
    }
  };

  app.populateExperience = function() {
    // Setup Job instance
    function Job( company, startDate, endDate, role, content ) {
      this.company = company;
      this.startDate = startDate;
      this.endDate = endDate;
      this.role = role;
      this.content = content;

      this.toString = function() {
        return '<time><span class="date-start">' + this.startDate + '</span> - <span class="date-finish">' + this.endDate + '</span></time>' +
          '<h3 class="heading">' + this.company + '</h3>' +
          '<p class="role">' + this.role + '</p>' +
          '<p class="content">' + this.content + '</p>';
      };
    }

    var jobs = {
      popcorn: new Job( 'Popcorn', 'February 2012', 'August 2014', 'Customer service manager/ Web Developer', 'Lorem ipsum' ),
      adnostic: new Job( 'Adnostic', 'August 2014', 'August 2015', 'Digital Designer', 'Lorem ipsum' ),
      dennisDigital: new Job( 'Dennis Digital', 'August 2015', 'Present', 'Front end developer', 'Lorem ipsum' )
    };

    for ( var prop in jobs ) {
      $( app.sections.experienceList ).append( '<li class="col-1-2 experience-item"><div class="section experience-item-inner">' + jobs[prop].toString() + '</div></li>' );
    }
  };

  app.slideToSection = function() {
    $( 'a[href*="#"]:not([href="#"])' ).click(function() {
      if ( location.pathname.replace(/^\//, '' ) === this.pathname.replace( /^\//, '' ) && location.hostname === this.hostname ) {
        var target = $( this.hash );
        target = target.length ? target : $( '[name=' + this.hash.slice(1) + ']' );
        if ( target.length ) {
          $( 'html, body' ).animate({
            scrollTop: target.offset().top
          }, 800);
          return false;
        }
      }
    });
  };

  app.contactForm = function() {
    $( app.selectors.mainContent ).append('<div class="col-1-2">' +
      '<article id="contact" class="section contact has-shadow hideme">' +
        '<h2 class="heading" data-heading="contact"></h2>' +
        '<form class="form stacked-form">' +
          '<div class="field">' +
            '<label>Name</label>' +
            '<input type="text" name="name" placeholder="Name">' +
          '</div>' +
          '<div class="field">' +
            '<label>Email</label>' +
            '<input type="email" name="email" placeholder="Email">' +
          '</div>' +
          '<div class="field">' +
            '<label>Subject</label>' +
            '<input type="text" name="subject" placeholder="I have a really awesome job for you...">' +
          '</div>' +
          '<div class="field">' +
            '<label>Message</label>' +
            '<input type="text" name="message" placeholder="Message">' +
          '</div>' +
          '<div class="form-controls">' +
            '<input type="submit" value="Submit">' +
          '</div>' +
        '</form>' +
      '</article>' +
    '</div>');
  };

  // Set up click listeners for links
  app.trackCtas = function() {
    $( app.config.ctaSelector ).preBind( 'click', function() {
      var $button = $( this ),
        id = $button.attr( 'id' ),
        href = app.ctas[id];
      if ( href !== false ) {
        // Update link
        $button.attr( 'href', href );
      }
      app.config.ctaBefore( $button );
    });
  };

  $( window ).scroll(function() {
    // Check the location of each element
    $( app.selectors.hidden ).each(function() {
      var bottomofObject = $( this ).offset().top + $( this ).outerHeight();
      var bottomOfWindow = $( window ).scrollTop() + $( window ).height();
      // If the object is completely visible in the window, add the 'showme' class
      if ( bottomOfWindow > bottomofObject ) {
        $( this ).addClass( app.class.show );
      }
    });
  });

  return app.init();

})();

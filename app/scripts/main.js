/* global $: false, app: false */

/**
 * Matt's CV
 */

(function() {
  'use strict';

  app.init = function init() {
    app.launch();
  };

  app.launch = function() {
    app.contactForm();
    app.populateTitles();
    app.slideToSection();
    app.trackCtas();
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

  return app.init();

})();

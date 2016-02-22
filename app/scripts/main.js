/**
 * Matt's CV
 */

(function () {
  "use strict";

  var app = {
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
    }
  };

  app.init = function init() {
    console.log('Welcome');
    var html = template(app);
  };

  app.init();

 })();

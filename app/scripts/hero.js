/**
 * Main Hero
 */

(function() {
  'use strict';

  var hero = {
    settings: {
      hasShadow: true,
      listEl: 'ul'
    },
    selectors: {
      contactList: '.info-list',
      socialListClass: 'social-list',
      myInfo: 'my-info',
      mainHero: 'hero'
    },
    class: {
      shadow: 'has-shadow',
      hide: 'hideme',
      infoList: 'info-list'
    },
    info: {
      age: 27,
      currentJob: 'Front-end developer',
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
    }

  };

  hero.init = function() {
    hero.populatehero();
    hero.contact();
    hero.populateSocialLinks();
    hero.addCV();
  };

  hero.populatehero = function() {
    var heroSection = '';

    heroSection += '<span class="speech-bubble">Hello</span>' +
      '<h1 class="heading main-heading">I\'m <strong>Matt Coleman</strong></h1>' +
      '<h2 class="heading sub-heading">' + hero.info.currentJob + '</h2>' +
      '<hr />' +
      '<dl class="list dl-list info-list"></dl>';

    var innerHero = document.getElementsByClassName( hero.selectors.myInfo );

    for ( var i = 0, l = innerHero.length; i < l; i++ ) {
      innerHero[i].innerHTML += heroSection;
    }

  };

  hero.addCV = function() {
    var cv = '';

    cv += '<div class="section centered-text hideme"><button id="downloadCV" href="" class="btn btn-download cta">Download CV</button></div>';

    var mainHero = document.getElementById( hero.selectors.mainHero );

    mainHero.innerHTML += cv;

  };

  hero.contact = function() {
    var contactInfo = '';

    for ( var prop in hero.info ) {
      contactInfo += '<dt>' + prop + '</dt><dd>' + hero.info[prop] + '</dd>';
    }

    var infoList = document.getElementsByClassName( hero.class.infoList );

    for ( var i = 0, l = infoList.length; i < l; i++ ) {
      infoList[i].innerHTML += contactInfo;
    }

  };

  // Social Social links
  hero.populateSocialLinks = function() {
    var socialList = '';

    for ( var prop in hero.ctas ) {
      socialList += '<li><a id="' + prop + '" class="cta" href="" target="_blank"><i class="icon icon-' + prop + '"></i></a></li>';
    }

    var list = document.getElementsByClassName( hero.selectors.socialListClass );

    for ( var i = 0, l = list.length; i < l; i++ ) {
      list[i].innerHTML += socialList;
    }


  };

  return hero.init();

}());

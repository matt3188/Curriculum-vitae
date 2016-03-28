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
      socialListClass: '.social-list',
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
    }

  };

  var shadow = hero.settings.hasShadow,
    element = ( ( typeof hero.settings.listEl !== 'undefined' ) ? hero.settings.listEl : 'ul' );

  hero.init = function() {
    hero.populatehero();
    hero.contact();
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

    cv += '<div class="section centered-text"><button id="downloadCV" href="" class="btn btn-download cta">Download CV</button></div>';

    var element = document.getElementById( hero.selectors.mainHero );

    element.innerHTML += cv;

  }

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

  return hero.init();

}());

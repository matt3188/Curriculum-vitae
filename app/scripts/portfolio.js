/* global $: false */
/**
 * Portfolio
 */

(function() {
  'use strict';

  var portfolio = {
    settings: {
      sectionName: 'portfolio',
      hasShadow: true
    },
    selectors: {
      portfolioList: '.portfolio-list',
      portfolio: '.portfolio',
      imageList: '.portfolio-image-list'
    },
    class: {
      shadow: 'has-shadow',
      hide: 'hideme',
      listClass: 'horizontal-list portfolio-list',
      linkClass: 'btn btn-link',
      imageListClass: 'horizontal-list portfolio-image-list'
    },
    // Portfolio items
    items: {
      item01: {
        title: 'flipCard',
        client: 'Personal project',
        link: 'http://matt3188.github.io/flipCard/',
        desc: 'I wanted to learn more about Javascript and what better way to learn than to build something you are going to find fun. It\'s basically my interpretation of the popular memory game pairs. Still a working progress, but you get the idea.',
        images: [ 'images/flipcard/flipcard-full.jpg', 'images/flipcard/flipcard1-full.jpg', 'images/flipcard/flipcard2-full.jpg' ]
      },
      item02: {
        title: 'TDi North website',
        client: 'TDi North',
        link: 'http://www.tdi-north.com/',
        desc: 'These guys are a Japanese vehicle tuning specialists for Honda Type-R\'s, S2000\'s, Nissan Skylines, GTR\'s, 350Z and 370Z\'s. Built using HTML and CSS. jQuery used for the home page banners and features a content managed gallery.',
        images: [ 'images/tdi/tdi-full.jpg', 'images/tdi/tdi4-full.jpg', 'images/tdi/tdi5-full.jpg' ]
      },
      item03: {
        title: 'Makeup by Kayleigh',
        client: 'Kayleigh Rowett',
        link: 'http://makeupbykayleigh.com/',
        desc: 'This site was an absoulte pleasure to design and build, I couldn\'t of asked for a nicer client. All done with HTML and CSS with a separate stylesheet for browser that do not support CSS3. Even a bit of jQuery easing chucked in there for good measure.',
        images: [ 'images/mbk/mbk-full.jpg', 'images/mbk/mbk2-full.jpg', 'images/mbk/mbk3-full.jpg', 'images/mbk/mbk4-full.jpg', 'images/mbk/mbk5-full.jpg' ]
      },
      item04: {
        title: 'My First Dance',
        client: 'Candace Scott',
        link: 'http://www.myfirstdance.co.uk/',
        desc: 'Helping people with their first dance on their special day. This site features a bespoke CMS system with an image up-loader and editor enabling the client to crop the images how they like.',
        images: [ 'images/mfd/mfd-full.jpg', 'images/mfd/mfd2-full.jpg', 'images/mfd/mfd3-full.jpg' ]
      },
      item05: {
        title: 'Novo Construction',
        client: 'Novo Construction',
        link: 'http://novoconstruction.co.uk/',
        desc: 'I was approached by a previous client of mine to help the company they worked for with a new website. A builders firm based in Bishop\'s Stortford who specialise in all aspects of residential and commercial works',
        images: [ 'images/novo/novo-full.jpg', 'images/novo/novo2-full.jpg', 'images/novo/novo3-full.jpg' ]
      },
      item06: {
        title: 'Anthony Berry Recruitment',
        client: 'Anthony Berry',
        link: 'http://www.antonyberryassociates.com/',
        desc: 'I was approached by a previous client of mine to help the company they worked for with a new website. A builders firm based in Bishop\'s Stortford who specialise in all aspects of residential and commercial works',
        images: [ 'images/berry/berry-full.jpg', 'images/berry/berry2-full.jpg', 'images/berry/berry3-full.jpg' ]
      }
    }
  };

  var shadow = portfolio.settings.hasShadow,
      element = ( ( typeof portfolio.settings.listEl !== 'undefined' ) ? portfolio.settings.listEl : 'ul' );

  portfolio.init = function() {
    portfolio.setupSection();
    portfolio.populatePortfolio();
    portfolio.slider();
  };

  portfolio.setupSection = function() {
    var portfolioSection = '';

    portfolioSection += '<div class="section' + ' ' + this.settings.sectionName + ' ' + ( ( shadow === false ) ? '' : portfolio.class.shadow ) + ' ' + portfolio.class.hide + '">' +
      '<h2 class="heading">Portfolio</h2>' +
      '<article id="' + this.settings.sectionName + '">' +
      '<' + element + ' id="portfolio-list" class="list ' + this.class.listClass + '"></' + element + '>' +
    '</article></div>';

    document.getElementById( 'main-content' ).innerHTML += portfolioSection;
  };

  portfolio.populatePortfolio = function() {
    var portfolioItem = '';

    for ( var prop in portfolio.items ) {
      var images = '';

      portfolio.items[prop].images = findImages();

      portfolioItem += '<li class="portfolio-item">' +
        '<div class="portfolio-item-inner">' +
          '<h2>' + portfolio.items[prop].title + '</h2>' +
          '<p>' + portfolio.items[prop].desc + '</p>' +
          '<a href="' + portfolio.items[prop].link + '" target="_blank" class="list ' + this.class.linkClass + '">View website</a>' +
        '</div>' +
        '<ul class="list horizontal-list portfolio-image-list">' + images + '</ul>' +
      '</li>';
    }

    document.getElementById( 'portfolio-list' ).innerHTML = portfolioItem;

    function findImages() {
      portfolio.items[prop].images.forEach(function(url) {
        images += '<li class="image"><img src="' + url + '" /></li>';
      });
    }
  };

  portfolio.slider = function() {
    $(' .portfolio-image-list' ).slick();
    $(' #portfolio-list' ).slick();
  };

  return portfolio.init();

}());

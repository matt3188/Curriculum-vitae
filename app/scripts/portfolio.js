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
        images: [ 'images/flipcard/flipcard-full.jpg', 'images/flipcard/flipcard-1.jpg', 'images/flipcard/flipcard-2.jpg' ]
      },
      item02: {
        title: 'TDi North website',
        client: 'TDi North',
        link: 'http://www.tdi-north.com/',
        desc: 'These guys are a Japanese vehicle tuning specialists for Honda Type-R\'s, S2000\'s, Nissan Skylines, GTR\'s, 350Z and 370Z\'s. Built using HTML and CSS. jQuery used for the home page banners and features a content managed gallery.',
        images: [ 'images/tdi/tdi-full.jpg', 'images/tdi/tdi4-full.jpg', 'images/tdi/tdi5-full.jpg' ]
      },
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
          '<a href="' + portfolio.items[prop].link + ' target="_blank" class="list ' + this.class.linkClass + '">View website</a>' +
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

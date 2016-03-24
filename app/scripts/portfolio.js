/**
 * Portfolio
 */

(function() {
  'use strict';

  var portfolio = {
    settings: {
      sectionName: 'portfolio',
      hasShadow: false
    },
    selectors: {
      portfolioList: '.portfolio-list',
      portfolio: '.portfolio',
      imageList: '.portfolio-image-list',
    },
    class: {
      shadow: 'has-shadow',
      hide: 'hideme',
      listClass: 'horizontal-list portfolio-list',
      imageListClass: 'horizontal-list portfolio-image-list'
    },
    // Portfolio items
    items: {
      item01: {
        title: 'TDi North website',
        client: 'TDi North',
        link: 'https://matt3188.github.io/Curriculum-vitae/',
        desc: 'First Description',
        images: ['images/tdi/tdi-full.jpg', 'images/tdi/tdi4-full.jpg', 'images/tdi/tdi5-full.jpg']
      },
      item02: {
        title: 'Second Item title',
        client: 'Second Client',
        link: 'https://matt3188.github.io/Curriculum-vitae/',
        desc: 'Second Description',
        images: ['images/tdi/tdi-full.jpg', 'images/tdi/tdi4-full.jpg', 'images/tdi/tdi5-full.jpg']
      }
    }
  };

  var shadow = portfolio.settings.hasShadow,
      element = ( ( typeof portfolio.settings.listEl !== "undefined" ) ? portfolio.settings.listEl : 'ul'  );

  portfolio.init = function() {
    portfolio.setupSection();
    portfolio.populatePortfolio();
    portfolio.slider();
  };

  portfolio.setupSection = function() {
    var section = '';

    section += '<article id="' + this.settings.sectionName + '" class=section " ' + this.settings.sectionName + ' ' + ( ( shadow === false ) ? '' : portfolio.class.shadow ) + ' ' + portfolio.class.hide + '">' +
      '<h2 class="heading">Portfolio</h2>' +
      '<' + element + ' id="portfolio-list" class="list ' + portfolio.class.listClass + '"></' + element + '>';

    document.getElementById( 'main-content' ).innerHTML += section;
  };

  portfolio.populatePortfolio = function() {
    var portfolioItem = '';

    var findImages = function() {
      portfolio.items[prop].images.forEach(function(url) {
        images += '<li class="image"><img src="' + url + '" /></li>';
      });
    };

    for ( var prop in portfolio.items ) {
      var images = '';

      portfolio.items[prop].images = findImages();

      portfolioItem += '<li class="portfolio-item section hideme has-shadow">' +
        '<div class="portfolio-item-inner">' +
          '<p>' + portfolio.items[prop].title + '</p>' +
          '<p><a href="' + portfolio.items[prop].link + '">Link</a></p>' +
          '<p>' + portfolio.items[prop].desc + '</p>' +
        '</div>' +
        '<ul class="list horizontal-list portfolio-image-list">' + images + '</ul>' +
      '</li>';
    }

    document.getElementById( 'portfolio-list' ).innerHTML = portfolioItem;
  };

  portfolio.slider = function() {
    var portfolioItems = document.querySelector( '#portfolio-list' );
    var portfolioImages = document.querySelectorAll(' .portfolio-image-list' );

    tinySlider({
      container: portfolioItems,
    });
    tinySlider({
      container: portfolioImages
    });
  };

  return portfolio.init();

}());

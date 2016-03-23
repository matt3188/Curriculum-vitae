/**
 * Portfolio
 */

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
      title: 'First Item title',
      client: 'First Client',
      link: 'https://matt3188.github.io/Curriculum-vitae/',
      desc: 'First Description',
      images: ['images/image01.jpg', 'images/image02.jpg']
    },
    item02: {
      title: 'Second Item title',
      client: 'Second Client',
      link: 'https://matt3188.github.io/Curriculum-vitae/',
      desc: 'Second Description',
      images: ['images/image03.jpg', 'images/image04.jpg']
    }
  }
};

var shadow = portfolio.settings.hasShadow,
    element = ( ( typeof portfolio.settings.listEl !== "undefined" ) ? portfolio.settings.listEl : 'ul'  );

portfolio.setupSection = function() {


  $( app.selectors.mainContent ).append(
    '<article id="' + this.settings.sectionName + '" class="section ' + this.settings.sectionName + ' ' + ( ( shadow === false ) ? '' : portfolio.class.shadow ) + ' ' + portfolio.class.hide + '">' +
      '<h2 class="heading">Portfolio</h2>' +
      '<' + element + ' class="list ' + portfolio.class.listClass + '"></' + element + '>'
  );
};

portfolio.populatePortfolio = function(callback) {

  for ( var prop in portfolio.items ) {
    var portfolioItem = document.getElementsByClassName('portfolio-list');

    for (var i = portfolioItem.length - 1; i >= 0; i--) {
      var item = portfolioItem[i];

      if ( typeof prop === 'string' ) {
        item.innerHTML = item.innerHTML +
          '<li class="portfolio-item">' +
            '<p>' + portfolio.items[prop].title + '</p>' +
            '<p><a href="' + portfolio.items[prop].link + '" target="_blank">Link</a></p>' +
            '<p>' + portfolio.items[prop].desc + '</p>' +
            '<' + element + ' class="list ' + portfolio.class.imageListClass + '"></' + element + '>' +
          '</li>';
      }

      if ( typeof prop === 'string' ) {
        for( var k = 0; k < portfolio.items[prop].images.length; k++ ) {
          item.innerHTML = item.innerHTML +
            '<img src="' + portfolio.items[prop].images[k] + '" width="100" />';
        }
      }

    }
  }

  callback();

};

portfolio.setupSection();
portfolio.populatePortfolio(function() {
  // slider.init();
});

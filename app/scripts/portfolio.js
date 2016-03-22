/**
 * Portfolio
 */

var portfolio = {
  settings: {
    sectionName: 'portfolio',
    hasShadow: true,
    listEl: 'ul',
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

portfolio.setupSection = function() {

  var shadow = this.settings.hasShadow,
      element = ( ( typeof this.settings.listEl !== "undefined" ) ? portfolio.settings.listEl : 'ul'  );

  $( app.selectors.mainContent ).append(
    '<article id="' + this.settings.sectionName + '" class="section ' + this.settings.sectionName + ' ' + ( ( shadow === false ) ? '' : portfolio.class.shadow ) + ' ' + portfolio.class.hide + '">' +
    '<h2 class="heading">Portfolio</h2>' +
    '<' + element + ' class="list ' + portfolio.class.listClass + '"></' + element + '>' +
    '<' + element + ' class="list ' + portfolio.class.imageListClass + '"></' + element + '>'
  );
};

portfolio.populatePortfolio = function() {

  // Pull out the rest of the data for Portfolio items
  for ( var prop in portfolio.items ) {
    $( portfolio.selectors.portfolioList ).append( '<li class="' + prop + '">' +
      '<h2 class="heading">' + portfolio.items[prop].title + '</h2>' +
      '<p class="client">' + portfolio.items[prop].client + '</p>' +
      '<a href="' + portfolio.items[prop].link + '" target="_blank">Link</a>' +
      '<p>' + portfolio.items[prop].desc + '</p>' +
    '</li>' );
  }

  // Populate images
  var obj = portfolio;

  function goThroughObj(obj) {
    var htmlObj,
        property;

    for ( property in obj) {
      if ( obj.hasOwnProperty( property ) ) {
        if ( typeof obj[property] === "object" ) {

          goThroughObj( obj[property] );

          var images = obj[property];
          for ( var i = images.length - 1; i >= 0; i-- ) {
            $( '<li><img src="' + images[i] + '" width="100"></li>' ).appendTo( portfolio.selectors.portfolioList );
          }
        }
      }
    }
  }
  function showObjData() {
    var key,
        title,
        element = document.getElementById( 'demo' );

    for ( key in obj ) {
      if ( obj[key] instanceof Array ) {
        goThroughObj( obj[key] );
      }
    }
  }

  $( portfolio.selectors.portfolioList ).append( showObjData );

};

portfolio.setupSection();
portfolio.populatePortfolio();

/**
 * Portfolio
 */

var portfolio = {
  settings: {
    portfolioList: '.portfolio-list',
    portfolio: '.portfolio',
    imageList: '.portfolio-image-list'
  },
  item01: [{
    tile: 'Item title',
    client: 'Client',
    link: 'Link',
    desc: 'Description',
    images: ['images/image01.jpg', 'images/image02.jpg']
  }],
  item02: [{
    tile: 'Item title',
    client: 'Client',
    link: 'Link',
    desc: 'Description',
    images: ['images/image03.jpg', 'images/image04.jpg']
  }]
};


portfolio.populatePortfolio = function() {

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
            // $( portfolio.settings.portfolio ).append( '<li><img src="' + images[i] + '" width="100"></li>' );
            $( '<li><img src="' + images[i] + '" width="100"></li>' ).appendTo( portfolio.settings.portfolioList );
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

  $( portfolio.settings.portfolioList ).append( showObjData );
};

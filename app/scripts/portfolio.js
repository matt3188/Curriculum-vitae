/**
 * Portfolio
 */

var portfolio = {
  settings: {
    portfolioList: '.portfolio-list',
    portfolio: '#demo',
    imageList: '.portfolio-image-list'
  },
  item01: [{
    tile: 'Item title',
    client: 'Client',
    images: ['images/image01.jpg', 'images/image02.jpg'],
    link: 'Link',
    desc: 'Description'
  }],
  item02: [{
    tile: 'Item title',
    client: 'Client',
    images: ['images/image03.jpg', 'images/image04.jpg'],
    link: 'Link',
    desc: 'Description'
  }]
};


portfolio.populatePortfolio = function() {

  var obj = portfolio;

  function buildData(content) {
    var data = document.createElement('p');
    data.innerHTML = content;
    return data;
  }

  function goThroughObj(obj) {
    var htmlObj,
        property;
    for (property in obj) {
      if (obj.hasOwnProperty(property)) {
        if (typeof obj[property] === "object") {
          goThroughObj(obj[property]);
        } else {
          document
            .getElementById('demo')
            .appendChild(buildData(obj[property]));
        }
      }
    }
  }

   function showObjData() {
      var key,
          title,
          element = document.getElementById('demo');

       // clear innerHTML in case user click more than once
       element.innerHTML='';

       for (key in obj) {
           // skip anything that is not an array, ie: x, y
          if (obj[key] instanceof Array) {
              title = '<br/>From ' + key + ' : ';
              element.appendChild(buildData(title));
              // use recursive function
              // to go through each keys/properties
              goThroughObj(obj[key]);
          }
      }
  }

  $( portfolio.settings.portfolio ).append(showObjData);
};

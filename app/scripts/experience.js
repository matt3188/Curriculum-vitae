/**
 * Main Hero
 */

(function() {
  'use strict';

  var experience = {
    settings: {
      sectionName: 'experience',
      hasShadow: false,
      class: 'experience',
      listEl: 'ul',
      listClass: 'horizontal-list experience-list clearfix'
    },
    selectors: {
      jobListClass: 'experience-list'
    }
  };

  var shadow = experience.settings.hasShadow,
    element = ( ( typeof experience.settings.listEl !== 'undefined' ) ? experience.settings.listEl : 'ul' );


  experience.init = function() {
    this.setupSection();
  experience.setupSection = function() {
    var section = '';

    section += '<article id="' + this.settings.sectionName + '" class="section hideme ' + this.settings.sectionName + ' ' + ( ( shadow === false ) ? '' : app.class.shadow ) + ' ' + app.class.hide + '">' +
      '<h2 class="heading">Work Experience</h2>' +
      '<' + element + ' class="list ' + experience.settings.listClass + '"></' + element + '>';

    document.getElementById( 'main-content' ).innerHTML += section;
  };
  return experience.init();

}());

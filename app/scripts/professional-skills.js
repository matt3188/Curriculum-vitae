/**
 * Intro
 */

(function() {
  'use strict';

  var skills = {
    settings: {
      sectionName: 'professional-skills',
      heading: 'Professional Skills',
      hasShadow: true,
      listEl: 'dl'
    },
    selectors: {
      skillsList: '.skill-list'
    },
    class: {
      shadow: 'has-shadow',
      hide: 'hideme',
      listClass: 'stacked-list skill-list'
    },
    skillSet: {
      'Wordpress': 80,
      'Javascript': 65,
      'HTML & CSS': 95,
      'Photoshop': 90,
      'Drupal': 45
    }
  };

  var shadow = skills.settings.hasShadow,
      element = ( ( typeof skills.settings.listEl !== 'undefined' ) ? skills.settings.listEl : 'ul' );

  skills.init = function() {
    skills.setupSection();
    skills.populateskills();
  };

  skills.setupSection = function() {
    var section = '';

    section += '<article id="' + this.settings.sectionName + '" class="section hideme ' + this.settings.sectionName + ' ' + ( ( shadow === false ) ? '' : this.class.shadow ) + ' ' + this.class.hide + '">' +
      '<h2 class="heading">' + this.settings.heading + '</h2>' +
      '<' + element + ' id="skill-list" class="list ' + this.class.listClass + '"></' + element + '>';

    document.getElementById( 'main-content' ).innerHTML += section;
  };

  skills.populateskills = function() {
    var skillsSection = '';

    skillsSection += skillList();

    function skillList() {
      for ( var prop in skills.skillSet ) {
        $( skills.selectors.skillsList ).append( '<dt>' + prop + '</dt><dd data-percentage="' + skills.skillSet[prop] + '"></dd>' );
      }
    }

    document.getElementById( this.settings.sectionName ).innerHTML += skillsSection;
  };

  return skills.init();

}());

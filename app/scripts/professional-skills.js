/**
 * Intro
 */

(function() {
  'use strict';

  var professionalSkills = {
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
      listClass: 'horizontal-list skill-list'
    },
    skills: {
      'Wordpress': 80,
      'Javascript': 65,
      'HTML & CSS': 95,
      'Photoshop': 90,
      'Drupal': 45
    }
  };

  var shadow = professionalSkills.settings.hasShadow,
      element = ( ( typeof professionalSkills.settings.listEl !== 'undefined' ) ? professionalSkills.settings.listEl : 'ul' );

  professionalSkills.init = function() {
    professionalSkills.setupSection();
    professionalSkills.populateprofessionalSkills();
  };

  professionalSkills.setupSection = function() {
    var section = '';

    section += '<article id="' + this.settings.sectionName + '" class="section hideme ' + this.settings.sectionName + ' ' + ( ( shadow === false ) ? '' : this.class.shadow ) + ' ' + this.class.hide + '">' +
      '<h2 class="heading">' + this.settings.heading + '</h2>' +
      '<' + element + ' id="skill-list" class="list ' + this.class.listClass + '"></' + element + '>';

    document.getElementById( 'main-content' ).innerHTML += section;
  };

  professionalSkills.populateprofessionalSkills = function() {
    var professionalSkillsSection = '';

    professionalSkillsSection += skills();

    function skills() {
      for ( var prop in app.skills ) {
        $( app.sections.skillsList ).append( '<dt>' + prop + '</dt><dd data-percentage="' + app.skills[prop] + '"></dd>' );
      }
    }


    document.getElementById( this.settings.sectionName ).innerHTML += professionalSkillsSection;
  };


  return professionalSkills.init();

}());

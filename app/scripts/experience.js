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
    this.setupJob();
  };

  experience.setupSection = function() {
    var section = '';

    section += '<article id="' + this.settings.sectionName + '" class="section hideme ' + this.settings.sectionName + ' ' + ( ( shadow === false ) ? '' : app.class.shadow ) + ' ' + app.class.hide + '">' +
      '<h2 class="heading">Work Experience</h2>' +
      '<' + element + ' class="list ' + experience.settings.listClass + '"></' + element + '>';

    document.getElementById( 'main-content' ).innerHTML += section;
  };

  experience.setupJob = function() {

    function Job( company, startDate, endDate, role, content ) {
      this.company = company;
      this.startDate = startDate;
      this.endDate = endDate;
      this.role = role;
      this.content = content;

      this.toString = function() {
        return '<time><span class="date-start">' + this.startDate + '</span> - <span class="date-finish">' + this.endDate + '</span></time>' +
          '<h3 class="heading heading-employer">' + this.company + '</h3>' +
          '<p class="role">' + this.role + '</p>' +
          '<p class="content">' + this.content + '</p>';
      };
    }
    var jobs = {
    };

    var jobList = '';

    for ( var prop in jobs ) {
      jobList += '<li class="col-1-2 experience-item"><div class="section experience-item-inner">' + jobs[prop].toString() + '</div></li>';
    }

    var jobListEl = document.getElementsByClassName( experience.selectors.jobListClass );

    for ( var i = 0, j = jobListEl.length; i < j; i++ ) {
      jobListEl[i].innerHTML += jobList;
    }

  };

  return experience.init();

}());

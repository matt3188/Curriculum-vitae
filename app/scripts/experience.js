/* global app: false */

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
    var experienceSection = '';

    experienceSection += '<article id="' + this.settings.sectionName + '" class="section hideme ' + this.settings.sectionName + ' ' + ( ( shadow === false ) ? '' : app.class.shadow ) + ' ' + app.class.hide + '">' +
      '<h2 class="heading">Work Experience</h2>' +
      '<' + element + ' class="list ' + experience.settings.listClass + '"></' + element + '>';

    document.getElementById( 'main-content' ).innerHTML += experienceSection;
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
      dennisDigital: new Job( 'Dennis Digital', 'August 2015', 'Present', 'Front end developer', 'Working with an eclectic group of Designers, Backend Developers, UX designers and of course Front -end Developers, I have been exposed to a lot of different technologies. Working predominately on maintaining Dennis Publishings current manifest of Drupal sites has allowed me to dive into the Drupal world at the deep end. It has sharpened my Javascript skills as the team is always striving for perfection in their user experience, making sure that the users journey is not obstructed in anyway. Moving from a company that created smaller products for their clients to one which works on ones that are continually growing has been a huge learning curve for me. Working with the biggest team I have worked with to date, I have learned the huge importance of collaboration. Working the Agile way has also helped me develop as a person as well as a Front-end Developer.' ),
      adnostic: new Job( 'Adnostic', 'August 2014', 'August 2015', 'Digital Designer', 'During my time at Adnostic I was able to increase my skills in Javascript and have had a good exposure to UI and UX. Working on smaller projects has allowed me to get involved in a varied amount of work from fully responsive adverts to ones with a heavy amount of user interaction. Being exposed to the advertising world has helped me develop my knowledge and understanding of user experience. I have always tried to ensure that my code is as modular and reusable as possible to allow my colleagues to see how I have approached each project with the intention of creating a higher standard of code and practice.' ),
      popcorn: new Job( 'Popcorn', 'February 2012', 'August 2014', 'Customer service manager/ Web Developer', 'Whilst my job title was Customer Service Manager my duties and skills lied within web design. With my design background and my passion for web development, Popcorn decided that it was in their best interests to restructure the business and move me away from Maintenance and allow me to concentrate on my true passion and further develop my skills as a web designer. I am highly proficient in Adobe Creative Suite\'s Photoshop, InDesign and Illustrator as well as HTML5 and CSS3. Using the latest technologies that CSS3 brings I am able to create beautiful and exciting websites for Popcorn. I can use jQuery plugins to my advantage and often use JQuery to bring the flat designs to life.' )
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

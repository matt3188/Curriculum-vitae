/**
 * Intro
 */

(function() {
  'use strict';

  var intro = {
    settings: {
      sectionName: 'intro',
      hasShadow: true
    },
    selectors: {
      portfolioList: '.intro'
    },
    class: {
      shadow: 'has-shadow',
      hide: 'hideme'
    },
    introText: 'My key skills include but are not limited too HTML, CSS3, Javascript/ jQuery, Wordpress development, Web Design, Cross browser compatibility and implementing JQuery Plugins. I hand code all my work using SublimeText and I adopt a DRY approach, implementing SMACSS along the way. I’m proficient with Adobe’s Creative suite including Photoshop and Illustrator and I love semantic and scalable code. I am a Front-end developer with a strong background in design. This has allowed me to bridge the gap between design and development and bring well rounded solutions to the user. I also have experience with JIRA and Agile methodology. I am passionate and creative with a keen eye for detail. Nothing makes me happier than a well thought out website paying particular attention to how a user can interact and navigate through a site. Summary of skills: HTML, CSS3/SASS, Javascript/ jQuery, Grunt/ Gulp, Git, Wordpress, Web Design.'
  };

  return intro.init();

}());

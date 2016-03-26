/**
 * Navigation
 */

(function() {
  'use strict';

  var navigation = {
    selectors: {
      menuToggle: '.menu-toggle',
      mainMenu: '.nav-main',
      menuLink: '.nav-main li a'
    },
    class: {
      visible: 'on-screen',
      open: 'open'
    }
  };

  var toggle = document.querySelector( navigation.selectors.menuToggle );
  var menu = document.querySelector( navigation.selectors.mainMenu );
  navigation.init = function() {
    navigation.clickEvent();
    navigation.linkClicked();
  };

  navigation.menuToggle = function() {
    toggle.classList.toggle( navigation.class.open );
    menu.classList.toggle( navigation.class.visible );
  };

  navigation.clickEvent = function() {
    toggle.onclick = function(event) {
      event.preventDefault();
      navigation.menuToggle();
    }
  }

  navigation.linkClicked = function() {
    $( navigation.selectors.menuLink ).on( 'click', function() {
      navigation.menuToggle();
    });
  };

  return navigation.init();

}());

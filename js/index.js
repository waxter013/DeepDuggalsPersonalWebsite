var navTrigger = document.querySelector('.navTrigger'), 
    nav = document.querySelector('nav'),
    header = document.querySelector('header'),
    loading = document.querySelector('.loading'),
    main = document.querySelector('.main'),
    spotlightItems = document.querySelectorAll('.spotlightItem');

var oldScrollY = 0;

//Animate the page in, when it loads
window.addEventListener('DOMContentLoaded', function() {
  TweenMax.to(loading, 0.25, {ease: Expo.easeInOut, left: '-100%'});
  TweenMax.from(main, 0.25, {ease: Expo.easeInOut, left: '101%'});
  TweenMax.from(header, 0.25, {ease: Expo.easeInOut, delay: 0.2, top: '-100%'});
  TweenMax.from('.main .content .header', 0.25, {ease: Expo.easeInOut, delay: 0.4, x: '101%'});
  TweenMax.from('.main .content .subheader', 0.25, {ease: Expo.easeInOut, delay: 0.5, x: '-101%'});
  TweenMax.from('.main .content p', 0.5, {ease: Expo.easeInOut, delay: 0.8, opacity: 0});
}, false);

//Show/Hide the nav
navTrigger.addEventListener('click', function() {
  //hide
  if(nav.style.display === 'block') {
    TweenMax.to(nav, 0.3, {ease: Expo.easeInOut, left: '-100%', display: 'none'});
    TweenMax.to(main, 0, {left: '101%'});
    TweenMax.to(main, 0.3, {ease: Expo.easeInOut, left: '0%'});
  }
  //show
  else {
    TweenMax.to(main, 0.3, {ease: Expo.easeInOut, left: '-100%'});
    TweenMax.to(nav, 0, {left: '101%'});
    TweenMax.to(nav, 0.3, {ease: Expo.easeInOut, display: 'block', left: '0%'});
  }
}, false);

//scroll Animations
main.addEventListener('scroll', function() {
  //Hide nav on scrollDown
  if(oldScrollY < main.scrollTop) {
    TweenMax.to(header, 0.2, {top: '-3.95rem'});
  }
  //Show nav on scrollUp
  else if(oldScrollY > main.scrollTop) {
    TweenMax.to(header, 0.2, {top: '0'});
  }

  //.spotlightItems
  // TweenMax.staggerFrom(['.spotlightItem .header', '.spotlightItem .subheader'], 0.3, {x: '100%'}, 0.3);

  //reset oldScrollY
  oldScrollY = main.scrollTop;
}, false);

/**
 * Check if an element is visible in viewport
 * @param el - The element
 */
function isVisible(elem) {
    var rect = elem.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/*
TODO
=============================
  Add
   - On 1st click of .socialBttn, show description. Open on 2nd click. 
   - For resume .socialBttn, onclick show popup with file type options. 
   - Make .landing interactive and fun. Something that works on mobile too. (Valid Events: onSwipe)
   - Add transition between pages. Using push state AJAX. 
   - Add About Page
   - Add Contact Page
   - Add new projects to .spotlight
*/
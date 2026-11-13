// =====================================================================
// script.js  -  JavaScript used by all four pages
//
// 
// CONTENTS
//   
//   1. Typing animation
//   2. Scroll reveal
//   3. Animated skill bars
//   4. Footer year 
document.documentElement.classList.add('js');


// ---------------------------------------------------------------
// 2. TYPING ANIMATION
// Any element with class "typed-text" and a data-words attribute
// gets this effect. In the HTML it looks like:
//     <span class="typed-text" data-words='["Web Developer", "Student"]'>
// ---------------------------------------------------------------

// window.matchMedia checks a CSS media query from JavaScript.
// This asks: "does the visitor's device ask for reduced motion?"
// The result (true/false) is stored in a constant called reduceMotion.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// A function = a named block of code I can run many times.
// startTyping runs once for each typing element and receives it as "el".
function startTyping(el) {
  // el.dataset.words is the text inside data-words. JSON.parse converts that
  // text into a real JavaScript array: ["Web Developer", "Student"].
  const words = JSON.parse(el.dataset.words);

  // Three variables that remember where we are. "let" is used (not "const")
  // because their values change as the animation runs.
  let wordIndex = 0;     // which phrase we are on (0 = first)
  let charIndex = 0;     // how many letters are showing right now
  let deleting = false;  // true while erasing, false while typing

  // If the visitor wants less motion, skip the animation and show phrase 1.
  if (reduceMotion) {
    el.textContent = words[0];
    return;               // "return" stops the function here
  }

  // tick() does ONE step (add or remove one letter) and then schedules itself again.
  function tick() {
    const word = words[wordIndex];        // the phrase we are working on

    // typing adds a letter, deleting removes one
    if (deleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    // slice(0, n) gives the first n letters of the phrase.
    // Setting textContent updates what the visitor sees.
    el.textContent = word.slice(0, charIndex);

    // How long to wait before the next step (milliseconds).
    // The "? :" is a short if/else: if deleting use 45, otherwise 85.
    // WHY: erasing looks natural when it is faster than typing.
    let delay = deleting ? 45 : 85;

    if (!deleting && charIndex === word.length) {
      // finished typing the whole phrase: pause so it can be read, then start deleting
      deleting = true;
      delay = 1400;
    } else if (deleting && charIndex === 0) {
      // finished deleting: move to the next phrase.
      // "% words.length" wraps back to 0 after the last phrase (loops forever).
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 350;
    }

    // setTimeout runs a function after a delay. Here tick calls itself again,
    // which creates the repeating loop.
    setTimeout(tick, delay);
  }

  tick();   // start the first step
}

// Find EVERY element with class typed-text and start typing on each.
// (If a page has none, forEach simply does nothing.)
document.querySelectorAll('.typed-text').forEach(startTyping);


// ---------------------------------------------------------------
// 3. SCROLL REVEAL
// Elements with class "reveal" fade in when they scroll into view.
// IntersectionObserver is a built-in browser tool that tells us when an
// element enters or leaves the screen.
// WHY use it instead of listening to every scroll event? It is much
// lighter on the browser, so the page stays smooth.
// ---------------------------------------------------------------
const revealItems = document.querySelectorAll('.reveal');

// The function inside runs whenever something changes visibility.
// "entries" is a list of the elements that changed.
// "=>" is an arrow function (a short way to write a function).
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {                    // true = it is now on screen
      entry.target.classList.add('visible');       // CSS then fades it in
      revealObserver.unobserve(entry.target);      // stop watching: animate only once
    }
  });
}, { threshold: 0.15 });                           // trigger when 15% of the element is visible

// Tell the observer to watch every .reveal element
revealItems.forEach((item) => revealObserver.observe(item));


// ---------------------------------------------------------------
// 4. ANIMATED SKILL BARS
// Each bar in the HTML looks like:  <div class="bar" data-level="90"><span></span></div>
// data-level is the percentage. The inner <span> is the black fill, which
// starts at width 0 (set in the CSS).
//
// When a bar is on screen we set its width, and the CSS "transition: width"
// makes it grow smoothly. When it leaves the screen we set the width back
// to 0, so the animation plays AGAIN when the visitor scrolls back
// (works whether scrolling down or up).
// ---------------------------------------------------------------
const bars = document.querySelectorAll('.bar');

const barObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // entry.target is the .bar; querySelector('span') finds the fill inside it
    const fill = entry.target.querySelector('span');

    if (entry.isIntersecting) {
      // on screen: set width to the percentage from data-level, e.g. "90%"
      fill.style.width = entry.target.dataset.level + '%';
    } else {
      // off screen: reset to empty, ready to animate again next time
      fill.style.width = '0';
    }
  });
}, { threshold: 0.4 });                            // bar must be 40% visible to count as "on screen"

bars.forEach((bar) => barObserver.observe(bar));


// ---------------------------------------------------------------
// 5. footer year 
// Finds the element with id="year" and fills in the current year.
// WHY: so the copyright year never goes out of date.
// The "if (yearEl)" check avoids an error on a page with no #year.
// ---------------------------------------------------------------
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

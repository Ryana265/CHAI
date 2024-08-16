var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".two", // The element that triggers the animation.
      start: "0% 95%", // Animation starts when the top of the trigger element hits 95% of the viewport.
      end: "50% 50%", // Animation ends when the top of the trigger element hits 50% of the viewport.
      scrub: "true", // Smoothly scrubs the animation in sync with the scroll.
      markers: "true", // Shows markers on the screen to visualize the start and end points.
    }
  });
  
  // Make all animations start at the same time (position parameter set to 0)
  tl.to("#mainpic", {
    top: "150%", // Moves the #mainpic element's top position to 150%.
    left: "2%"  // Moves the #mainpic element's left position to 2%.
  }, 0);
  
  tl.to("#leaf2", {
    top: "140%", // Moves the #leaf2 element's top position to 140%.
    left: "10%"  // Moves the #leaf2 element's left position to 10%.
  }, 0);
  
  tl.to("#lemonslice", {
    top: "204%", // Moves the #lemonslice element's top position to 204%.
    left: "22%"  // Moves the #lemonslice element's left position to 22%.
  }, 0);
  
  var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "03% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})
tl2.from("#kashmiri",{
    rotate: "-90deg",
    top: "110%",
    left: "-50%",
}, 'ca')
tl2.from("#elachi",{
    rotate: "90deg",
    top: "110%",
    left: "60%",
}, 'ca')
tl2.to("#mainpic",{
    width:"35%",
    top: "270%",
    left: "30%",
}, 'ca')

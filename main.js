gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    scrollTrigger: {
        trigger: ".square",
        start: "90% 90%",
        scrub: 1,
        pin: true,
        toggleActions: "restart none reverse none"
    },
    x: -800,
    duration: 1
});

gsap.to(".square2", {
    scrollTrigger: {
        trigger: ".square2",
        start: "90% 90%",
        scrub: 1,
        pin: true,
        toggleActions: "restart none reverse none"
    },
    x: 800,
    duration: 1
});

gsap.from(".logoJapones", {
    scrollTrigger:{
        trigger: ".logoJapones",
        start: "center 70%",
        toggleActions: "play none none none",
    },
    y: 50,
    duration: 1.5,
    opacity: 0,
    ease: "expo"
})

gsap.from(".h2", {
    scrollTrigger:{
        trigger: ".logoJapones",
        start: "center center",
        toggleActions: "play none none none",
    },
    y: 50,
    duration: 1.5,
    opacity: 0,
    ease: "expo"
})

/* gsap.from(".img1", {
    scrollTrigger:{
        trigger: ".img1",
        start: "50% 70%",
        toggleActions: "play none none none",
    },
    y: -50,
    duration: 2.5,
    opacity: 0,
    stagger: .5,
    ease: "power2.out"
}) */

gsap.to(".img1", {
    yPercent: -100,
    ease: "none",
    scrollTrigger: {
      trigger: ".pSection",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true,
    }, 
  });




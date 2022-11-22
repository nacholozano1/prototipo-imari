gsap.registerPlugin(ScrollTrigger);

gsap.from(".text", {
    y: 100,
    duration: 2,
    opacity: 0,
    scrub: 1,
    ease: "expo"
})

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

gsap.from(".h3", {
    scrollTrigger:{
        trigger: ".h2",
        start: "50% 70%",
        toggleActions: "play none none none",
    },
    y: -50,
    duration: 2.5,
    opacity: 0,
    stagger: .5,
    ease: "power2.out"
});

gsap.from(".pSection", {
    scrollTrigger:{
        trigger: ".pSection",
        start: "top 70%",
        toggleActions: "play none none none",
    },
    y: -50,
    duration: 2.5,
    opacity: 0,
    stagger: .5,
    ease: "power2.out"
});

gsap.from(".barra", {
    scrollTrigger:{
        trigger: ".barra",
        start: "50% 70%",
        toggleActions: "play none none none",
    },
    y: -50,
    duration: 2,
    opacity: 0,
    ease: "power2.out"
});

gsap.to(".img2", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".container5",
      scrub: true,
    }, 
  });

gsap.to(".img3", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".container5",
      scrub: true,
    }, 
  });

gsap.from(".img2", {
    scrollTrigger:{
        trigger: ".img2",
        start: "20% 70%",
        toggleActions: "play none none none",
    },
    y: -50,
    duration: 2,
    opacity: 0,
    stagger: .3,
    ease: "power2.out"
});

gsap.from(".img3", {
    scrollTrigger:{
        trigger: ".img3",
        start: "30% 70%",
        toggleActions: "play none none none",
    },
    y: -50,
    duration: 2,
    opacity: 0,
    stagger: .5,
    ease: "power2.out"
});

gsap.from(".container6", {
    scrollTrigger:{
        trigger: ".container6",
        start: "20% 70%",
        toggleActions: "play none none none",
    },
    y: -50,
    duration: 2,
    opacity: 0,
    ease: "power2.out"
});

gsap.from(".contacto", {
    scrollTrigger:{
        trigger: ".contacto",
        start: "50% 70%",
        toggleActions: "play none none none",
    },
    y: -50,
    duration: 2,
    opacity: 0,
    ease: "power2.out"
});

gsap.from(".h4", {
    scrollTrigger:{
        trigger: ".h4",
        start: "50% 70%",
        toggleActions: "play none none none",
    },
    y: -50,
    duration: 2,
    opacity: 0,
    ease: "power2.out"
});




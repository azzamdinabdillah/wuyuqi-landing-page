import InfiniteMarquee from "vanilla-infinite-marquee";
import gsap from "gsap";
import TypeIt from "typeit";

document.addEventListener("DOMContentLoaded", function () {
  new InfiniteMarquee({
    element: ".marquee-container",
    speed: 25000,
    smoothEdges: true,
    direction: "right",
    duplicateCount: 1,
  });

  new InfiniteMarquee({
    element: ".marquee-container-2",
    speed: 20000,
    smoothEdges: true,
    direction: "left",
    duplicateCount: 0,
  });

  // FLOATING TESTIMONIAL ANIMATION
  gsap.set(".floating-animation", {
    opacity: 0,
    filter: "blur(5px)",
  });

  // MARQUEE FADEIN ANIMATION
  gsap.set(".marquee-fadein", {
    opacity: 0,
    filter: "blur(5px)",
  });

  new TypeIt("#typewriter", {
    speed: 70,
    afterComplete: function () {
      // FLOATING TESTIMONIAL ANIMATION
      gsap.to(".floating-animation", {
        opacity: 1,
        filter: "blur(0px)",
        stagger: {
          each: 0.2,
          from: "center",
          grid: "auto",
          ease: "power1",
        },
        duration: 1,
      });

      // MARQUEE FADEIN ANIMATION
      gsap.to(".marquee-fadein", {
        opacity: 1,
        filter: "blur(0px)",
      });
    },
  }).go();

  document.querySelector(".toggle-navbar").addEventListener("click", () => {
    document.querySelector(".navbar-mobile").classList.toggle("show");

    // ANIMATION OPEN/CLOSE SIDEBAR MOBILE VERSION
    gsap
      .timeline({
        defaults: {
          duration: 0.5,
        },
      })
      .set(".navbar-mobile .menu", {
        width: 0,
      })
      .fromTo(
        ".navbar-mobile",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
      .to(".navbar-mobile .menu", {
        width: "70vw",
        duration: 0.3,
      });
  });
});

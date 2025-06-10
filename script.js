import InfiniteMarquee from "vanilla-infinite-marquee";
import gsap from "gsap";
import TypeIt from "typeit";

document.addEventListener("DOMContentLoaded", function () {
  // MARQUEE ANIMATION FOR HERO SECTION
  new InfiniteMarquee({
    element: ".marquee-container",
    speed: 25000,
    smoothEdges: true,
    pauseOnHover: true,
    direction: "right",
    duplicateCount: 1,
  });

  new InfiniteMarquee({
    element: ".marquee-container-2",
    speed: 20000,
    smoothEdges: true,
    direction: "left",
    pauseOnHover: true,
    duplicateCount: 0,
  });

  // MARQUEE ANIMATION FOR SUCCESS STORIES SECTION
  new InfiniteMarquee({
    element: ".marquee-container-stories",
    speed: 15000,
    smoothEdges: true,
    direction: "left",
    gap: "20px",
    pauseOnHover: true,
    duplicateCount: 0,
  });

  new InfiniteMarquee({
    element: ".marquee-container-stories-reverse",
    speed: 15000,
    smoothEdges: true,
    direction: "right",
    gap: "20px",
    pauseOnHover: true,
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

  // SIDEBAR MOBILE
  document.querySelector(".toggle-navbar").addEventListener("click", () => {
    const navbarMobile = document.querySelector(".navbar-mobile");
    navbarMobile.classList.toggle("show");
    document.querySelector("body").classList.toggle("overflow-hidden");

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

  // VIDEO PLAY
  document.querySelector(".video-play-button").addEventListener("click", () => {
    document.querySelector("video").play();
  });

  // IF NAVBAR ON THE TOP OF THE PAGE
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector("nav");
    if (window.scrollY <= 0) {
      navbar.classList.remove("bg-white");
    } else {
      navbar.classList.add("bg-white");
    }
  });

  // ACCORDION FAQ SECTION
  const accordion = document.querySelectorAll(".accordion");
  accordion.forEach((acc) => {
    acc.addEventListener("click", () => {
      const p = acc.querySelector("p");
      if (acc.classList.contains("open")) {
        p.style.height = p.scrollHeight + "px";
        void p.offsetHeight;
        p.style.height = "0px";
        acc.classList.remove("open");
      } else {
        p.style.height = p.scrollHeight + "px";
        acc.classList.add("open");
      }
    });
  });
});

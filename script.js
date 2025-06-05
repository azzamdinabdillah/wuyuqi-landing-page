import InfiniteMarquee from "vanilla-infinite-marquee";

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

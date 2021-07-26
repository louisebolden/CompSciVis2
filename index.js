const timeline = anime.timeline({
  begin: () => console.log("beginning"),
  complete: () => console.log("complete"),
  easing: 'linear',
  targets: '.matrix',
});

timeline.add({
    opacity: 1,
    // strokeDashoffset: [anime.setDashoffset, 0],
    // duration: 350,
    // delay: anime.stagger(350),
})

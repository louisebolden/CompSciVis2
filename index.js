// const timeline = anime.timeline({
//   begin: () => console.log("beginning"),
//   complete: () => console.log("complete"),
//   duration: 350,
//   easing: 'linear',
//   targets: '.matrix',
// });

// timeline.add({
//     // opacity: 1,
//     // strokeDashoffset: [anime.setDashoffset, 0],
//     // duration: 350,
//     // delay: anime.stagger(350),
// })

window.addEventListener("load", function() {
  const targets = document.querySelectorAll(".matrix .element .inner");
  console.log("> targets:", targets);

  const animation = anime.timeline({
    begin: () => console.log("beginning"),
    complete: () => console.log("complete"),
    // delay: anime.stagger(100, {
    //   grid: [3, 3],
    //   from: "center"
    // }),
    delay: anime.stagger(100),
    // loop: true,
    targets: targets,
  });

  animation
    .add({
      // backgroundColor: 'purple',
      // scale: 0.5,
      translateY: '-10px'
    })
    .add({
      // backgroundColor: 'orange',
      // scale: 1,
      translateY: 0
    })
});

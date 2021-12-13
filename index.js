const input = document.getElementById("slider");
const image = document.getElementById("image");
const divisor = document.getElementById("divisor");
const content = document.getElementById("figure");

let ticking = false;
let first_flag = false;
// let second_flag = false;

// image.addEventListener("mousemove", (e) => {
//   if (first_flag) {
//     x = Number.parseInt(
//       ((e.clientY - image.getBoundingClientRect().y) /
//         image.getBoundingClientRect().height) *
//         (45 - 5) + 5
//     );
//     image.setAttribute("src", `figs/seg_${x}.png`);
//   };
// });

content.addEventListener("mousemove", (e) => {
  // if (second_flag) {
    x =
      (e.clientX - content.getBoundingClientRect().x) /
      content.getBoundingClientRect().width;
    divisor.style.width = x * 100 + "%";
  // };
});

const animatedLoop = (start, end, speed, callable) => {
  const callLoop = () => {
    setTimeout(() => {
      callable(x);
      x++;
      if (x < end) { callLoop() }
    }, speed);
  }
  let x = start;
  callLoop();
}

const setImageGrain = (x) => {
  image.setAttribute("src", `figs/seg_${x}.png`);
}

// const setDivisorWidth = (x) => {
//   divisor.style.width = x + "%";
// }

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {

      const ht = image.getBoundingClientRect().height;
      const imtop = image.getBoundingClientRect().top;
      const wh = window.innerHeight;
      const htbf = divisor.getBoundingClientRect().height;
      const imtopbf = divisor.getBoundingClientRect().top;

      if (!first_flag && (wh - imtop - ht) >= 0) { 
        animatedLoop(2, 45, 30, setImageGrain);
        first_flag = true
      };

      // if (!second_flag && (wh - imtopbf - htbf) >= 0) {
      //   animatedLoop(0, 51, 30, setDivisorWidth)
      //   second_flag = true
      // };

      ticking = false;
    });
    ticking = true;
  }
});

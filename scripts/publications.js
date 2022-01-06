const image = document.getElementById("seg-image");
const divisor = document.getElementById("divisor");
const content = document.getElementById("figure");

content.addEventListener("mousemove", (e) => {
  x =
    (e.clientX - content.getBoundingClientRect().x) /
    content.getBoundingClientRect().width;
  divisor.style.width = x * 100 + "%";
});

// const animatedLoop = (start, end, speed, callable) => {
//   for (let x = start; x < end; x++) {
//     setTimeout(
//       ((x) => {
//         return () => callable(x);
//       })(x),
//       x * speed
//     );
//   }
// };

const animatedLoop = (start, end) => {
  let x = start;
  const step = () => {
    image.setAttribute("src", `../static/figs2/seg_${x}.png`);
    if (++x <= end) {
      window.setTimeout(step, 40);
    }
  };
  step();
};

// const setImageGrain = (x) => {
//   image.setAttribute("src", `../static/figs2/seg_${x}.png`);
// };

let ticking = false;
let first_flag = false;
let second_flag = true;

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const ht = image.getBoundingClientRect().height;
      const imtop = image.getBoundingClientRect().top;
      const wh = window.innerHeight;

      if (!first_flag && wh - imtop - ht >= 0) {
        animatedLoop(2, 45);
        first_flag = true;
      }

      if (second_flag && imtop <= -wh) {
        image.setAttribute("src", `../static/figs2/seg_2.png`);
        second_flag = false;
      }

      if (!second_flag && imtop >= 0) {
        animatedLoop(2, 45);
        second_flag = true;
      }

      if (first_flag && imtop > wh) {
        image.setAttribute("src", `../static/figs2/seg_2.png`);
        first_flag = false;
      }

      ticking = false;
    });
    ticking = true;
  }
});

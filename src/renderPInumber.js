import PI from "./data/PI.js";

let isShow = false;
export default function 원주율표시() {
  const p = document.querySelector(".number-view p");

  if (isShow) {
    p.style.display = "none";
    isShow = !isShow;
  } else {
    if (!p.textContent || !p.textContent.includes("3.141592")) {
      let 뒷숫자 = "";

      for (let i = 8; i < PI.length - 4; i += 4) {
        뒷숫자 += PI.slice(i, i + 4) + " ";
      }

      p.textContent = PI.slice(0, 8) + "\n" + 뒷숫자;
    }
    p.style.display = "block";
    isShow = !isShow;
  }
}

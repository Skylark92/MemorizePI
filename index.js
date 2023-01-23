import 제출 from "./src/submitAnswer.js";
import 원주율표시 from "./src/renderPInumber.js";
// console.log(PI);

const 제출버튼 = document.querySelector("#answer-button");

제출버튼.addEventListener("click", 제출);

const 원주율확인버튼 = document.querySelector(".number-view > h3");

원주율확인버튼.addEventListener("click", () => {
  원주율표시();
});

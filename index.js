import 제출 from "/src/submitAnswer.js";
// console.log(PI);

const 버튼 = document.querySelector("#answer-button");

버튼.addEventListener("click", () => {
  제출();
});

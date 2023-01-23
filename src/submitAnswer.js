import 결과 from "/src/resultMessage.js";
import 표시 from "/src/renderMessage.js";

export default function 제출() {
  const input = document.querySelector("#answer-input");

  표시(결과(input.value));
}

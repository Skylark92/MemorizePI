import 검사 from "./checkAnswer.js";

export default function 결과(입력) {
  if (입력 === "") return ["입력해주세요", "dodgerblue"];
  else if (입력.length < 2 || 입력.slice(0, 3) !== "3.1")
    return ["3.14로 시작해주세요.", "orangered"];
  else if (검사(입력)) {
    return [
      `정답입니다. 소수점 이하 ${입력.length - 2}자리까지.`,
      "yellowgreen",
    ];
  } else return ["틀렸습니다.", "orangered"];
}

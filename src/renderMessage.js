export default function 표시([msg, color]) {
  const p = document.querySelector(".answer-notice");
  p.style.color = color;

  p.textContent = msg;
}

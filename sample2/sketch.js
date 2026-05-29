function setup() {
  createCanvas(600, 400); // 과제 조건 600 * 400 사이즈에 맞게 설정

}

function draw() {
  // 배경 색상 변화
  let dayColor = color(168, 216, 240);
  let nightColor = color(20, 24, 60);
  let t = (sin(frameCount * 0.01) + 1) / 2; // 0~1
  let bgColor = lerpColor(dayColor, nightColor, t);
  background(bgColor);

  // 눈 내리게 표현함
  fill(255, 255, 255, 180);
  
  let snowY = (frameCount * 0.5) % 200; // 아래로 떨어지는 효과
  let snowSize = 1 + sin(frameCount * 0.05) * 1.5; // 크기 변화
  
  ellipse(61,  38  + snowY, 5 * snowSize, 5 * snowSize);
  ellipse(100, 138 + snowY, 3 * snowSize, 3 * snowSize);
  ellipse(158, 22  + snowY, 4 * snowSize, 4 * snowSize);
  ellipse(194, 100 + snowY, 5 * snowSize, 5 * snowSize);
  ellipse(333, 15  + snowY, 5 * snowSize, 5 * snowSize);
  ellipse(327, 110 + snowY, 5 * snowSize, 5 * snowSize);
  ellipse(462, 32  + snowY, 4 * snowSize, 4 * snowSize);
  ellipse(477, 140 + snowY, 4 * snowSize, 4 * snowSize);
  ellipse(545, 20  + snowY, 3 * snowSize, 3 * snowSize);
  
  // 빙판을 표현함
  noStroke(); // 빙판 테두리 안보이게
  fill(208, 238, 248);
  ellipse(300, 375, 520, 120);
  fill(232, 246, 252);
  ellipse(300, 368, 440, 70);
  stroke(0, 0, 0);
  
  // 어무니 펭귄
  let armSwing = sin(frameCount * 0.05) * 10; // 팔 흔들림 값

  fill(26, 26, 46);
  ellipse(170, 280, 110, 150);
  fill(245, 240, 232);
  ellipse(170, 288, 66, 108);
  fill(26, 26, 46);
  ellipse(170, 198, 82, 88);
  // 오른팔 올림
  ellipse(118, 295, 22, 90);
  ellipse(222, 225 + armSwing, 22, 90);
  // 눈 흰자
  fill(255, 255, 255);
  ellipse(154, 188, 28, 24);
  ellipse(186, 188, 28, 24);
  // 눈 동공
  fill(26, 26, 46);
  ellipse(154, 188, 10, 10);
  ellipse(186, 188, 14, 14);
  // 눈 안쪽 흰자
  fill(255, 255, 255);
  ellipse(156, 185, 3, 3);
  ellipse(188, 185, 5, 5);
  // 볼
  fill(255, 180, 180, 220);
  ellipse(142, 202, 18, 12);
  ellipse(198, 202, 18, 12);
  // 부리 오른쪽으로
  fill(240, 160, 48);
  triangle(170, 208, 163, 222, 186, 227);
  // 발
  ellipse(142, 351, 44, 16);
  ellipse(198, 355, 44, 16);

  // 아들 펭귄
  let armSwing2 = sin(frameCount * 0.05) * 10;

  fill(26, 26, 46);
  ellipse(460, 315, 68, 90);
  fill(245, 240, 232);
  ellipse(460, 321, 40, 65);
  fill(26, 26, 46);
  ellipse(460, 265, 50, 54);
  // 두 팔다 올림
  ellipse(428, 290 + armSwing2, 16, 60);
  ellipse(492, 290 + armSwing2, 16, 60);
  // 눈 흰자
  fill(255, 255, 255);
  ellipse(449, 257, 18, 15);
  ellipse(471, 257, 18, 15);
  // 눈 동공
  fill(26, 26, 46);
  ellipse(449, 257, 9, 9);
  ellipse(471, 257, 7, 7);
  // 눈 안쪽 흰자
  fill(255, 255, 255);
  ellipse(451, 255, 4, 4);
  ellipse(473, 255, 3, 3);
  // 볼
  fill(255, 180, 180, 220);
  ellipse(440, 264, 12, 8);
  ellipse(480, 264, 12, 8);
  // 부리 왼쪽으로
  fill(240, 115, 48);
  triangle(460, 270, 447, 280, 464, 277);
  // 발
  ellipse(443, 359, 28, 9);
  ellipse(477, 355, 28, 9);
}
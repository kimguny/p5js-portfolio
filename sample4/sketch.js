let blinkTimer = 0;
let isBlinking = false;
let mouthOpen = false;
let isDaytime = false;

function setup() {
  createCanvas(600, 400);
  saveGif('character', 5);
}

function draw() {
  blinkTimer++;
  if (blinkTimer > 60) {
    isBlinking = true;
  }
  if (blinkTimer > 75) {
    isBlinking = false;
    blinkTimer = 0;
  }

  // 우주 배경
  if (isDaytime) {
    fill(135, 206, 235); noStroke(); // 하늘색
    rect(0, 0, 600, 400);
    fill(255, 255, 180); // 태양
    ellipse(80, 70, 60, 60);
    fill(255, 255, 255); // 구름
    ellipse(200, 80, 80, 40);
    ellipse(230, 70, 60, 40);
    ellipse(170, 75, 50, 35);
    ellipse(420, 100, 90, 40);
    ellipse(450, 90, 60, 40);
    ellipse(390, 95, 50, 35);
  } else {
    fill(25, 15, 60); noStroke();
    rect(0, 0, 600, 400);
    fill(255, 255, 255);
    ellipse(45,23,3,3); ellipse(98,67,2,2); ellipse(143,18,3,3); ellipse(187,52,2,2);
    ellipse(231,31,4,4); ellipse(278,14,2,2); ellipse(312,44,3,3); ellipse(356,22,2,2);
    ellipse(401,58,3,3); ellipse(447,11,2,2); ellipse(489,38,4,4); ellipse(534,19,2,2);
    ellipse(571,47,3,3); ellipse(67,112,2,2); ellipse(123,98,3,3); ellipse(198,118,2,2);
    ellipse(334,88,3,3); ellipse(412,105,2,2); ellipse(523,92,3,3); ellipse(558,118,2,2);
    ellipse(22,158,3,3); ellipse(89,142,2,2); ellipse(267,132,4,4); ellipse(478,148,2,2);
    fill(255,240,180);
    ellipse(231,31,5,5); ellipse(489,38,5,5); ellipse(267,132,6,6);
  }
  // 목
  fill(255, 218, 190); noStroke();
  beginShape();
  vertex(278,350); vertex(271,295); vertex(283,287);
  vertex(317,287); vertex(329,295); vertex(322,350);
  endShape(CLOSE);
  // 어깨
  fill(240, 255, 130); noStroke();
  beginShape();
  vertex(100,400); vertex(120,355); vertex(185,332); vertex(245,323);
  vertex(300,320); vertex(355,323); vertex(415,332); vertex(480,355); vertex(500,400);
  endShape(CLOSE);
  fill(0, 55, 155); noStroke();
  ellipse(300,338,7,7); ellipse(300,352,7,7); ellipse(300,366,7,7);
  // 얼굴
  fill(255, 232, 210); noStroke();
  beginShape();
  vertex(300,119); vertex(358,135); vertex(378,178); vertex(376,225);
  vertex(362,265); vertex(338,295); vertex(300,307); vertex(262,295);
  vertex(238,265); vertex(224,225); vertex(222,178); vertex(242,135);
  endShape(CLOSE);
  // 귀
  fill(255,232,210); ellipse(221,223,22,38); fill(240,210,185); ellipse(223,223,13,26);
  fill(255,232,210); ellipse(379,223,22,38); fill(240,210,185); ellipse(377,223,13,26);
  // 눈
  fill(255); noStroke();
  if (isBlinking) {
    ellipse(268,218,38,2);
    ellipse(332,218,38,2);
  } else {
    ellipse(268,218,38,16);
    ellipse(332,218,38,16);
  }
  if (!isBlinking) {
    fill(40,28,15); ellipse(268,219,16,16); ellipse(332,219,16,16);
    fill(10,7,4); ellipse(268,219,8,8); ellipse(332,219,8,8);
    fill(255); ellipse(272,216,4,4); ellipse(336,216,4,4);
  }
  stroke(30,20,10); strokeWeight(1.8); noFill();
  arc(268,217,38,16,PI+0.15,TWO_PI-0.15);
  arc(332,217,38,16,PI+0.15,TWO_PI-0.15);
  // 눈썹
  stroke(26,23,20); strokeWeight(3.5);
  arc(268,207,42,12,PI+0.22,TWO_PI-0.22);
  arc(332,207,42,12,PI+0.22,TWO_PI-0.22);
  // 코, 입
  stroke(210,175,150); strokeWeight(1.5);
  line(296,243,293,255); line(293,255,304,255);
  stroke(220,50,50); strokeWeight(1.8);
  if (mouthOpen) {
    ellipse(300, 272, 28, 16); // 놀란 입 (동그란 O)
  } else {
    arc(300,270,28,10,0.1,PI-0.1); // 원래 웃음
  }
  // 머리카락
  fill(180,140,100); noStroke();
  beginShape();
  vertex(222,213); vertex(218,190); vertex(216,168); vertex(222,148); vertex(234,130);
  vertex(252,118); vertex(272,110); vertex(300,107); vertex(328,110); vertex(348,118);
  vertex(366,130); vertex(378,148); vertex(384,168); vertex(382,190); vertex(378,213);
  vertex(372,225); vertex(362,230); vertex(350,182); vertex(325,176); vertex(300,178);
  vertex(275,176); vertex(250,182); vertex(238,230); vertex(228,225);
  endShape(CLOSE);
  push(); translate(286,158); rotate(-0.4);
  beginShape();
  vertex(-18,-47); vertex(70,0); vertex(-1,42); vertex(-52,11);
  endShape(CLOSE); pop();
  // 티모 모자
  fill(80,150,40); noStroke();
  beginShape();
  vertex(238,112); vertex(222,120); vertex(218,130); vertex(228,140); vertex(252,148);
  vertex(275,152); vertex(300,154); vertex(325,152); vertex(348,148); vertex(372,140);
  vertex(382,130); vertex(378,120); vertex(362,112); vertex(355,100); vertex(348,90);
  vertex(332,78); vertex(312,74); vertex(300,72); vertex(288,74); vertex(268,78);
  vertex(252,90); vertex(245,100);
  endShape(CLOSE);
  // 고양이 귀
  fill(240,210,160); noStroke();
  beginShape(); vertex(252,93); vertex(242,65); vertex(278,79); endShape(CLOSE);
  fill(200,50,50);
  beginShape(); vertex(254,90); vertex(246,69); vertex(274,80); endShape(CLOSE);
  stroke(80,150,40); strokeWeight(2); line(252,93,278,79);
  fill(240,210,160); noStroke();
  beginShape(); vertex(348,93); vertex(358,65); vertex(322,79); endShape(CLOSE);
  fill(200,50,50);
  beginShape(); vertex(346,90); vertex(354,69); vertex(326,80); endShape(CLOSE);
  stroke(80,150,40); strokeWeight(2); line(348,93,322,79);
  // 고글
  fill(200,50,50); noStroke();
  beginShape(); vertex(238,107); vertex(252,101); vertex(252,109); vertex(238,117); endShape(CLOSE);
  beginShape(); vertex(362,107); vertex(348,101); vertex(348,109); vertex(362,117); endShape(CLOSE);
  rect(252,94,34,22,3); rect(314,94,34,22,3); rect(286,100,28,8,2);
  fill(80,190,220);
  rect(255,97,28,15,2); rect(317,97,28,15,2);
}

// 마우스 클릭시 이벤트 함수
function mousePressed() {
  mouthOpen = !mouthOpen;
}

// 키보드 클릭시 이벤트 함수
function keyPressed() {
  if (key == ' ') {
    isDaytime = !isDaytime;
  }
}
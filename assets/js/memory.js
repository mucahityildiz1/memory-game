let sayilar = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
];

let tiklananSayilar = [];
let skor = 0;
let hamle = 0;
let sure = 0;
let timer;

function diziyiKaristir() {
  return sayilar.sort(() => Math.random() - 0.5);
}

function oyunuBaslat() {
  const karistirilmisDizi = diziyiKaristir();
  const memoryGameContainer = document.querySelector(".memory-game-container");
  for (const sayi of karistirilmisDizi) {
    memoryGameContainer.innerHTML += `<div class="box">${sayi}</div>`;
  }
  const boxes = document.querySelectorAll(".box");
  for (const box of boxes) {
    box.addEventListener("click", kutuyaTiklandi);
  }
  timer = setInterval(() => {
    sure++;
    timeTxt.innerText = `Time: ${sure}s`;
  }, 1000);
}

function kutuyaTiklandi() {
  if (this.classList.contains("active")) return;
  hamle++;
  hamleTxt.innerText = "Moves: " + hamle;
  this.classList.add("active");
  tiklananSayilar.push(this.innerText);
  if (tiklananSayilar.length === 2) {

    if (tiklananSayilar[0] == tiklananSayilar[1]) {
      const activeKutular = document.querySelectorAll(".box.active");
      for (const box of activeKutular) {
        box.classList.add("matched");
      }

      skor++;
      skorTxt.innerHTML = `Score: ${skor}`;

      if (skor === 8) {
        clearInterval(timer);
      }
    }

    setTimeout(() => {
      const activeKutular = document.querySelectorAll(".box.active");
      for (const box of activeKutular) {
        box.classList.remove("active");
      }
      tiklananSayilar = [];
    }, 200);
  }
}

oyunuBaslat();

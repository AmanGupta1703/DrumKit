var music = {
  letter: ["w", "a", "s", "d", "j", "k", "l"],
  sound: [
    "sounds/tom-1.mp3",
    "sounds/tom-2.mp3",
    "sounds/tom-3.mp3",
    "sounds/tom-4.mp3",
    "sounds/snare.mp3",
    "sounds/crash.mp3",
    "sounds/kick-bass.mp3",
  ],
};

function playMusicWhenClicked() {
  for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document
      .querySelectorAll(".drum")
      [i].addEventListener("click", function () {
        for (let i = 0; i < music.sound.length; i++) {
          if (this.innerHTML === music.letter[i]) {
            buttonAnimation(this.innerHTML);
            let audio = new Audio(music.sound[i]);
            audio.play();
          }
        }
      });
  }
}

function playMusicWhenKeyPressed() {
  for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document
      .querySelectorAll(".drum")
      [i].addEventListener("keydown", function (event) {
        buttonAnimation(event.key);
        for (let i = 0; i < music.sound.length; i++) {
          if (music.letter[i].includes(event.key)) {
            let audio = new Audio(music.sound[i]);
            audio.play();
          }
        }
      });
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

playMusicWhenClicked();
playMusicWhenKeyPressed();
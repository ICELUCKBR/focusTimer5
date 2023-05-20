export default function () {
  const audioForest = new Audio("audio/Floresta.wav");
  const audioRain = new Audio("audio/Chuva.wav");
  const audioFire = new Audio("audio/Lareira.wav");
  const audioCoffeStore = new Audio("audio/Cafeteria.wav");
  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  );

  function playFlorest() {
    audioForest.play();
    audioFire.paused;
    audioCoffeStore.pause();
    audioRain.ended;
  }

  function playRain() {
    audioRain.play();
    audioForest.pause();
    audioFire.pause();
    audioCoffeStore.pause();
  }

  function playCoffeStore() {
    audioCoffeStore.play();
  }

  function playFire() {
    audioFire.play();
    audioRain.pause();
    audioForest.pause();
    audioCoffeStore.pause();
  }

  function pressButton() {
    buttonPressAudio.play();
  }

  function stopAudio(audio) {
    audio.pause();
    audio.currentTime = 0;
  }

  return {
    playFlorest,
    playRain,
    playCoffeStore,
    playFire,
    pressButton,
  };
}

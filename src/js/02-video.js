import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe"); // Selectează iframe-ul din HTML
const player = new Player(iframe); // Inițializează player-ul Vimeo

player.on("timeupdate", function (event) {
  const currentTime = event.seconds; // Timpul de redare curent al videoclipului
  localStorage.setItem("videoplayer-current-time", currentTime); // Salvează timpul în localStorage
});

const savedTime = localStorage.getItem("videoplayer-current-time"); // Obține timpul salvat
if (savedTime) {
  player
    .setCurrentTime(savedTime)
    .then(function () {})
    .catch(function (error) {
      console.error("Eroare la setarea timpului:", error);
    });
}

const throttledSaveTime = throttle(function (event) {
  const currentTime = event.seconds;
  localStorage.setItem("videoplayer-current-time", currentTime);
}, 1000); // Limitează la un apel pe secundă

player.on("timeupdate", throttledSaveTime);

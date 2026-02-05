/* =========================
   LIKED SONGS PAGE LOGIC
========================= */

const audio = new Audio();
let canAutoplay = false;

/* =========================
   ELEMENTS
========================= */
const cover = document.querySelector(".cover");
const title = document.querySelector(".song-details strong");
const artist = document.querySelector(".song-details small");

const playBtn = document.querySelector(".play");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const progressContainer = document.querySelector(".bar");
const progressBar = document.querySelector(".fill");
const currentTimeEl = document.querySelector(".current-time");
const totalTimeEl = document.querySelector(".total-time");

const volumeSlider = document.getElementById("volumeSlider");
const volumeValue = document.getElementById("volumeValue");
const muteBtn = document.getElementById("muteBtn");

const playlistEl = document.querySelector(".playlist");

/* =========================
   DATA
========================= */
let playlist = JSON.parse(localStorage.getItem("likedSongs")) || [];
let currentIndex = 0;

/* =========================
   UNLOCK AUTOPLAY (ONCE)
========================= */
function unlockAudio() {
  canAutoplay = true;
  document.removeEventListener("click", unlockAudio);
  document.removeEventListener("keydown", unlockAudio);
}
document.addEventListener("click", unlockAudio);
document.addEventListener("keydown", unlockAudio);

/* =========================
   RENDER PLAYLIST
========================= */
function renderPlaylist() {
  playlistEl.innerHTML = "";

  playlist.forEach((song, index) => {
    const div = document.createElement("div");
    div.className = "track";
    if (index === currentIndex) div.classList.add("active");

    div.innerHTML = `
      <img src="${song.cover}">
      <div class="info">
        <strong>${song.name}</strong>
        <small>${song.artist}</small>
      </div>
      <span class="like-mark">❤️</span>
    `;

    div.addEventListener("click", (e) => {
      if (!e.target.classList.contains("like-mark")) {
        loadSong(index);
        playSong();
      }
    });

    div.querySelector(".like-mark").addEventListener("click", (e) => {
      e.stopPropagation();
      playlist.splice(index, 1);
      localStorage.setItem("likedSongs", JSON.stringify(playlist));

      if (!playlist.length) {
        audio.pause();
        playBtn.textContent = "▶︎";
        cover.src = "";
        title.textContent = "No song";
        artist.textContent = "";
      } else {
        currentIndex = Math.min(currentIndex, playlist.length - 1);
        loadSong(currentIndex);
      }

      renderPlaylist();
    });

    playlistEl.appendChild(div);
  });
}

/* =========================
   LOAD SONG
========================= */
function loadSong(index) {
  currentIndex = index;
  const song = playlist[currentIndex];

  audio.src = song.src;
  audio.load();

  cover.src = song.cover;
  title.textContent = song.name;
  artist.textContent = song.artist;

  progressBar.style.width = "0%";
  currentTimeEl.textContent = "0:00";

  playBtn.textContent = "▶︎";

  renderPlaylist(); // ⭐ THIS LINE
}

/* =========================
   PLAY / PAUSE
========================= */
function playSong() {
  if (!canAutoplay) return;

  audio.play().then(() => {
    playBtn.textContent = "⏸";
  });
}

playBtn.addEventListener("click", () => {
  if (!audio.src) return;

  if (audio.paused) playSong();
  else {
    audio.pause();
    playBtn.textContent = "▶︎";
  }
});

/* =========================
   NEXT / PREV
========================= */
function playNextSong() {
  if (!playlist.length) return;

  currentIndex = (currentIndex + 1) % playlist.length;
  loadSong(currentIndex);
  playSong();
}

function playPrevSong() {
  if (!playlist.length) return;

  currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
  loadSong(currentIndex);
  playSong();
}

nextBtn.addEventListener("click", playNextSong);
prevBtn.addEventListener("click", playPrevSong);

/* =========================
   AUTO PLAY NEXT ON END ✅
========================= */
audio.addEventListener("ended", playNextSong);

/* =========================
   VOLUME
========================= */
volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value / 100;
  volumeValue.textContent = volumeSlider.value + "%";
});

muteBtn.addEventListener("click", () => {
  audio.muted = !audio.muted;
  muteBtn.textContent = audio.muted ? "🔇" : "🔊";
});

/* =========================
   TIME + PROGRESS
========================= */
audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;

  const percent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = percent + "%";
  currentTimeEl.textContent = formatTime(audio.currentTime);
});

audio.addEventListener("loadedmetadata", () => {
  totalTimeEl.textContent = formatTime(audio.duration);
});

progressContainer.addEventListener("click", (e) => {
  if (!audio.duration) return;

  const width = progressContainer.clientWidth;
  audio.currentTime = (e.offsetX / width) * audio.duration;
});

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

/* =========================
   INIT
========================= */
if (playlist.length) {
  loadSong(0);
}
renderPlaylist();

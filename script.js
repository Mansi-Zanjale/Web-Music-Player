/* =========================
   SONG DATA
========================= */
const songs = [
  {
    name: "He Assa Pahila",
    artist: "Jaydeep Vaidya, Rucha Bondre",
    language: "Marathi",
    mood: ["Romantic", "Chill"],
    src: "songs/marathi/He-Assa-Pahila.mp3",
    cover: "covers/He-As.jpeg",
  },
  {
    name: "Kaakan",
    artist: "Shankar Mahadevan, Neha Rajpal",
    language: "Marathi",
    mood: ["Romantic", "Emotional"],
    src: "songs/marathi/Kaakan.mp3",
    cover: "covers/Kakan.jpeg",
  },
  {
    name: "Kadhi Tu",
    artist: "Hrishikesh Ranade",
    language: "Marathi",
    mood: ["Romantic", "chill"],
    src: "songs/marathi/Kadhi-Tu.mp3",
    cover: "covers/Kadhi-Tu.jpeg",
  },
  {
    name: "Mann Dhaavataya",
    artist: "Radhika Bhide",
    language: "Marathi",
    mood: ["Chill", "Emotional"],
    src: "songs/marathi/Mann_Dhaavataya.mp3",
    cover: "covers/Maan.jpeg",
  },
  {
    name: "Saaj Hyo Tuza",
    artist: "Onkarswaroop",
    language: "Marathi",
    mood: ["Romantic", "Night"],
    src: "songs/marathi/Saaj-Hyo-Tuza.mp3",
    cover: "covers/Saaj.jpeg",
  },
  {
    name: "Shaky",
    artist: "Sanju Rathod",
    language: "Marathi",
    mood: ["Fun", "Workout"],
    src: "songs/marathi/Shaky.mp3",
    cover: "covers/Shaky.jpeg",
  },
  {
    name: "Sundari",
    artist: "Sanju Rathod",
    language: "Marathi",
    mood: ["Fun", "Workout"],
    src: "songs/marathi/Sundari.mp3",
    cover: "covers/Sundari.jpeg",
  },
  {
    name: "Abhi Na Jao Chod Kar",
    artist: "Asha Bhosle, Mohammed Rafi",
    language: "Hindi",
    mood: ["Romantic", "Emotional", "Night"],
    src: "songs/hindi/Abhi_Na_Jao_Chod_Kar.mp3",
    cover: "covers/Abhi-Na-Jao.jpeg",
  },
  {
    name: "Dil Ka Jo Haal Hai",
    artist: "Abhijeet, Shreya Ghoshal",
    language: "Hindi",
    mood: ["Romantic", "Fun"],
    src: "songs/hindi/Dil Ka Jo Haal Hai.mp3",
    cover: "covers/Dil-Ka-Haal.jpeg",
  },
  {
    name: "Gehra Hua",
    artist: "Arijit Singh, Armaan Khan",
    language: "Hindi",
    mood: ["Romantic", "Emotional", "Night"],
    src: "songs/hindi/Gehra Hua.mp3",
    cover: "covers/Gehra-Hua.jpeg",
  },
  {
    name: "Qayde Se",
    artist: "Arijit Singh",
    language: "Hindi",
    mood: ["Romantic", "Chill"],
    src: "songs/hindi/Qayde Se.mp3",
    cover: "covers/Qayde.jpeg",
  },
  {
    name: "Sahiba",
    artist: "Aditya Rikhari",
    language: "Hindi",
    mood: ["Romantic", "Chill"],
    src: "songs/hindi/Sahiba.mp3",
    cover: "covers/Sahiba.jpeg",
  },
  {
    name: "Tumse Milke Aisa Laga",
    artist: "Asha Bhosle, Suresh Wadkar",
    language: "Hindi",
    mood: ["Romantic", "Chill"],
    src: "songs/hindi/Tumse Milke Aisa Laga.mp3",
    cover: "covers/Tumse.jpeg",
  },
  {
    name: "Zara Zara",
    artist: "Bombay Jayashri",
    language: "Hindi",
    mood: ["Romantic", "Chill", "Night"],
    src: "songs/hindi/Zara Zara.mp3",
    cover: "covers/Zara.jpeg",
  },
  {
    name: "A Thousand Years",
    artist: "Christina Perri",
    language: "English",
    mood: ["Romantic", "Emotional"],
    src: "songs/english/A Thousand Years.mp3",
    cover: "covers/A-Thousand.jpeg",
  },
  {
    name: "Apt",
    artist: "Bruno Mars, Rose",
    language: "English",
    mood: ["Fun", "Chill"],
    src: "songs/english/Apt.mp3",
    cover: "covers/Apt.jpeg",
  },
  {
    name: "Blue",
    artist: "Yung Kai",
    language: "English",
    mood: ["Fun", "Chill"],
    src: "songs/english/Blue.mp3",
    cover: "covers/Blue.jpeg",
  },
  {
    name: "Die With A Smile",
    artist: "Bruno Mars, Lady Gaga",
    language: "English",
    mood: ["Romantic", "Emotional"],
    src: "songs/english/Die With A Smile.mp3",
    cover: "covers/Die.jpeg",
  },
  {
    name: "I Think They Call This Love",
    artist: "Matthew Ifield",
    language: "English",
    mood: ["Romantic", "Chill"],
    src: "songs/english/I Think They Call This Love.mp3",
    cover: "covers/I-Think.jpeg",
  },
  {
    name: "Old Town Road",
    artist: "Lil NasX",
    language: "English",
    mood: ["Fun", "Workout"],
    src: "songs/english/Old Town Road.mp3",
    cover: "covers/Old-Town.jpeg",
  },
  {
    name: "Shape Of You",
    artist: "Ed Sheeran",
    language: "English",
    mood: ["Fun", "Workout", "Night"],
    src: "songs/english/Shape Of You.mp3",
    cover: "covers/Shape.jpeg",
  },
  {
    name: "Flower",
    artist: "Jisoo",
    language: "Korean",
    mood: ["Fun"],
    src: "songs/korean/Flower.mp3",
    cover: "covers/Flower.jpeg",
  },
  {
    name: "Golden",
    artist: "HuntrX",
    language: "Korean",
    mood: ["Fun", "Night"],
    src: "songs/korean/Golden.mp3",
    cover: "covers/Golden.jpeg",
  },
  {
    name: "Good Goodbye",
    artist: "Hwasa",
    language: "Korean",
    mood: ["Romantic", "Chill"],
    src: "songs/korean/Good Goodby.mp3",
    cover: "covers/Good-Goodbye.jpeg",
  },
  {
    name: "Solo",
    artist: "Jennie",
    language: "Korean",
    mood: ["Fun", "Workout"],
    src: "songs/korean/Solo.mp3",
    cover: "covers/Solo.jpeg",
  },
  {
    name: "Still With You",
    artist: "JungKook",
    language: "Korean",
    mood: ["Romantic", "Chill", "Emotional", "Night"],
    src: "songs/korean/Still With You.mp3",
    cover: "covers/Still.jpeg",
  },
  {
    name: "Euphoria",
    artist: "JungKook",
    language: "Korean",
    mood: ["Chill"],
    src: "songs/korean/Euphoria.mp3",
    cover: "covers/Euphoria.jpeg",
  },
  {
    name: "Just A Boy",
    artist: "DrINsaNE",
    language: "Japanese",
    mood: ["Fun", "Chill"],
    src: "songs/japanese/Just A Boy.mp3",
    cover: "covers/Just-A-Boy.jpeg",
  },
  {
    name: "NIGHT DANCER",
    artist: "imase",
    language: "Japanese",
    mood: ["Night", "Chill", "Fun"],
    src: "songs/japanese/NIGHT DANCER.mp3",
    cover: "covers/NightDancer.jpeg",
  },
  {
    name: "Shinunoga E-Wa",
    artist: "Fujii Kaze",
    language: "Japanese",
    mood: ["Romantic", "Night", "Emotional"],
    src: "songs/japanese/Shinunoga E-Wa.mp3",
    cover: "covers/Shinunoga.jpeg",
  },
  {
    name: "Your Name-Spaekle",
    artist: "Radwimps",
    language: "Japanese",
    mood: ["Emotional", "Chill"],
    src: "songs/japanese/Your Name-Spaekle.mp3",
    cover: "covers/Your-Name.jpeg",
  },
  {
    name: "Tokyo",
    artist: "Leat'eq",
    language: "Japanese",
    mood: ["Fun", "Chill"],
    src: "songs/japanese/Tokyo.mp3",
    cover: "covers/Tokyo.jpeg",
  },
];

/* =========================
   VARIABLES
========================= */
let currentSongIndex = 0;
let audio = new Audio();
let isPlaying = false;
let currentList = songs;
let lastVolume = 1;

/* =========================
   ELEMENTS
========================= */
const playlistEl = document.querySelector(".playlist");
const playBtn = document.querySelector(".play");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const coverImg = document.querySelector(".cover");
const songTitle = document.querySelector(".song-details strong");
const songArtist = document.querySelector(".song-details small");
const progressBar = document.querySelector(".fill");
const progressContainer = document.querySelector(".bar");
const currentTimeEl = document.querySelector(".current-time");
const totalTimeEl = document.querySelector(".total-time");
const searchInput = document.querySelector(".search");

const headphoneBtn = document.getElementById("headphoneBtn");
const moodDropdown = document.getElementById("moodDropdown");
const moodOptions = document.querySelectorAll(".mood-option");

const shuffleBtn = document.getElementById("shuffleBtn");
let isShuffle = false;

const langBtn = document.getElementById("langBtn");
const langDropdown = document.getElementById("langDropdown");
const langOptions = document.querySelectorAll(".lang-option");

/* ❤️ LIKE BUTTON */
const likeBtn = document.querySelector(".Like");

const repeatBtn = document.querySelector(".rep");
let isRepeat = false;

const volumeSlider = document.getElementById("volumeSlider");
const muteBtn = document.getElementById("muteBtn");
const volumeValue = document.getElementById("volumeValue");

/* =========================
   LIKED SONG HELPERS
========================= */
function getLikedSongs() {
  return JSON.parse(localStorage.getItem("likedSongs")) || [];
}

function saveLikedSongs(list) {
  localStorage.setItem("likedSongs", JSON.stringify(list));
}

function isLiked(song) {
  return getLikedSongs().some((s) => s.src === song.src);
}

function toggleLike(song) {
  let likedSongs = getLikedSongs();
  const index = likedSongs.findIndex((s) => s.src === song.src);

  if (index === -1) likedSongs.push(song);
  else likedSongs.splice(index, 1);

  saveLikedSongs(likedSongs);
}

function refreshLike() {
  if (!window.currentSong) return;

  // Update main like button
  if (likeBtn) {
    likeBtn.textContent = isLiked(window.currentSong) ? "❤️" : "🤍";
  }

  // Update hearts in playlist for ALL liked songs
  const tracks = playlistEl.querySelectorAll(".track");
  tracks.forEach((track, index) => {
    const heartSpan = track.querySelector(".like-mark");
    if (!heartSpan) return;

    const song = currentList[index];
    heartSpan.textContent = isLiked(song) ? "❤️" : "";
  });
}

/* =========================
   VOLUME + MUTE
========================= */
if (volumeSlider) {
  volumeSlider.addEventListener("input", () => {
    const vol = volumeSlider.value;
    audio.volume = vol / 100;

    volumeValue.textContent = vol + "%";

    if (audio.volume === 0) {
      muteBtn.textContent = "🔇";
    } else {
      muteBtn.textContent = "🔊";
      lastVolume = audio.volume;
    }
  });
}

if (muteBtn) {
  muteBtn.addEventListener("click", () => {
    if (audio.volume > 0) {
      lastVolume = audio.volume;
      audio.volume = 0;
      volumeSlider.value = 0;
      volumeValue.textContent = "0%";
      muteBtn.textContent = "🔇";
    } else {
      audio.volume = lastVolume;
      volumeSlider.value = Math.round(lastVolume * 100);
      volumeValue.textContent = volumeSlider.value + "%";
      muteBtn.textContent = "🔊";
    }
  });
}

/* =========================
   LOAD SONG
========================= */
function loadSong(index) {
  const song = currentList[index];
  audio.src = song.src;
  audio.load();

  coverImg.src = song.cover;
  songTitle.textContent = song.name;
  songArtist.textContent = song.artist;

  window.currentSong = song;
  refreshLike();

  // 🔥 ADD THIS
  localStorage.setItem("lastSongSrc", song.src);
}

/* =========================
   PLAY / PAUSE
========================= */
playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play().catch(() => {});
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶︎";
  }
  isPlaying = !isPlaying;
});

/* =========================
   NEXT / PREV
========================= */
nextBtn.addEventListener("click", () => {
  if (isRepeat) {
    // Repeat same song
    loadSong(currentSongIndex);
  } else if (isShuffle) {
    // Shuffle logic
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * currentList.length);
    } while (randomIndex === currentSongIndex && currentList.length > 1);
    currentSongIndex = randomIndex;
    loadSong(currentSongIndex);
  } else {
    // Normal next
    currentSongIndex = (currentSongIndex + 1) % currentList.length;
    loadSong(currentSongIndex);
  }

  audio.play().catch(() => {});
  playBtn.textContent = "⏸";
  isPlaying = true;
  renderPlaylist(currentList);
});

prevBtn.addEventListener("click", () => {
  currentSongIndex =
    (currentSongIndex - 1 + currentList.length) % currentList.length;
  loadSong(currentSongIndex);
  audio.play().catch(() => {});
  playBtn.textContent = "⏸";
  isPlaying = true;
  renderPlaylist(currentList);
});

/* =========================
   KEYBOARD SHORTCUTS
========================= */
function changeVolume(step) {
  let vol = parseInt(volumeSlider.value);
  vol = Math.min(100, Math.max(0, vol + step));

  volumeSlider.value = vol;
  audio.volume = vol / 100;
  volumeValue.textContent = vol + "%";

  muteBtn.textContent = vol === 0 ? "🔇" : "🔊";
  if (vol > 0) lastVolume = audio.volume;
}

document.addEventListener("keydown", (e) => {
  // Avoid triggering while typing in search input
  if (e.target.tagName === "INPUT") return;

  switch (e.key) {
    case " ":
      e.preventDefault(); // prevent page scroll
      playBtn.click();
      break;

    case "ArrowRight":
      nextBtn.click();
      break;

    case "ArrowLeft":
      prevBtn.click();
      break;

    case "m":
    case "M":
      muteBtn.click();
      break;

    case "ArrowUp":
      e.preventDefault();
      changeVolume(10);
      break;

    case "ArrowDown":
      e.preventDefault();
      changeVolume(-10);
      break;
  }
});

/* =========================
   REPEAT
========================= */
if (repeatBtn) {
  repeatBtn.addEventListener("click", () => {
    isRepeat = !isRepeat; // toggle repeat state
    repeatBtn.classList.toggle("active", isRepeat); // highlight button when active
  });
}

/* =========================
   TIME + PROGRESS
========================= */
audio.addEventListener("timeupdate", () => {
  const percent = (audio.currentTime / audio.duration) * 100 || 0;
  progressBar.style.width = percent + "%";
  currentTimeEl.textContent = formatTime(audio.currentTime);
});

audio.addEventListener("loadedmetadata", () => {
  totalTimeEl.textContent = formatTime(audio.duration);
});

audio.addEventListener("ended", () => {
  if (isRepeat) {
    audio.currentTime = 0;
    audio.play();
  } else if (isShuffle) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * currentList.length);
    } while (randomIndex === currentSongIndex && currentList.length > 1);
    currentSongIndex = randomIndex;
    loadSong(currentSongIndex);
    audio.play().catch(() => {});
    renderPlaylist(currentList);
  } else {
    // Normal next
    currentSongIndex = (currentSongIndex + 1) % currentList.length;
    loadSong(currentSongIndex);
    audio.play().catch(() => {});
    renderPlaylist(currentList);
  }
});

progressContainer.addEventListener("click", (e) => {
  const width = progressContainer.clientWidth;
  audio.currentTime = (e.offsetX / width) * audio.duration;
});

function formatTime(sec) {
  if (isNaN(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

/* =========================
   PLAYLIST RENDER
========================= */
function renderPlaylist(list) {
  playlistEl.innerHTML = ""; // clear playlist

  list.forEach((song, index) => {
    const div = document.createElement("div");
    div.className = "track";
    if (index === currentSongIndex) div.classList.add("active");

    div.innerHTML = `
      <img src="${song.cover}" />
      <div class="info">
        <strong>${song.name}</strong>
        <small>${song.artist}</small>
      </div>
      <span class="like-mark">${isLiked(song) ? "❤️" : ""}</span>
    `;

    div.onclick = () => {
      currentSongIndex = index;
      loadSong(index);
      audio.play().catch(() => {});
      playBtn.textContent = "⏸";
      isPlaying = true;
      renderPlaylist(list); // re-render playlist
    };

    playlistEl.appendChild(div);
  });
}

/* =========================
   MOOD DROPDOWN
========================= */
function applyMoodTheme(mood) {
  const player = document.querySelector(".player");

  player.className = "player"; // reset
  player.classList.add(`mood-${mood.toLowerCase()}`);
}

if (headphoneBtn && moodDropdown && moodOptions.length) {
  headphoneBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    moodDropdown.classList.toggle("show");
  });

  document.addEventListener("click", () =>
    moodDropdown.classList.remove("show"),
  );

  moodOptions.forEach((opt) =>
    opt.addEventListener("click", () => {
      const selectedMood = opt.dataset.mood;

      currentList =
        selectedMood === "All"
          ? songs
          : songs.filter(
              (s) => Array.isArray(s.mood) && s.mood.includes(selectedMood),
            );

      currentSongIndex = 0;
      loadSong(0);
      renderPlaylist(currentList);

      applyMoodTheme(selectedMood); // 🔥 THIS LINE
      moodDropdown.classList.remove("show");
    }),
  );
}

/* =========================
   LANGUAGE DROPDOWN 
========================= */
if (langBtn && langDropdown && langOptions.length) {
  langBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle("show");
  });

  document.addEventListener("click", () =>
    langDropdown.classList.remove("show"),
  );

  langOptions.forEach((opt) =>
    opt.addEventListener("click", () => {
      const selectedLang = opt.dataset.lang;
      currentList =
        selectedLang === "All"
          ? songs
          : songs.filter((s) => s.language === selectedLang);
      currentSongIndex = 0;
      loadSong(0);
      renderPlaylist(currentList);
      langDropdown.classList.remove("show");
    }),
  );
}

/* =========================
   SEARCH
========================= */
searchInput.addEventListener("input", () => {
  const v = searchInput.value.toLowerCase();
  renderPlaylist(
    currentList.filter(
      (s) =>
        s.name.toLowerCase().includes(v) || s.artist.toLowerCase().includes(v),
    ),
  );
});

/* =========================
   ❤️ LIKE BUTTON CLICK
========================= */
if (likeBtn) {
  likeBtn.addEventListener("click", () => {
    toggleLike(window.currentSong);
    refreshLike();
  });
}

/* =========================
   SHUFFLE
========================= */
shuffleBtn.addEventListener("click", () => {
  isShuffle = !isShuffle;
  shuffleBtn.classList.toggle("active", isShuffle);
});

/* =========================
   INIT
========================= */
const lastSongSrc = localStorage.getItem("lastSongSrc");

if (lastSongSrc) {
  const index = songs.findIndex((s) => s.src === lastSongSrc);

  if (index !== -1) {
    currentSongIndex = index;
    currentList = songs;
    loadSong(index);
  } else {
    loadSong(0);
  }
} else {
  loadSong(0);
}

volumeValue.textContent = Math.round(audio.volume * 100) + "%";

renderPlaylist(currentList);
audio.volume = 1;

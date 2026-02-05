document.addEventListener("DOMContentLoaded", () => {
  const likeBtn = document.querySelector(".Like");
  if (!likeBtn) return;

  const getLikedSongs = () =>
    JSON.parse(localStorage.getItem("likedSongs")) || [];

  const saveLikedSongs = (list) =>
    localStorage.setItem("likedSongs", JSON.stringify(list));

  const isLiked = (song) => getLikedSongs().some((s) => s.src === song.src);

  const refreshLike = () => {
    if (!window.currentSong) return;
    likeBtn.textContent = isLiked(window.currentSong) ? "❤️" : "🤍";
  };

  likeBtn.addEventListener("click", () => {
    if (!window.currentSong) return;

    let liked = getLikedSongs();
    const index = liked.findIndex((s) => s.src === window.currentSong.src);

    index === -1 ? liked.push(window.currentSong) : liked.splice(index, 1);

    saveLikedSongs(liked);
    refreshLike();
  });

  window.refreshLike = refreshLike;
});

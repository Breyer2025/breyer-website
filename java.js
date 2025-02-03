document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("myVideo");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const progressBar = document.getElementById("progressBar");
    const volumeSlider = document.getElementById("volumeSlider");
    const currentTimeDisplay = document.getElementById("currentTime");
    const totalDurationDisplay = document.getElementById("totalDuration");
    const fullscreenBtn = document.getElementById("fullscreenBtn");

    // Play/Pause Function
    playPauseBtn.addEventListener("click", () => {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = "⏸";
        } else {
            video.pause();
            playPauseBtn.textContent = "▶";
        }
    });

    // Update Progress Bar
    video.addEventListener("timeupdate", () => {
        let progress = (video.currentTime / video.duration) * 100;
        progressBar.value = progress;
        currentTimeDisplay.textContent = formatTime(video.currentTime);
    });

    // Seek Video
    progressBar.addEventListener("input", () => {
        video.currentTime = (progressBar.value / 100) * video.duration;
    });

    // Volume Control
    volumeSlider.addEventListener("input", () => {
        video.volume = volumeSlider.value;
    });

    // Fullscreen
    fullscreenBtn.addEventListener("click", () => {
        if (!document.fullscreenElement) {
            video.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });

    // Format Time Display
    function formatTime(seconds) {
        let minutes = Math.floor(seconds / 60);
        let secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    }

    // Update Total Duration
    video.addEventListener("loadedmetadata", () => {
        totalDurationDisplay.textContent = formatTime(video.duration);
    });
});

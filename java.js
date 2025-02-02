// Display an alert when the explore button is clicked
document.querySelector(".btn").addEventListener("click", function() {
    alert("Selamat Datang ke Kolej Breyer Gombak!");
});

document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("myVideo");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const volumeSlider = document.getElementById("volumeSlider");
    const progressBar = document.getElementById("progressBar");
    const currentTimeDisplay = document.getElementById("currentTime");
    const totalDurationDisplay = document.getElementById("totalDuration");
    const fullscreenBtn = document.getElementById("fullscreenBtn");

    // Play/Pause Button
    playPauseBtn.addEventListener("click", function () {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = "⏸";
        } else {
            video.pause();
            playPauseBtn.textContent = "▶";
        }
    });

    // Update volume
    volumeSlider.addEventListener("input", function () {
        video.volume = volumeSlider.value;
    });

    // Update progress bar
    video.addEventListener("timeupdate", function () {
        progressBar.value = (video.currentTime / video.duration) * 100;
        currentTimeDisplay.textContent = formatTime(video.currentTime);
    });

    // Seek video
    progressBar.addEventListener("input", function () {
        video.currentTime = (progressBar.value / 100) * video.duration;
    });

    // Display total duration when video loads
    video.addEventListener("loadedmetadata", function () {
        totalDurationDisplay.textContent = formatTime(video.duration);
    });

    // Fullscreen Button
    fullscreenBtn.addEventListener("click", function () {
        if (!document.fullscreenElement) {
            video.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });

    // Keyboard Shortcuts (Netflix-style)
    document.addEventListener("keydown", function (event) {
        switch (event.code) {
            case "Space":
                event.preventDefault();
                playPauseBtn.click();
                break;
            case "ArrowRight":
                video.currentTime += 5;
                break;
            case "ArrowLeft":
                video.currentTime -= 5;
                break;
            case "ArrowUp":
                video.volume = Math.min(video.volume + 0.1, 1);
                volumeSlider.value = video.volume;
                break;
            case "ArrowDown":
                video.volume = Math.max(video.volume - 0.1, 0);
                volumeSlider.value = video.volume;
                break;
        }
    });

    // Format time as MM:SS
    function formatTime(seconds) {
        let min = Math.floor(seconds / 60);
        let sec = Math.floor(seconds % 60);
        return `${min}:${sec < 10 ? "0" : ""}${sec}`;
    }
});

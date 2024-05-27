document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('landingVideo');
    const button = document.getElementById('playButton');

    // Function to detect mobile devices
    function isMobileDevice() {
        return /Mobi|Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    console.log('Is Mobile Device:', isMobileDevice());

    if (isMobileDevice()) {
        console.log('Adding poster attribute for mobile device');
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', '');
        video.setAttribute('poster', 'assets/images/landingAnimationPoster.jpg');
    }

    button.addEventListener('click', () => {
        video.play();
        video.style.opacity = 1; // Ensure video is fully visible when playing
        button.style.display = 'none'; // Hide the play button
    });

    video.addEventListener('ended', () => {
        window.location.href = 'main.html'; // Redirect when video ends
    });
});

// Skip button
const toggleVideo = () => {
    window.location.href = 'main.html';
};

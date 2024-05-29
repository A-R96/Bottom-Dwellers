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
        video.style.opacity = 1;
        button.style.display = 'none';
    });

    // Event listener to handle the end of the video
    video.addEventListener('ended', () => {
        console.log('Video ended, redirecting...');
        window.location.href = 'main.html'; // Redirect when video ends
    });

    // Ensure the video plays when the button is clicked even if it's in the middle
    video.addEventListener('play', () => {
        video.style.opacity = 1;
        button.style.display = 'none';
    });

    video.addEventListener('pause', () => {
        video.style.opacity = 0.5;
    });

});

// Skip button
const toggleVideo = () => {
    console.log('Skipping video, redirecting...');
    window.location.href = 'main.html';
};

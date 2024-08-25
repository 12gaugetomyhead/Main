window.onload = function() {
    const fadeContainer = document.getElementById('fade-container');
    const clickText = document.getElementById('click-text');

    // Fade in the initial text
    fadeContainer.classList.add('show');

    // Add click event to the text
    clickText.addEventListener('click', function() {
        fadeContainer.style.transition = 'opacity 1s ease-in-out';
        fadeContainer.style.opacity = '0';

        // After the fade-out, change the background to white
        setTimeout(function() {
            document.body.style.backgroundColor = 'white';
            fadeContainer.style.color = 'black';
            fadeContainer.style.opacity = '1';
            clickText.textContent = '';
        }, 1000); // 1 second delay to match fade-out
    });
};

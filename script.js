window.onload = function() {
    const fadeContainer = document.getElementById('fade-container');
    const clickText = document.getElementById('click-text');
    const star = document.getElementById('star');

    // Fade in the initial text
    fadeContainer.classList.add('show');

    // Add click event to the text
    clickText.addEventListener('click', function() {
        fadeContainer.style.transition = 'opacity 0.7s ease-in-out';
        fadeContainer.style.opacity = '0';

        // After the fade-out, change the background to white
        setTimeout(function() {
            document.body.style.backgroundColor = 'white';
            fadeContainer.style.opacity = '1';
            clickText.textContent = '';
            fadeContainer.style.color = 'black';
            star.style.color = 'white';
        }, 700); // Adjusted delay to match fade-out
    });

    // Follow the mouse with a black and white "*"
    document.addEventListener('mousemove', function(e) {
        star.style.left = e.clientX + 'px';
        star.style.top = e.clientY + 'px';
        star.classList.remove('hidden');
    });
};

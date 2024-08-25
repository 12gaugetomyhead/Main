window.onload = function() {
    const fadeContainer = document.getElementById('fade-container');
    const clickText = document.getElementById('click-text');

    // Fade in the initial text
    fadeContainer.classList.add('show');

    // Add click event to the text
    clickText.addEventListener('click', function() {
        fadeContainer.style.transition = 'opacity 0.5s ease-in-out';
        fadeContainer.style.opacity = '0';

        // After the fade-out, change the background to white and remove snowflakes
        setTimeout(function() {
            document.body.style.backgroundColor = 'white';
            fadeContainer.style.opacity = '1';
            clickText.textContent = '';

            // Remove all existing snowflakes
            document.querySelectorAll('.snowflake').forEach(snowflake => {
                snowflake.remove();
            });

            // Stop generating new snowflakes
            clearInterval(snowflakeInterval);

        }, 500); // Ensures this happens after the fade-out
    });

    // Function to create snowflakes
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄';

        // Random position and speed
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        snowflake.style.opacity = `${Math.random() + 0.3}`;

        document.body.appendChild(snowflake);

        // Remove the snowflake after it falls
        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }

    // Generate snowflakes at intervals
    const snowflakeInterval = setInterval(createSnowflake, 200);
};

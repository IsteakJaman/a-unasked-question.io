document.addEventListener('DOMContentLoaded', function () {
    const textContainer = document.getElementById('animated-text');

    function scatterLetters() {
        const letters = textContainer.querySelectorAll('.letter');
        letters.forEach(letter => {
            letter.style.opacity = '1'; // Keep letters visible
            letter.style.transition = 'transform 2.5s ease-out'; // Add transition

            // Generate a random angle between 0 and 360 degrees
            const angle = Math.random() * 360;

            // Calculate the random position based on the angle and distance
            const distance = 150; // You can adjust the distance as needed
            const x = distance * Math.cos(angle * (Math.PI / 180));
            const y = distance * Math.sin(angle * (Math.PI / 180));

            letter.style.transform = `translate(${x}px, ${y}px)`;
        });
    }

    function rearrangeLetters() {
        const letters = textContainer.querySelectorAll('.letter');
        letters.forEach(letter => {
            letter.style.transform = 'translate(0, 0)';
        });
    }

    function initialAnimation() {
        scatterLetters();
        setTimeout(() => {
            rearrangeLetters();
        }, 1000); // 1 second for the letters to scatter
    }

    initialAnimation(); // Run the initial animation

    setInterval(() => {
        scatterLetters();
        setTimeout(() => {
            rearrangeLetters();
        }, 3000);//scatter hoye kotokkhon thakbe
    }, 55000); // 6 seconds total (5 seconds rearranged, 1 second scattered)
});

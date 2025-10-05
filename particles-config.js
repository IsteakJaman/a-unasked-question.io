// particles.js

particlesJS('particles-js', {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 900 } },
        color: { value: '#ff00bf' },
        shape: { type: 'circle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 10 }, image: { src: 'img/github.svg', width: 500, height: 100 } },
        opacity: { value: 0.5, random: true, anim: { enable: true, speed: 5, opacity_min: 0.1, sync: false } },
        size: { value: 6, random: true, anim: { enable: true, speed: 5, size_min: 0.1, sync: false } },
        line_linked: { enable: true, distance: 180, color: '#ff00bf', opacity: 0.5, width: 1.5 },
        move: { enable: true, speed: 8, direction: 'none', random: true, straight: false, out_mode: 'i', bounce: false, attract: { enable: true, rotateX: 600, rotateY: 1200 } }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
    },
    retina_detect: true
});

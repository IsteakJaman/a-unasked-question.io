// typewriter.js

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;          // Array of strings to be typed
    this.el = el;                      // Element to apply the typewriter effect
    this.loopNum = 0;                  // Counter to track the current string in the array
    this.period = parseInt(period, 10) || 2000;  // Time delay between phrases (default: 2000 milliseconds)
    this.txt = '';                     // Current text being displayed
    this.tick();                       // Start the typewriter effect
    this.isDeleting = false;           // Flag to indicate if the effect is currently deleting characters
};


TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);  // Deleting characters
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);  // Typing characters
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 100 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;  // Adjust speed when deleting characters
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;  // Time delay after completing a phrase
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;  // Switch to typing mode after deleting all characters
        this.loopNum++;          // Move to the next phrase in the array
        delta = 500;             // Short time delay before starting to type the next phrase
    }

    setTimeout(function() {
        that.tick();  // Recursive call to continue the typewriter effect
    }, delta);
};


window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
};

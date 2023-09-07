window.onload = function() {
    window.scrollTo(0,document.body.scrollHeight);

    setTimeout(function() {
        
        document.getElementById('rocket-container').classList.add('animated');
        
        window.requestAnimationFrame(step);
    }, 500);
}

let start;
let duration = 10000;

function step(timestamp) {
    if (!start) start = timestamp;
    let progress = timestamp - start;

    let scrollAmount = (progress / duration) * (document.body.scrollHeight - window.innerHeight);

    window.scrollTo(0, scrollAmount);
    if (progress < duration) {
        window.requestAnimationFrame(step);
    }
}
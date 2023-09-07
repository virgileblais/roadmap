window.onload = function() {
    setTimeout(function() {
        
        document.getElementById('rocket-container').classList.add('animated');
        
        window.requestAnimationFrame(step);
    }, 0);
}

let start;
let duration = 10000;

function step(timestamp) {
    if (!start) {
        start = timestamp;

        window.scrollTo(0, document.documentElement.scrollHeight - window.innerHeight);
    }
    let progress = timestamp - start;

    let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    let scrollAmount = maxScroll * (1 - (progress / duration));

    window.scrollTo(0, scrollAmount);
    if (progress < duration) {
        window.requestAnimationFrame(step);
    }
}
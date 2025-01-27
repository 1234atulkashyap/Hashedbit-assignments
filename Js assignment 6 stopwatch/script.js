let hours = 0, minutes = 0, seconds = 0;
let timer;
let isPaused = false;

function updateTimeDisplay() {
    const timeDisplay = document.getElementById('time');
    timeDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function start() {
    if (isPaused) {
        isPaused = false;
        document.getElementById('pause').textContent = 'Pause';
    } else {
        timer = setInterval(updateTime, 1000);
    }
    document.getElementById('start').disabled = true;
    document.getElementById('pause').disabled = false;
    document.getElementById('stop').disabled = false;
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateTimeDisplay();
}

function pause() {
    if (isPaused) {
        timer = setInterval(updateTime, 1000);
        document.getElementById('pause').textContent = 'Pause';
    } else {
        clearInterval(timer);
        document.getElementById('pause').textContent = 'Continue';
    }
    isPaused = !isPaused;
}

function stop() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateTimeDisplay();
    document.getElementById('start').disabled = false;
    document.getElementById('pause').disabled = true;
    document.getElementById('stop').disabled = true;
    document.getElementById('pause').textContent = 'Pause';
    isPaused = false;
}

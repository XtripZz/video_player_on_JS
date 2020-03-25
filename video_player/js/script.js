let video;
let display;
let progress;
let timer;

video = document.querySelector('#video-player');
progress = document.querySelector('#progress');
timer = document.querySelector('.timer');

document.querySelector('#play').onclick = play;
document.querySelector('#pause').onclick = pause;
document.querySelector('#stop').onclick = stop;
document.querySelector('#speed-up').onclick = speedUp;
document.querySelector('#speed-down').onclick = speedDown;
document.querySelector('#speed-normal').onclick = speedNormal;
document.querySelector('#volume').oninput = volume;

// !!!
video.ontimeupdate = progressUpdate;
progress.onclick = videoRewind;



function play() {
    video.play();
}

function pause() {
    video.pause();
}

function stop() {
    video.pause();
    video.currentTime = 0;
}

function speedUp() {
    if (video.playbackRate <= 8 && video.playbackRate >= 1) {
        video.play();
        video.playbackRate += 1;
    } else if (video.playbackRate == .5) {
        video.play();
        video.playbackRate += .5;
    } else if (video.playbackRate == .25) {
        video.play();
        video.playbackRate += .25;
    }
}

function speedDown() {
    if (video.playbackRate > 1) {
        video.play();
        video.playbackRate -= 1;
    } else if (video.playbackRate <= 1 && video.playbackRate > .5) {
        video.play();
        video.playbackRate -= .5;
    } else if (video.playbackRate <= .5 && video.playbackRate > .25) {
        video.play();
        video.playbackRate -= .25;
    }
}

function speedNormal() {
    video.play();
    video.playbackRate = 1;
}

function volume() {
    let v = this.value;
    video.volume = v / 100;
}

function progressUpdate() {
    let d = video.duration;
    let c = video.currentTime;
    let num = Math.floor(video.currentTime);
    let num2 = num - 60;
    progress.value = 100 * (c / d);

    // play time
    if (num < 10) {
        timer.innerHTML = `00:0${num}`;
    } else if (num >= 10 && num < 60) {
        timer.innerHTML = `00:${num}`;
    } else if (num >= 60 && num2 < 10) {
        timer.innerHTML = `01:0${num2}`;
    } else if (num >= 60 && num2 < 60) {
        timer.innerHTML = `01:${num2}`;
    }
}

function videoRewind() {
    let w = this.offsetWidth;
    let o = event.offsetX;
    this.value = 100 * (o / w);
    video.currentTime = video.duration * (o / w);
}
const time = document.querySelector('#time');
const color = document.querySelector('#color');

function setTime() {
    const date = new Date();
    let hours = date.getHours().toString();
    let minutes = date.getMinutes().toString();
    let seconds = date.getSeconds().toString();

    if (hours.length < 2) {
        hours = `0${hours}`;
    }
    if (minutes.length < 2) {
        minutes = `0${minutes}`;
    }
    if (seconds.length < 2) {
        seconds = `0${seconds}`;
    }

    let timeString = `${hours}:${minutes}:${seconds}`;
    let colorString = `#${hours}${minutes}${seconds}`;

    time.textContent = timeString;
    color.textContent = colorString;

    let luminance = chroma(colorString).luminance();
    
    document.body.style.background = colorString;

    if (luminance > 0.5) {
        time.style.color = `#000`;
        color.style.color = `#000`;
    } else if (luminance < 0.5) {
        time.style.color = `#fff`;
        color.style.color = `#fff`;
    }
}

setTime();

setInterval(setTime, 1000);

color.addEventListener('click', () => {
    navigator.clipboard.writeText(color.textContent);
})
const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');



const changeBodyColor = color => document.body.style.backgroundColor = color;
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const doChangeBodyColorTimer = () => {
    const randomColor = getRandomHexColor();
    changeBodyColor(randomColor);
    console.log(randomColor);
};

let intervalId;
const startInterval = () => {
    buttonStart.disabled = true;
    buttonStop.disabled = false;
    doChangeBodyColorTimer();
    intervalId = setInterval(doChangeBodyColorTimer, 1000);
};
const stopInterval = () => {
    buttonStop.disabled = true;
    buttonStart.disabled = false;
    clearInterval(intervalId);
};

buttonStart.addEventListener('click', startInterval);
buttonStop.addEventListener('click', stopInterval);

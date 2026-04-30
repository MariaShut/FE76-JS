const time = document.getElementById('time');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let seconds = 0;
let timerId;

function render() {
	time.textContent = `${seconds} sec`;
}

// Handlers

startBtn.addEventListener('click', () => {
	if (timerId) return; // eсли таймер уже идёт, не запускаем интервал

	timerId = setInterval(() => {
		seconds++;
		render();
	}, 1000);
});

stopBtn.addEventListener('click', () => {
	clearInterval(timerId);
	timerId = null; // обнуляем, чтобы затем сработал start
});

resetBtn.addEventListener('click', () => {
	clearInterval(timerId);
	timerId = null;
	seconds = 0;
	render();
});

render();

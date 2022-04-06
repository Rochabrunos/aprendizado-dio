import { Dino } from "./dino.js";
import { Cacto } from "./cacto.js";

const gameElement = document.querySelector(".game__background");
const dinoElement = document.querySelector(".game__dino");
const myDino = new Dino(dinoElement);
let gameStarted = false;

window.addEventListener("keypress", (event) => {
	if (event.code === "Space" && gameStarted) {
		gameStarted = !gameStarted;
		console.log("Jogo Inciado");
		return;
	}
	if (event.code === "Space") {
		myDino.move();
	}
	if (event.code === "KeyP") {
		gameStarted = !gameStarted;
		console.log("Jogo Parado");
		return;
	}
});

let interval = 2000;
// setInterval(() => {
const cactoElement = new Cacto();
gameElement.appendChild(cactoElement.cactoElement);
setTimeout(() => cactoElement.move(), 200);
setInterval(() => {
	overlapDetection(dinoElement, cactoElement.cactoElement);
}, 20);
clearInterval();
setTimeout(() => gameElement.removeChild(cactoElement.cactoElement), 2100);
// }, interval);

const overlapDetection = (dino, cactus) => {
	const dinoPosition = dino.getBoundingClientRect();
	var cactusPosition = cactus.getBoundingClientRect();

	if (
		cactusPosition.left <= dinoPosition.right &&
		dinoPosition.top >= cactusPosition.top
	) {
		alert("encostou");
	}
	console.log(`${cactusPosition.left} <= ${dinoPosition.right} &&
		${dinoPosition.bottom} >= ${cactusPosition.top}`);
};

async function getNewImage() {
	const apiCall = await fetch(
		"https://api.thecatapi.com/v1/images/search?size=small"
	);
	let jsonResponse;
	await apiCall.json().then((data) => {
		jsonResponse = data[0];
	});

	return jsonResponse;
}

async function setImage() {
	const imageEl = document.querySelector("#cat");
	const newImage = await getNewImage();
	imageEl.src = newImage.url;
}
const button = document.querySelector("#change-cat");
button.addEventListener("click", () => {
	setImage();
});

setImage();

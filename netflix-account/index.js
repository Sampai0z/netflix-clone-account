function redirect() {
	window.location.href = "http://localhost:5173/";
}

const show = document.getElementById("show-more");
const text = document.getElementById("show-more-2");

show.addEventListener("click", () => {
	text.classList.remove("hidden");
	show.classList.add("hidden");
});

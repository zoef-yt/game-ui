function changeIframe(newSrc) {
	document.getElementById("showcase-display-iframe").src = newSrc;
}

document.querySelectorAll(".showcase-list-item").forEach(function (item) {
	item.addEventListener("click", function () {
		document.querySelectorAll(".showcase-list-item-active").forEach(function (item) {
			item.classList.remove("showcase-list-item-active");
		});
		item.classList.add("showcase-list-item-active");
	});
});

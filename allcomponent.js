// JS for modal
const openModal = (id) => {
	document.getElementById(id).classList.add("modal-opened");
	document.getElementById(id).classList.remove("modal-display-none");
};

const closeModal = (id) => {
	document.getElementById(id).classList.remove("modal-opened");
	document.getElementById(id).classList.add("modal-display-none");
};

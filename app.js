function changeIframe(newSrc) {
	document.getElementById('showcase-display-iframe').src = newSrc;
}

document.querySelectorAll('.showcase-list-item').forEach(function (item) {
	item.addEventListener('click', function () {
		document.querySelectorAll('.showcase-list-item-active').forEach(function (item) {
			item.classList.remove('showcase-list-item-active');
		});
		item.classList.add('showcase-list-item-active');
	});
});

switch (window.location.hash) {
	case '#alert':
		changeIframe('../../pages/components/alert/alert.html');
		break;

	case '#avatar':
		changeIframe('../../pages/components/avatar/avatar.html');
		break;

	case '#badge':
		changeIframe('../../pages/components/badge/badge.html');
		break;

	case '#button':
		changeIframe('../../pages/components/button/button.html');
		break;

	case '#card':
		changeIframe('../../pages/components/card/card.html');
		break;

	case '#image':
		changeIframe('../../pages/components/image/image.html');
		break;

	case '#input':
		changeIframe('../../pages/components/input/input.html');
		break;

	case '#list':
		changeIframe('../../pages/components/list/list.html');
		break;

	case '#modal':
		changeIframe('../../pages/components/modal/modal.html');
		break;

	case '#text-utilities':
		changeIframe('../../pages/components/text-utilities/text-utilities.html');
		break;

	default:
		changeIframe('../../pages/components/alert/alert.html');
		break;
}

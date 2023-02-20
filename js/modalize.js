/* Modal Plugin - jQuery */
// This will attach event handler to any element with class modal

$.fn.modalize = function(options) {
	// options
	let modalOptions = $.extend({}, $.fn.modalize.defaults, options);

	// modal text
	const modalTitle = $(this).attr('data-modal-title');
	const modalText= $(this).attr('data-modal-text');
	const overlay = $('<div class="overlay"></div>');
	const modal = $(`
			<div class="modal">
				<div class="modal-title"></div>
				<div class="modal-text"></div>
				<div class="close-button">X</div>
			</div>
		`)
		.css('background-color', modalOptions.background)
		.css('color', modalOptions.foreground);
	const myWindow = $(window)


	const centerModal = function() {
		modal.css('top', myWindow.height() * .5 - modal.height());
		modal.css('left', myWindow.width() * .25);
	};

	const init = function() {
		$(modal).find('.modal-title').text(modalTitle);
		$(modal).find('.modal-text').text(modalText);
		modal.find('.modal-title').text(modalTitle);
		modal.find('.modal-text').text(modalText);

		$('body').append(overlay);
		$('body').append(modal);
		centerModal()

		// add event handlers for closing the modal
		const closeButton = $('.close-button');
		closeButton.on('click', close.bind(this));

		myWindow.resize(centerModal)
	};

	// function to close the modal
	const close = function() {
		overlay.remove();
		modal.remove();
		myWindow.off('resize', centerModal)
	};

	// call init function
	init();

	// to make this jQuery plugin chainable, we return this
	return this;
};

// set plugin defaults
$.fn.modalize.defaults = {
	'foreground': '#000',
	'background': '#fff'
};
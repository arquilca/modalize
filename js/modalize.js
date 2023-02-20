/* Modal Plugin - jQuery */
// This will attach event handler to any element with class modal

$.fn.modalize = function(options) {
	// options
	let modalOptions = $.extend({}, $.fn.modalize.defaults, options);

	// modal text
	const modalTitle = $(this).attr('data-modal-title');
	const modalText= $(this).attr('data-modal-text');
	const overlay = $('<div class="overlay"></div>');
	const modal = $('<div class="modal"></div>')
		.append('<div class="modal-title"></div>')
		.append('<div class="modal-text"></div>')
		.append('<div class="close-button">X</div>')
		.css('background-color', modalOptions.background)
		.css('color', modalOptions.foreground);

	// initialize by setting the text and displaying the modal
	const init = function() {
		$(modal).find('.modal-title').text(modalTitle);
		$(modal).find('.modal-text').text(modalText);
		$('body').append(overlay);
		$('body').append(modal);

		// dispay modal in center position
		modal.css('top', $(window).height() * .5 - $(modal).height());
		modal.css('left', $(window).width() * .25);

		// add event handlers for closing the modal
		const closeButton = $('.close-button');
		closeButton.on('click', close.bind(this));

		// TODO - add event handler for window resize
	};

	// function to close the modal
	const close = function() {
		overlay.remove();
		modal.remove();
	};

	/// TODO - Update position when window is resized or scrolled
	const updatePosition = function() {

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
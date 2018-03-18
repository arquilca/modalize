# Modalize - jQuery Plugin

Simple modal plugin that I'm working on to learn some jquery plugin concepts. You can add a button to your page and this will display a modal that will include a title and text pulled from data attributes of the element that was clicked.

## Getting Started

Include the script in your head tag.

```
<script type="text/javascript" src="js/modalize.js"></script>
```

Add the element that will server as your link/button to open the modal. Pick a class for it and set the modal title and text in data-modal-title and data-modal-text, correspondingly.

```
<a href="#" class="modal-button" data-modal-title="My Modal Title" data-modal-text="Text to show in modal">Open Modal</a>
```

Add a click event handler for the element you just added.

```
// add click event handler to any element with class modal-button
$(document).ready(function() {
	$('.modal-button').on('click', $(this).modalize);
});
```

## Prerequisites

You will need to include jQuery for this plugin to work.

```

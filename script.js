var linkButtons = document.querySelectorAll(".linkButton");
linkButtons.forEach(function(button) {
	button.addEventListener("click", function() {
		var link = button.previousElementSibling;
		window.open(link.href, "_blank");
	});
});

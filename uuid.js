(function() {
	function guid() {
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000)
				.toString(16)
				.substring(1);
		}
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	}

	function copy(text) {
		var input = document.createElement('input');
		input.style.position = 'fixed';
		input.style.opacity = 0;
		input.value = text;
		document.body.appendChild(input);
		input.select();
		var successful = document.execCommand('copy');
		document.body.removeChild(input);

		return successful;
	}

	var uuid = guid();
	var successful = copy(uuid);
	window.alert(successful ? "Copied UUID=" + uuid : "Failed to copy UUID");
})()
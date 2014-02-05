(function (global) {
	
	document.addEventListener('deviceready', function () {
		navigator.splashscreen.hide();
	}, false);

	var app = new kendo.mobile.Application(document.body, { transition: "slide", layout: "jitterz-default" });

	
})(window);









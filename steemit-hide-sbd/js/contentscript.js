(function(){
	chrome.storage.sync.get('setting', function(data) {
		function clearPayout() {
			var e = document.querySelectorAll('span.FormattedAsset');
			for (var i = e.length - 1; i >= 0; -- i) {
				e[i].innerHTML = 'XXX';
			}
			var e = document.querySelectorAll('span.post-payout');
			for (var i = e.length - 1; i >= 0; -- i) {
				e[i].innerHTML = 'XXX';
			}
		}		
		if ((data == null) || (data.setting == 0)) {
			clearPayout();
			setInterval(clearPayout, 1000);
		} else {
			clearInterval(clearPayout);
		}
	});  
})();

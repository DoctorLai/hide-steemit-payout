(function(){
	chrome.storage.sync.get('XXX', function(data) {
		var XXX = 'XXX';
		if (data && data.XXX != null) {
			XXX = data.XXX;
		}
		chrome.storage.sync.get('setting', function(data) {
			function clearPayout() {
				var url = location.href.toLowerCase();
				if (
						(url.includes("steemit.com")) || 
						(url.includes("steemd.com")) || 
						(url.includes("busy.org")) || 
						(url.includes("cnsteem.com")) || 
						(url.includes("steem")) 
				) {
					var e = document.querySelectorAll('span.FormattedAsset');
					for (var i = e.length - 1; i >= 0; -- i) {
						e[i].innerHTML = XXX;
					}
					var e = document.querySelectorAll('span.post-payout');
					for (var i = e.length - 1; i >= 0; -- i) {
						e[i].innerHTML = XXX;
					}
					var e = document.querySelectorAll("a[href*=transfers]");
					for (var i = e.length - 1; i >= 0; -- i) {
						e[i].innerHTML = '';
						e[i].setAttribute("href", "#");
					}
				}
			}		
			if ((data != null) && (data.setting != 0)) {
				clearPayout();
				setInterval(clearPayout, 1000);
			} else {
				clearInterval(clearPayout);
			}
		}); 
	});
})();

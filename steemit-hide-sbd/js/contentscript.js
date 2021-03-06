(function(){
	chrome.storage.sync.get('hide_steem_sbd_settings', function(data) {
		if (data && data.hide_steem_sbd_settings) {
			let settings = data.hide_steem_sbd_settings;
			let rules = "";
			if (settings.rules) {
				rules = settings.rules;
			}
			let arr = rules.trim().split("\n");
			let ruleslen = arr.length;
			let XXX = 'XXX';
			if (settings.XXX) {
				XXX = settings.XXX;
			} 
			let show = "show";
			if (settings.show) {
				show = settings.show;
			}			
			function clearPayout() {
				let url = location.href;
				if (IsSteemWebsite(url)) {
					let e = document.querySelectorAll('span.FormattedAsset');
					for (let i = e.length - 1; i >= 0; -- i) {
						e[i].innerHTML = XXX;
					}
					e = document.querySelectorAll('span.post-payout');
					for (let i = e.length - 1; i >= 0; -- i) {
						e[i].innerHTML = XXX;
					}
					e = document.querySelectorAll('span.Payout');
					for (let i = e.length - 1; i >= 0; -- i) {
						e[i].innerHTML = XXX;
					}					
					e = document.querySelectorAll("a[href*=transfers]");
					for (let i = e.length - 1; i >= 0; -- i) {
						e[i].innerHTML = '';
						e[i].setAttribute("href", "#");
					}
					for (let i = 0; i < ruleslen; ++ i) {
						let rule = arr[i];
						if (rule) {
							let [domain, dom] = /([^\s]+)\s(.+)/.exec(rule).slice(1);
							if (domain && dom) {
								let e = document.querySelectorAll("li[data-key=transfers]");
								if (e) {
									for (let i = e.length - 1; i >= 0; -- i) {
										e[i].innerHTML = '';
										e[i].setAttribute("href", "#");
									}									
								}
							}
						}
					}
					if (url.includes("busy.org")) {
						let e = document.querySelectorAll("li[data-key=transfers]");
						for (let i = e.length - 1; i >= 0; -- i) {
							e[i].innerHTML = '';
						}
					}
				}
			}		
			if (show == 'hide') {
				clearPayout();
				setInterval(clearPayout, 800);
			} else {
				clearInterval(clearPayout);
			}
		}
	});
})();

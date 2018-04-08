function getChromeVersion() {     
	var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
	return raw ? parseInt(raw[2], 10) : false;
}

var manifest = chrome.runtime.getManifest();
var app_name = manifest.name + " v" + manifest.version;

// save settings
const saveSettings = () => {
    let XXX = $('#XXX').val();
    let show = $('select#show').val();
    let rules = $('textarea#rules').val();
    let settings = {};
    settings['XXX'] = XXX;
    settings['show'] = show;
    settings['rules'] = rules;
    chrome.storage.sync.set({ 
        hide_steem_sbd_settings: settings
    });    
}

document.addEventListener('DOMContentLoaded', function() {
	$('#msg').html("<font color=gray><I>" + app_name + "</I></font>");
	$('input#XXX').change(function() {
		saveSettings();
	});		
	$('select#show').change(function() {
		saveSettings();
	});   
	chrome.storage.sync.get('hide_steem_sbd_settings', function(data) {
		if (data && data.hide_steem_sbd_settings) {
			let settings = data.hide_steem_sbd_settings;
			if (settings.XXX) {
				$("input#XXX").val(settings.XXX);
			} else {
				$("input#XXX").val('XXX');
			}
			if (settings.show) {
				$('select#show').val(settings.show);
			} else {
				$('select#show').val("show");
			}
			if (settings.rules) {
				$('textarea#rules').val(settings.rules);
			} else {
				$('textarea#rules').val("");
			}
		}
	});
	$("textarea#rules").keyup(function() {
		saveSettings();
	});
 }, false);
function getChromeVersion() {     
	var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
	return raw ? parseInt(raw[2], 10) : false;
}

var manifest = chrome.runtime.getManifest();
var app_name = manifest.name + " v" + manifest.version;

document.addEventListener('DOMContentLoaded', function() {

	document.getElementById('msg').innerHTML = "<font color=gray><I>" + app_name + "</I></font>";

	$('#XXX').change(function() {		
		chrome.storage.sync.set({ XXX: document.getElementById("XXX").value });
	});   
	$('select#setting').change(function() {
		chrome.storage.sync.set({ setting: document.getElementById("setting").selectedIndex });
	});   

	chrome.storage.sync.get('XXX', function(data) {
		if (data != null) {
			if ((data.XXX != null)) {
				document.getElementById("XXX").value = data.XXX; 
			}					
		}
	}); 	
	chrome.storage.sync.get('setting', function(data) {
		if (data != null) {
			if ((data.setting != null)) {
				document.getElementById("setting").selectedIndex = data.setting;  
			}
		}
	});  
 }, false);
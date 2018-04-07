'use strict';

const IsSteemWebsite = (url) => {
	url = url.toLowerCase();
	return ((url.includes("steemit.com")) || 
			(url.includes("steemd.com")) || 
			(url.includes("steemdb.com")) || 
			(url.includes("steemkr.com")) || 
			(url.includes("busy.org")) || 
			(url.includes("cnsteem.com")) || 
			(url.includes("utopian.io")) || 
			(url.includes("chainbb.com")) || 
			(url.includes("steem"))
	); 	
}
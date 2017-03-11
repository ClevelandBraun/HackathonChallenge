var currentTime = new Date().getTime();
var urls = [];
var times = [];
var urlsLength = 0;
var timesLength = 0;
var lastUrl;


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if(changeInfo.status == 'complete') {
    	chrome.tabs.query({active: true, currentWindow: true }, function(tabs) {
    		var tab = tabs[0];
    		var url = tab.url;

    		// Print url when the tab is not a new tab
    		if (url != 'chrome://newtab/' && url != lastUrl) {
    			lastUrl = url;
    			urls.push(url);
    			times.push(new Date().getTime());
    			// alert(urls[urlsLength]);
    			// alert(times[timesLength]);
    			urlsLength++;
    			timesLength++;
    		}
    	});
    }
 });
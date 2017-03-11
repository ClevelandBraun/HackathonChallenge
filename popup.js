var tracked = false;

$("#track").click(function() {
  track = !track;
});


function getCurrentTabUrl(callback) {
  chrome.tabs.query({active: true, currentWindow: true }, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;
    callback(url);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(
    function(url) {
      alert('The current url is ' + url + '.');
    }, 
    function(errorMessage) {
      alert('Cannot display link!');
    });
});

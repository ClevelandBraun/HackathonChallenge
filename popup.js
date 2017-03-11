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

$(document).ready(function(){
  
  $(document).keypress(function(e) {
    if(e.which == 13) {
      if($("#text").val().length > 0 || $("#track").text().length == 7) { 
        var project = $("#text").val();
        $("#text").val("");
        $("#project").html("<strong>" + project + "<strong>");
        $("#input-row").toggleClass("hidden");
        if($("#track").text().length == 7){
          $("#track").html("Track");
          }
        else if($("#track").text().length == 5){
          $("#track").html("Untrack");  
        };
      }
      else{
        $("#project").html("<strong> Invalid Project <strong>");
      }
    }
  });

  $("#track").click(function(){
    if($("#text").val().length > 0 || $("#track").text().length == 7) { 
      var project = $("#text").val();
      $("#text").val("");
      $("#project").html("<strong>" + project + "<strong>");
      $("#input-row").toggleClass("hidden");
      if($("#track").text().length == 7){
        $("#track").html("Track");
      }
      else if($("#track").text().length == 5){
        $("#track").html("Untrack");  
      };
    }
    else{
      $("#project").html("<strong> Invalid Project <strong>");
    }
  });
});

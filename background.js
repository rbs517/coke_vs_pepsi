// this is a background script, it runs consistently in the background,
// useful if you need to keep track of info between pages
// or have stuff you don't want to load on every page

var timeouts = [];
var scriptRunning = false;

chrome.extension.onMessage.addListener(
  function(message, sender, sendResponse) {
  	if(message.toggleScript){
      if(!scriptRunning){
        runScript();
      } else {
        resetScript();
      }
      scriptRunning = !scriptRunning;
    }
});
function runScript(){
  // Start with coke website
  changeUrl("https://www.pepsi.com/en-us/",30);  
  changeUrl("https://us.coca-cola.com/",44);
  // Google trader joes near me
  // Go on Facebook to complain
  openNewWindow1("https://www.youtube.com/watch?v=wNl2TIlAjo0",156);
  openNewWindow1("https://us.coca-cola.com/",230);
  openNewWindow2("https://www.pepsi.com/en-us/",231);
  openNewWindow3("https://us.coca-cola.com/",232);
  openNewWindow4("https://www.pepsi.com/en-us/",233);
  openNewWindow5("https://us.coca-cola.com/",234);
  openNewWindow6("https://www.pepsi.com/en-us/",235);
  openNewWindow7("https://us.coca-cola.com/",236);
}

// these functions take in a url and a time in seconds
function changeUrl(newUrl, time){
  var newTimeout = setTimeout(function(){
    if(newUrl.slice(0,4) != "http"){newUrl = "http://"+newUrl;}
    chrome.tabs.update({ url: newUrl });
  }, time * 1000);
  timeouts.push(newTimeout);
}
function openNewTab(newUrl, time){
  var newTimeout = setTimeout(function(){
    if(newUrl.slice(0,4) != "http"){newUrl = "http://"+newUrl;}
    chrome.tabs.create({ url: newUrl });
  }, time * 1000);
  timeouts.push(newTimeout);
}
function openNewWindow1(newUrl, time, left=0, top=0, width=500, height=400 ){
  var newTimeout = setTimeout(function(){
    if(newUrl.slice(0,4) != "http"){newUrl = "http://"+newUrl;}
    chrome.windows.create({ url: newUrl, left:left, top:top, width:width, height:height });
  }, time * 1000);
  timeouts.push(newTimeout);
}

function openNewWindow2(newUrl, time, left=500, top=0, width=300, height=700 ){
  var newTimeout = setTimeout(function(){
    if(newUrl.slice(0,4) != "http"){newUrl = "http://"+newUrl;}
    chrome.windows.create({ url: newUrl, left:left, top:top, width:width, height:height });
  }, time * 1000);
  timeouts.push(newTimeout);
}

function openNewWindow3(newUrl, time, left=500, top=500, width=500, height=600 ){
  var newTimeout = setTimeout(function(){
    if(newUrl.slice(0,4) != "http"){newUrl = "http://"+newUrl;}
    chrome.windows.create({ url: newUrl, left:left, top:top, width:width, height:height });
  }, time * 1000);
  timeouts.push(newTimeout);
}

function openNewWindow4(newUrl, time, left=0, top=500, width=800, height=400 ){
  var newTimeout = setTimeout(function(){
    if(newUrl.slice(0,4) != "http"){newUrl = "http://"+newUrl;}
    chrome.windows.create({ url: newUrl, left:left, top:top, width:width, height:height });
  }, time * 1000);
  timeouts.push(newTimeout);
}

function openNewWindow5(newUrl, time, left=30, top=300, width=100, height=400 ){
  var newTimeout = setTimeout(function(){
    if(newUrl.slice(0,4) != "http"){newUrl = "http://"+newUrl;}
    chrome.windows.create({ url: newUrl, left:left, top:top, width:width, height:height });
  }, time * 1000);
  timeouts.push(newTimeout);
}

function openNewWindow6(newUrl, time, left=1000, top=200, width=1000, height=400 ){
  var newTimeout = setTimeout(function(){
    if(newUrl.slice(0,4) != "http"){newUrl = "http://"+newUrl;}
    chrome.windows.create({ url: newUrl, left:left, top:top, width:width, height:height });
  }, time * 1000);
  timeouts.push(newTimeout);
}

function openNewWindow7(newUrl, time, left=1200, top=50, width=400, height=900 ){
  var newTimeout = setTimeout(function(){
    if(newUrl.slice(0,4) != "http"){newUrl = "http://"+newUrl;}
    chrome.windows.create({ url: newUrl, left:left, top:top, width:width, height:height });
  }, time * 1000);
  timeouts.push(newTimeout);
}

function checkWebAddress(url) {
    return window.location.href.indexOf(url) >= 0;
}

function resetScript(){
  for(var i = 0; i < timeouts.length; i++){
    clearTimeout(timeouts[i]);
  }
}
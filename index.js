var windows = require("sdk/windows").browserWindows;

var { isPrivate } = require("sdk/private-browsing");

var { attach, detach } = require('sdk/content/mod');
var { Style } = require('sdk/stylesheet/style');

var style = Style({
  uri: './style.css'
});

function blurWindow(window) {
  attach(style, window.tabs.activeTab);
}

function unBlurWindow(window) {
  detach(style, window.tabs.activeTab);
}

// run any init code needed
for (let window of windows) {
  if (isPrivate(window)) {

  }
}

windows.on('open', function(window) {
  if (isPrivate(window)) {

  }
});

windows.on('close', function(window) {
  if (isPrivate(window)) {

  }
});

// focus
windows.on('activate', function(window) {
  if (isPrivate(window)) {
    unBlurWindow(window);
  }
});

// unfocus
windows.on('deactivate', function(window) {
  if (isPrivate(window)) {
    blurWindow(window);
  }
});

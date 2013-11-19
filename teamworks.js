var s = document.createElement('script');
s.src = chrome.extension.getURL("jquery.simulate.js");
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(s);



var s = document.createElement('script');
s.src = chrome.extension.getURL("shortcuts.js");
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(s);

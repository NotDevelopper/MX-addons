javascript:
selected=window.getSelection();
var myRuntime = window.external.mxGetRuntime();
var mxTabs = myRuntime.create('mx.browser.tabs');
var TabNum = mxTabs.newTab({url:'https://en.wikipedia.org/w/index.php?title=Search&search='+encodeURIComponent(selected)+'',activate: true,position:"afterCurrrent"});
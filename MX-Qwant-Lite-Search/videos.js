javascript:
selected=window.getSelection();
var myRuntime = window.external.mxGetRuntime();
var mxTabs = myRuntime.create('mx.browser.tabs');
var TabNum = mxTabs.newTab({url:'https://lite.qwant.com/?t=videos&q='+encodeURIComponent(selected)+'',activate: true,position:"afterCurrrent"});
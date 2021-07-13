javascript:
selected=window.getSelection();
var myRuntime = window.external.mxGetRuntime();
var mxTabs = myRuntime.create('mx.browser.tabs');
var TabNum = mxTabs.newTab({url:'https://keep.google.com/#search/text%3D'+encodeURIComponent(selected)+'',activate: true,position:"afterCurrrent"});
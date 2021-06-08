javascript:
selected=window.getSelection();
var myRuntime = window.external.mxGetRuntime();
var mxTabs = myRuntime.create('mx.browser.tabs');
var TabNum = mxTabs.newTab({url:'https://translate.google.com/#auto/auto/'+encodeURIComponent(selected)+'',activate: true,position:"afterCurrrent"});
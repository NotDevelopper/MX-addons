javascript:
selected=window.getSelection();
var myRuntime = window.external.mxGetRuntime();
var mxTabs = myRuntime.create('mx.browser.tabs');
var TabNum = mxTabs.newTab({url:'https://getpocket.com/explore/'+encodeURIComponent(selected)+'?src=search', activate: true,position:"afterCurrrent"});
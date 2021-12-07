javascript:
selected=window.getSelection();
var myRuntime = window.external.mxGetRuntime();
var mxTabs = myRuntime.create('mx.browser.tabs');
var TabNum = mxTabs.newTab({url:'https://www.youtube.com/results?search_query='+encodeURIComponent(selected)+'',activate: true,position:"afterCurrrent"});
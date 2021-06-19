javascript:
selected=window.getSelection();
var myRuntime = window.external.mxGetRuntime();
var mxTabs = myRuntime.create('mx.browser.tabs');
var TabNum = mxTabs.newTab({url:'https://search.icq.com/search/results.php?q='+encodeURIComponent(selected)+'',activate: true,position:"afterCurrrent"});
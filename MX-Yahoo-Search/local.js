javascript:
selected=window.getSelection();
var myRuntime = window.external.mxGetRuntime();
var mxTabs = myRuntime.create('mx.browser.tabs');
var TabNum = mxTabs.newTab({url:'https://search.yahoo.com/local/s;?p='+encodeURIComponent(selected)+'', activate: true,position:"afterCurrrent"});
javascript:
selected=window.getSelection();
var myRuntime = window.external.mxGetRuntime();
var mxTabs = myRuntime.create('mx.browser.tabs');
var TabNum = mxTabs.newTab({url:'https://duckduckgo.com/?q='+encodeURIComponent(selected)+'&ia=images', activate: true,position:"afterCurrrent"});
javascript:
selected=window.getSelection();
var myRuntime = window.external.mxGetRuntime();
var mxTabs = myRuntime.create('mx.browser.tabs');
var TabNum = mxTabs.newTab({url:'https://www.google.com/search?q='+encodeURIComponent(selected)+'&tbm=isch', activate: true,position:"afterCurrrent"});
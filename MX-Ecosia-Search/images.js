javascript:
selected=window.getSelection();
var myRuntime = window.external.mxGetRuntime();
var mxTabs = myRuntime.create('mx.browser.tabs');
var TabNum = mxTabs.newTab({url:'https://www.ecosia.org/images?q='+encodeURIComponent(selected)+'',activate: true,position:"afterCurrrent"});
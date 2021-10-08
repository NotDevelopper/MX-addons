javascript:
selected=window.getSelection();
var myRuntime = window.external.mxGetRuntime();
var mxTabs = myRuntime.create('mx.browser.tabs');
var TabNum = mxTabs.newTab({url:'https://www.qwant.com/?q='+encodeURIComponent(selected)+'&t=images', activate: true,position:"afterCurrrent"});
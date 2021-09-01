javascript:
selected=window.getSelection();
var myRuntime = window.external.mxGetRuntime();
var mxTabs = myRuntime.create('mx.browser.tabs');
var TabNum = mxTabs.newTab({url:'https://ljsear.ch/search?q='+encodeURIComponent(selected)+'&ia=about', activate: true,position:"afterCurrrent"});
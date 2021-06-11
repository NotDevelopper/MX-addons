javascript:
var myRuntime = window.external.mxGetRuntime();
var mxTabs = myRuntime.create('mx.browser.tabs');
var TabNum = mxTabs.newTab({url:"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(location.href)+'',activate: true,position:"afterCurrrent"});
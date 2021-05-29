javascript:
var myRuntime = window.external.mxGetRuntime();
var mxTabs = myRuntime.create('mx.browser.tabs');
var TabNum = mxTabs.newTab({url:"https://vk.com/share.php?url="+encodeURIComponent(location.href)+'',activate: true,position:"afterCurrrent"});
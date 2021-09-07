javascript:
var myRuntime = window.external.mxGetRuntime();
var mxTabs = myRuntime.create('mx.browser.tabs');
var TabNum = mxTabs.newTab({url:"https://connect.mail.ru/share?url="+encodeURIComponent(location.href)+'',activate: true,position:"afterCurrrent"});
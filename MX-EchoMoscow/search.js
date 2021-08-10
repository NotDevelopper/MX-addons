javascript:
selected=window.getSelection();
var myRuntime = window.external.mxGetRuntime();
var mxTabs = myRuntime.create('mx.browser.tabs');
var TabNum = mxTabs.newTab({url:'http://echo.msk.ru/search/?search_cond%5Bquery%5D='+encodeURIComponent(selected)+'',activate: true,position:"afterCurrrent"});
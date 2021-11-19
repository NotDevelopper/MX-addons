javascript:
selected=window.getSelection();
var myRuntime = window.external.mxGetRuntime();
var mxTabs = myRuntime.create('mx.browser.tabs');
var TabNum = mxTabs.newTab({url:'https://market.yandex.com/search.xml?text='+encodeURIComponent(selected)+'',activate: true,position:"afterCurrrent"});
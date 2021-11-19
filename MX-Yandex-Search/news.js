javascript:
selected=window.getSelection();
var myRuntime = window.external.mxGetRuntime();
var mxTabs = myRuntime.create('mx.browser.tabs');
var TabNum = mxTabs.newTab({url:'https://news.yandex.com/yandsearch?text='+encodeURIComponent(selected)+'&rpt=nnews2',activate: true,position:"afterCurrrent"});
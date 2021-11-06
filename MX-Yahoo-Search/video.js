javascript:
selected=window.getSelection();
var myRuntime = window.external.mxGetRuntime();
var mxTabs = myRuntime.create('mx.browser.tabs');
var TabNum = mxTabs.newTab({url:'https://video.search.yahoo.com/search/video;?p='+encodeURIComponent(selected)+'', activate: true,position:"afterCurrrent"});
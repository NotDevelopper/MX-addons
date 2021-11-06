javascript:
selected=window.getSelection();
var myRuntime = window.external.mxGetRuntime();
var mxTabs = myRuntime.create('mx.browser.tabs');
var TabNum = mxTabs.newTab({url:'https://images.search.yahoo.com/search/images;?p='+encodeURIComponent(selected)+'', activate: true,position:"afterCurrrent"});
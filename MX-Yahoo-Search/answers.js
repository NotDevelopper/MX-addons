javascript:
selected=window.getSelection();
var myRuntime = window.external.mxGetRuntime();
var mxTabs = myRuntime.create('mx.browser.tabs');
var TabNum = mxTabs.newTab({url:'https://answers.search.yahoo.com/search;?p='+encodeURIComponent(selected)+'', activate: true,position:"afterCurrrent"});
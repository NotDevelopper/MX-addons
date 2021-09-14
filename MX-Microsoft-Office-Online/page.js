javascript:
var myRuntime = window.external.mxGetRuntime();
var mxTabs = myRuntime.create('mx.browser.tabs');
var TabNum = mxTabs.newTab({url:"https://www.office.com/0/",activate: true,position:"afterCurrrent"});
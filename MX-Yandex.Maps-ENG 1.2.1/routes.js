javascript:
selected=window.getSelection();
var myRuntime = window.external.mxGetRuntime();
var mxTabs = myRuntime.create('mx.browser.tabs');
var TabNum = mxTabs.newTab({url:'https://maps.yandex.com/?rtext='+encodeURIComponent(selected)+'&rtt=auto'+'',activate: true,position:"afterCurrrent"});
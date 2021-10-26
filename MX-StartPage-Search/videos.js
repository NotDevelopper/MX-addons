javascript:
selected=window.getSelection();
var myRuntime = window.external.mxGetRuntime();
var mxTabs = myRuntime.create('mx.browser.tabs');
var TabNum = mxTabs.newTab({url:'https://www.startpage.com/do/asearch?cat=video&cmd=process_search&language=english&query='+encodeURIComponent(selected)+'&ff=&nj=0',activate: true,position:"afterCurrrent"});
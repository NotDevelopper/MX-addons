javascript:
selected=window.getSelection();
var myRuntime = window.external.mxGetRuntime();
var mxTabs = myRuntime.create('mx.browser.tabs');
var TabNum = mxTabs.newTab({url:'https://ok.ru/dk?st.cmd=searchResult&st.query='+encodeURIComponent(selected)+'',activate: true,position:"afterCurrrent"});
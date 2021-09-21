javascript:
var myRuntime = window.external.mxGetRuntime();
var mxTabs = myRuntime.create('mx.browser.tabs');
var TabNum = mxTabs.newTab({url:"https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl="+encodeURIComponent(location.href)+'',activate: true,position:"afterCurrrent"});
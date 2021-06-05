javascript:
selected=window.getSelection();
var myRuntime = window.external.mxGetRuntime();
var mxTabs = myRuntime.create('mx.browser.tabs');
var TabNum = mxTabs.newTab({url:'https://vk.com/search?c[q]='+encodeURIComponent(selected)+'&c[section]=communities',activate: true,position:"afterCurrrent"});
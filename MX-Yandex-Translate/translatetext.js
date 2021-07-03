javascript:
var t=((window.getSelection&&window.getSelection())||(document.getSelection&&document.getSelection())||(document.selection&&document.selection.createRange&&document.selection.createRange().text));var e=(document.charset||document.characterSet);
var myRuntime = window.external.mxGetRuntime();
var mxTabs = myRuntime.create('mx.browser.tabs');
if(t!='')
{var TabNum = mxTabs.newTab({url:"https://translate.yandex.com/?text="+t+"&hl=auto&langpair=auto|auto&tbb=1&ie="+e,activate: true,position:"afterCurrrent"});} else {var TabNum = mxTabs.newTab({url:"https://translate.yandex.com/",activate: true,position:"afterCurrrent"});}; void 0;

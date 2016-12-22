console.log("from content.js");

window.addEventListener("keypress", handleKeyPress, true);
window.addEventListener("paste", handlePaste, true);

function handleKeyPress(e) {
    // console.log({
    //     which: e.witch,
    //     ctrl: e.ctrlKey,
    //     shift: e.shiftKey,
    //     alt: e.altKey,
    //     meta: e.metaKey
    // });

    var ae = document.activeElement;
    if (ae && ae.closest('[contenteditable=true]')/*tencent email*/ || ("value" in ae))
        return;
    chrome.runtime.sendMessage({
        key: String.fromCharCode(e.keyCode),
        selection: window.getSelection() + ""
    }, function (response) {
        console.log(response);
    });
}

function handlePaste(e) {
    var items = e.clipboardData.items;
    // mime types
    console.log(JSON.stringify(items));
    if (items) {
        items[0].getAsString(function (nick) {
            console.log(nick);
            shopNick = nick.split(":")[0];
        });
    }
}

/**测试往web页面插入代码*/
/*
 var s = document.createElement('script');
 s.src = chrome.extension.getURL('test-inject.js');
 (document.head || document.documentElement).appendChild(s);
 s.onload = function() {
 s.parentNode.removeChild(s);
 };*/
/**测试chrome storage*/
/*
 chrome.storage.sync.set({
 'value': "theValue" + new Date()
 }, function() {
 console.log("value saved !");
 });*/
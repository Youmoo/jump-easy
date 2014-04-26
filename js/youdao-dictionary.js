(function () {
    console.log("from youdao.js");

    function getword(info, tab) {
        chrome.tabs.create({
            url: "http://dict.youdao.com/search?q=" + info.selectionText
        });
    }

    chrome.contextMenus.create({
        title: "有道词典: %s",
        contexts: ["selection"],
        onclick: getword
    });
})();
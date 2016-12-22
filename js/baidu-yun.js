(function () {
    function getword(info, tab) {
        const url = "http://www.google.com/#q={wd} site:pan.baidu.com";
        const wd = encodeURIComponent(info.selectionText);
        chrome.tabs.create({
            url: url.replace("{wd}", wd)
        });
    }

    chrome.contextMenus.create({
        title: "云盘: %s",
        contexts: ["selection"],
        onclick: getword
    });
})();

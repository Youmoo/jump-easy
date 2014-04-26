console.log("from config.js");

/**
 * 按键到动作的映射
 *
 * */
KEY_URL_MAPPINGS = {
    "0": "http://note.youdao.com/",
    "a": "http:api.taobao.com",
    "b": "http://lofter.com",
    "e": "data:text/html, <html contenteditable>",
    "f": function (word) { /*find books through pan.baidu.com*/
        var url = "http://www.baidu.com/#wd={wd} site:pan.baidu.com";
        var wd = encodeURIComponent(word);
        open(url.replace("{wd}", wd));
    },
    "g":"http://google.com/ncr",
    "h": "http://l.51yip.com/search/xargs", /*linux命令查询手册*/
    "m": "http://music.163.com",
    "n": function () { /*duplicate current tab */
        chrome.tabs.query({
            active: true
        }, function (tabs) {
            chrome.tabs.duplicate(tabs[0].id);
        });
    },
    "`": "http://baidu.com",
    "r": function () {
        chrome.runtime.reload();
    },
    "t": "http://tmall.com",
    "T": "http://taobao.com",
    "w": function () { /*close current tab*/
        chrome.tabs.query({
            active: true
        }, function (tabs) {
            chrome.tabs.remove(tabs[0].id);
        })
    },
    "y": "http://yun.baidu.com",
    "z": "http://qzone.qq.com"


};
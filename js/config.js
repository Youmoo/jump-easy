console.log("from config.js");

/**
 * 按键到动作的映射
 * */
KEY_URL_MAPPINGS = {
    "0": "http://note.youdao.com/",
    "a": "http:api.taobao.com",
    "b": "http://lofter.com",
    "c": function () { /*close current tab*/
        chrome.tabs.query({
            active: true
        }, function (tabs) {
            chrome.tabs.remove(tabs[0].id);
        })
    },
    "e": "data:text/html, <html contenteditable>",
    "g": "http://github.com/youmoo",
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

function getUserDefinedConfig() {
    var data = localStorage.userDefinedConfig || '{}';
    return JSON.parse(data);
}
function addUserDefinedConfig(key, value) {
    var config = getUserDefinedConfig();
    config[key] = value;
    localStorage.userDefinedConfig = JSON.stringify(config);
}

function getMergedConfig() {
    var userDefinedConfig = getUserDefinedConfig();
    var keys = Object.keys(KEY_URL_MAPPINGS).concat(Object.keys(userDefinedConfig));
    return keys.reduce(function (config, key) {
        var value = userDefinedConfig[key] || KEY_URL_MAPPINGS[key];
        value && (config[key] = value);
        return config;
    }, {});
}
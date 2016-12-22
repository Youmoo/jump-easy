console.log("from config.js");

/**
 * 按键到动作的映射
 */
KEY_URL_MAPPINGS = {
    "0": "http://note.youdao.com/",
    "a": "http:api.taobao.com",
    "b": "http://lofter.com",
    "c": function () {
        /*close current tab*/
        chrome.tabs.query({
            active: true
        }, function (tabs) {
            chrome.tabs.remove(tabs[0].id);
        })
    },
    "d": function ({domain}, reply) {
        // 将一个domain设置为启用快捷键
        localStorage[domain] = false;
        reply(`对 ${domain} 启用快捷键`);
    },
    "D": function ({domain}, reply) {
        // 将一个domain设置为禁用快捷键
        localStorage[domain] = true;
        reply(`对 ${domain} 禁用快捷键`);
    },
    "e": "data:text/html, <html contenteditable>",
    "g": "http://github.com/youmoo",
    "h": "http://l.51yip.com/search/xargs",
    /*linux命令查询手册*/
    "m": "http://music.163.com",
    "n": function () {
        /*duplicate current tab */
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
    "w": function () {
        /*close current tab*/
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
    const data = localStorage.userDefinedConfig || '{}';
    return JSON.parse(data);
}

function addUserDefinedConfig(key, value) {
    const config = getUserDefinedConfig();
    config[key] = value;
    localStorage.userDefinedConfig = JSON.stringify(config);
}

function getMergedConfig() {
    const userDefinedConfig = getUserDefinedConfig();
    return Object.assign({}, KEY_URL_MAPPINGS, userDefinedConfig);
}

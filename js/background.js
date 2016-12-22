console.log("from background.js");

const escapedKeys = new Set(['d', 'D']);

/*监听并处理消息*/
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

    const {domain, key}=request;
    if (!escapedKeys.has(key) && localStorage[domain] === 'true') {
        sendResponse(`${domain} 已禁用快捷键，按 d 键可重新启用`);
        return;
    }

    const config = getMergedConfig();
    const route = config[request.key] || request.route;

    switch (typeof route) {
        case "string":
            open(route);
            break;
        case "object":
            openTab(route, request.loginId);
            break;
        case "function":
            route(request, sendResponse);
            break;
        case "undefined":
            sendResponse({
                msg: "shortcut key " + request.key + " 行为未定义"
            });
    }
});
console.log("from background.js");
/*监听并处理消息*/
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    var config = getMergedConfig();
    var route = config[request.key] || request.route;
    switch (typeof route) {
        case "string":
            open(route);
            break;
        case "object":
            openTab(route, request.loginId);
            break;
        case "function":
            route(request.selection || request.loginId);
            break;
        case "undefined":
            sendResponse({
                msg: "shortcut key " + request.key + " 行为未定义"
            });
    }
});
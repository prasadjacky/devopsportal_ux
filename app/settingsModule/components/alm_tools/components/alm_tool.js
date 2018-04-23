"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlmTool = /** @class */ (function () {
    function AlmTool(tool_category, tool_url, tool_instance_name, tool_name, tool_version, tool_auth, proxy_required, http_proxy) {
        this.tool_category = tool_category;
        this.tool_url = tool_url;
        this.tool_instance_name = tool_instance_name;
        this.tool_name = tool_name;
        this.tool_version = tool_version;
        this.tool_auth = tool_auth;
        this.proxy_required = proxy_required;
        this.http_proxy = http_proxy;
    }
    return AlmTool;
}());
exports.AlmTool = AlmTool;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Proxy = /** @class */ (function () {
    function Proxy(_id, http_proxy_name, http_proxy_host, http_proxy_port, http_proxy_auth) {
        this._id = _id;
        this.http_proxy_name = http_proxy_name;
        this.http_proxy_host = http_proxy_host;
        this.http_proxy_port = http_proxy_port;
        this.http_proxy_auth = http_proxy_auth;
    }
    return Proxy;
}());
exports.Proxy = Proxy;

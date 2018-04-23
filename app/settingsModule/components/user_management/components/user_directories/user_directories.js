"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserDirectory = /** @class */ (function () {
    function UserDirectory(userDirectory_name, userDirectory_type, userDirectory_url, userDirectory_search_base, userDirectory_auth) {
        this.userDirectory_name = userDirectory_name;
        this.userDirectory_type = userDirectory_type;
        this.userDirectory_url = userDirectory_url;
        this.userDirectory_search_base = userDirectory_search_base;
        this.userDirectory_auth = userDirectory_auth;
    }
    return UserDirectory;
}());
exports.UserDirectory = UserDirectory;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(user_full_name, email_id, user_id, password, role_id) {
        this.user_full_name = user_full_name;
        this.email_id = email_id;
        this.user_id = user_id;
        this.password = password;
        this.role_id = role_id;
    }
    return User;
}());
exports.User = User;

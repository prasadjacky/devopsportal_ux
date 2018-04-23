"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(user_full_name, email_id, user_id, _id, role_id) {
        this.user_full_name = user_full_name;
        this.email_id = email_id;
        this.user_id = user_id;
        this._id = _id;
        this.role_id = role_id;
    }
    return User;
}());
exports.User = User;

"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined && another.email === this.email && another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "ricardo@teste.com": new User('ricardo@teste.com', 'Ricardo', '123'),
    "bernardo@testeII.com": new User('bernardo@testeII.com', 'Bernardo', '123')
};

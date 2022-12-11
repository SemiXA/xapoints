"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogout = void 0;
function userLogout(req, res) {
    req.session.destroy(function (err) {
        res.redirect("/login.html");
    });
}
exports.userLogout = userLogout;

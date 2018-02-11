"use strict";
exports.__esModule = true;
exports.handleAuthorization = function (req, resp, next) {
    var token = extratctToken(req);
    if (!token) {
        resp.setHeader('WWW-Authenticate', 'Bearer token_type="JWT"');
        resp.status(401).send({ message: 'Você precisa se autenticar.' });
    }
    else {
        jwt.verify(token, api_config_1.apiConfig.secret, function (error, decoded) {
            if (decoded) {
                next();
            }
            else {
                resp.status(403).json({ message: 'Não autorizado.' });
            }
        });
    }
};
function extratctToken(req) {
    var token = undefined;
    if (req.headers && req.headers.authorization) {
        // Authorization: Bearer HEADER.PAYLOAD.VERIFYSIGNATURE
        var parts = req.headers.authorization.split(' ');
        if (parts.length === 2 && parts[0] === 'Bearer') {
            token = parts[1];
        }
        return token;
    }
}

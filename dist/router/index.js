"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authentication_1 = __importDefault(require("./authentication"));
const users_1 = __importDefault(require("./users"));
const events_1 = __importDefault(require("./events"));
const router = express_1.default.Router();
exports.default = () => {
    (0, authentication_1.default)(router);
    (0, users_1.default)(router);
    (0, events_1.default)(router);
    router.get("/", (req, res) => {
        return res.status(200).json("Events API UP");
    });
    return router;
};
//# sourceMappingURL=index.js.map
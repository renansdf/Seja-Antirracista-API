"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var routes_1 = __importDefault(require("./routes"));
require("../typeorm");
var app = express_1.default();
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(process.env.PORT || 3333, function () {
    console.log('server started on port 3333');
});

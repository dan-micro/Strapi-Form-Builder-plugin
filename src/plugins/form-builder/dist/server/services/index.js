"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const my_service_1 = __importDefault(require("./my-service"));
const widgets_1 = __importDefault(require("./widgets"));
exports.default = {
    myService: my_service_1.default,
    widgets: widgets_1.default,
};

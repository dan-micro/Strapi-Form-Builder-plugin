"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widgetTypesQuery_json_1 = __importDefault(require("./samples/widgetTypesQuery.json"));
const widgetTypeOptionsQuery_json_1 = __importDefault(require("./samples/widgetTypeOptionsQuery.json"));
exports.default = ({ strapi }) => ({
    getWidgets() {
        return widgetTypesQuery_json_1.default.data.widgetTypes.data.map((d) => ({
            ...d,
            attributes: {
                ...d.attributes,
                widgetTypeOptions: {
                    data: d.attributes.widgetTypeOptions.data.map((_d) => widgetTypeOptionsQuery_json_1.default.data.widgetTypeOptions.data.find((option) => option.id === _d.id)),
                },
            },
        }));
    },
});

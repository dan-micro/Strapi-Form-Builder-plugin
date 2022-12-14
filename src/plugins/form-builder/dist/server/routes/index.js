'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/widgetTypes',
    handler: 'widgetTypes.index',
    config: {
      auth: false,
    },
  },
];

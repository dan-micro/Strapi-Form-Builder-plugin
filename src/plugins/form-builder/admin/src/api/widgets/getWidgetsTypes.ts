import { request } from '@strapi/helper-plugin';

import pluginId from '../../pluginId';

export const getWidgetsTypes = async () => request(`/${pluginId}/widgetTypes`);

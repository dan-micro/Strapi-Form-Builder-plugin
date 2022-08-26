import { Strapi } from "@strapi/strapi";
import widgetTypesQuery from "./samples/widgetTypesQuery.json";
import widgetTypeOptionsQuery from "./samples/widgetTypeOptionsQuery.json";
export default ({ strapi }: { strapi: Strapi }) => ({
  getWidgets() {
    return widgetTypesQuery.data.widgetTypes.data.map((d) => ({
      ...d,
      attributes: {
        ...d.attributes,
        widgetTypeOptions: {
          data: d.attributes.widgetTypeOptions.data.map((_d) =>
            widgetTypeOptionsQuery.data.widgetTypeOptions.data.find(
              (option) => option.id === _d.id
            )
          ),
        },
      },
    }));
  },
});

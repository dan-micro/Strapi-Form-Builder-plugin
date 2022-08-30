import { Button } from "./Button";
import { Switch } from "./Switch";
import { File } from "./File";
import { Select } from "./Select";
import { TextInput } from "./TextInput";
import { Grid } from "./Grid";

export const widgetTypeToWidgetCmp = {
  input: TextInput,
  select: Select,
  toggle: Switch,
  button: Button,
  fileUpload: File,
  grid: Grid,
};

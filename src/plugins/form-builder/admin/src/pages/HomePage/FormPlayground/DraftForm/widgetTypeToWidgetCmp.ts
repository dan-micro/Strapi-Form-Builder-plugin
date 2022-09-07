import { Button } from './Button';
import { File } from './File';
import { Grid } from './Grid';
import { Select } from './Select';
import { Switch } from './Switch';
import { TextInput } from './TextInput';

export const widgetTypeToWidgetCmp = {
  input: TextInput,
  select: Select,
  toggle: Switch,
  button: Button,
  fileUpload: File,
  grid: Grid,
};

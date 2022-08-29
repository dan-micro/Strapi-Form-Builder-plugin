import { useAtom } from "jotai";
import React from "react";
import { formConfigAtom } from "../store";
import { Button } from "./DraftForm/Button";
import { Checkbox } from "./DraftForm/Checkbox";
import { File } from "./DraftForm/File";
import { Select } from "./DraftForm/Select";
import { TextInput } from "./DraftForm/TextInput";
import { Stack } from "@mui/material";

const widgetTypeToWidgetCmp = {
  2: TextInput,
  3: Select,
  4: Checkbox,
  5: Button,
  6: File,
};

export const DraftForm = () => {
  const [formConfig, setFormConfig] = useAtom(formConfigAtom);
  return (
    <Stack gap={2} sx={{ p: 2 }}>
      {formConfig.map((conf) => {
        const WidgetCmp = widgetTypeToWidgetCmp[conf.widgetType];
        return <WidgetCmp {...conf} />;
      })}
    </Stack>
  );
};

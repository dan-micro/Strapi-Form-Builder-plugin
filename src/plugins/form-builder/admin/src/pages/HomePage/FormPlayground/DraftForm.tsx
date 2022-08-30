import { useAtom } from "jotai";
import React, { useState } from "react";
import { formBuildModalAtom, FormConfig, formConfigAtom } from "../store";
import { Button } from "./DraftForm/Button";
import { Switch } from "./DraftForm/Switch";
import { File } from "./DraftForm/File";
import { Select } from "./DraftForm/Select";
import { TextInput } from "./DraftForm/TextInput";
import { IconButton, Stack } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useUpdateAtom } from "jotai/utils";

const widgetTypeToWidgetCmp = {
  input: TextInput,
  select: Select,
  toggle: Switch,
  button: Button,
  fileUpload: File,
};

interface DraftFormProps {
  addFormFields: (ref: HTMLDivElement) => void;
}
export const DraftForm = (props: DraftFormProps) => {
  const [formConfig, setFormConfig] = useAtom(formConfigAtom);
  const setFormBuildModal = useUpdateAtom(formBuildModalAtom);
  const [hover, setHover] = useState<number | undefined>(undefined);

  const deleteHandler = (idx) => {
    setFormConfig((prev) => {
      const newPrev = [...prev];
      newPrev.splice(idx, 1);
      return newPrev;
    });
  };

  const copyPastHandler = (conf, idx) => {
    setFormConfig((prev) => {
      const newPrev = [...prev];
      newPrev.splice(idx, 0, conf);
      return newPrev;
    });
  };

  const editHandler = (conf: FormConfig, idx: number) => {
    setFormBuildModal({
      mode: "edit",
      interfaceComponent: conf.interfaceComponent,
      predefinedValues: conf.options,
      title: conf.title,
      idx: idx,
    });
  };

  return (
    <Stack gap={2} sx={{ p: 2 }}>
      {formConfig.map((conf, idx) => {
        const WidgetCmp = widgetTypeToWidgetCmp[conf.interfaceComponent];
        return (
          <Stack
            key={idx}
            ref={props.addFormFields}
            sx={{
              width: "100%",
              py: 1,
              "&:hover": { background: "#ccc" },
              position: "relative",
            }}
            onMouseEnter={() => setHover(idx)}
            onMouseLeave={() => setHover(undefined)}
          >
            <WidgetCmp {...conf} />
            {hover === idx && (
              <Stack
                sx={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  background: "#505050",
                  mr: 1,
                  mt: 1,
                  borderRadius: "8px",
                  svg: { fill: "#fff" },
                }}
                gap={1}
                alignItems="center"
                direction="row"
                justifyContent="end"
              >
                <IconButton size="small" onClick={() => editHandler(conf, idx)}>
                  <ModeEditIcon />
                </IconButton>
                <IconButton
                  size="small"
                  onClick={() => copyPastHandler(conf, idx)}
                >
                  <ContentCopyIcon />
                </IconButton>
                <IconButton size="small" onClick={() => deleteHandler(idx)}>
                  <DeleteForeverIcon />
                </IconButton>
              </Stack>
            )}
          </Stack>
        );
      })}
    </Stack>
  );
};

import { useAtomValue } from "jotai";
import React, { useState } from "react";
import { formConfigAtom } from "../store";

import { Stack } from "@mui/material";
import { DraftFormControllers } from "./DraftForm/DraftFormControllers";
import { widgetTypeToWidgetCmp } from "./DraftForm/widgetTypeToWidgetCmp";

interface DraftFormProps {
  addFormFields: (ref: HTMLDivElement) => void;
}
export const DraftForm = (props: DraftFormProps) => {
  const formConfig = useAtomValue(formConfigAtom);
  const [hover, setHover] = useState<number | undefined>(undefined);

  console.log("==> formConfig ==>", formConfig);

  return (
    <Stack gap={2} sx={{ p: 2 }}>
      {formConfig.map((conf, idx) => {
        const WidgetCmp = widgetTypeToWidgetCmp[conf.interfaceComponent];
        return (
          <Stack
            key={idx}
            ref={
              conf.interfaceComponent !== "grid"
                ? props.addFormFields
                : undefined
            }
            sx={{
              width: "100%",
              py: 1,
              "&:hover": { background: "#ccc" },
              position: "relative",
            }}
            onMouseEnter={() => setHover(idx)}
            onMouseLeave={() => setHover(undefined)}
          >
            <WidgetCmp
              {...conf}
              idx={idx}
              draggableRefs={props.addFormFields}
            />
            {hover === idx && (
              <DraftFormControllers config={conf} position={idx} />
            )}
          </Stack>
        );
      })}
    </Stack>
  );
};

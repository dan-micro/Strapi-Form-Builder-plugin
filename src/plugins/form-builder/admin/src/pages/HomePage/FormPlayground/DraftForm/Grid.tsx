import React from "react";
import { isNumber } from "lodash-es";
import { Grid as MuiGrid, Typography } from "@mui/material";
import { FormConfig } from "../../store";
import { widgetTypeToWidgetCmp } from "./widgetTypeToWidgetCmp";
const Grid_Gap = 0.1;
type GridProps = FormConfig;
export const Grid = (props: GridProps) => {
  return (
    <MuiGrid container gap={Grid_Gap}>
      {props.options.columns.map((val, idx) => {
        if (!isNumber(val)) {
          const gridSize = +val[0];
          const cmpProps = val[1];
          const WidgetCmp = widgetTypeToWidgetCmp[cmpProps.interfaceComponent];
          console.log("==> gridSize ==>", gridSize);
          return (
            <MuiGrid
              sx={{ p: 2, background: "red", "&>*": { width: "100%" } }}
              ref={props.draggableRefs}
              id={props.idx + "_" + idx}
              item
              sm={gridSize - Grid_Gap}
            >
              <WidgetCmp {...cmpProps} />
            </MuiGrid>
          );
        }
        return (
          <MuiGrid
            sx={{ p: 2, background: "red" }}
            ref={props.draggableRefs}
            id={props.idx + "_" + idx}
            item
            sm={val - Grid_Gap}
          >
            <Typography textAlign="center">[ Column Size - {val}]</Typography>
          </MuiGrid>
        );
      })}
    </MuiGrid>
  );
};

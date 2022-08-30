import React, { RefObject, MutableRefObject } from "react";
import { groupBy } from "lodash-es";
import { useQuery } from "@tanstack/react-query";
import { Grid, Paper, Stack, Typography } from "@mui/material";
import { controlElementsConfig } from "./FormController/controlElementsConfig";
import { Search } from "./FormController/Search";
import { getWidgetsTypes } from "../../api/widgets/getWidgetsTypes";
import { LoadingData } from "../../components/LoadingData/LoadingData";
import { useFormControllerDnd } from "./FormController/useFormControllerDnd";

interface FormControllerProps {
  dropRef: RefObject<HTMLDivElement>;
  formFieldsRef: MutableRefObject<HTMLDivElement[]>;
}

export const FormController = (props: FormControllerProps) => {
  const { data, isLoading, error } = useQuery(
    ["getWidgetsTypes"],
    () => getWidgetsTypes(),
    {
      select: (d) => d.concat([{ attributes: { interfaceComponent: "grid" } }]),
    }
  );
  const controlElementsConfigToName = groupBy(controlElementsConfig, "name");
  const { addWidgetRefToWidgetsRefs } = useFormControllerDnd(
    props.dropRef,
    props.formFieldsRef,
    data
  );

  return (
    <Paper elevation={3} sx={{ p: 2, flexBasis: "20%" }}>
      <Search />
      <LoadingData loading={isLoading} error={error}>
        {() => (
          <Grid container gap={2} sx={{ position: "sticky" }}>
            {data.map((el, idx) => {
              const widgetName = el.attributes.interfaceComponent;
              const elementConfig = controlElementsConfigToName[widgetName][0];
              return (
                <Grid
                  key={widgetName + idx}
                  id={widgetName}
                  ref={addWidgetRefToWidgetsRefs}
                  item
                  xs
                  sx={{ minWidth: "max-content" }}
                >
                  <Paper
                    sx={{
                      p: 2,
                      cursor: "pointer",
                    }}
                  >
                    <Stack gap={2} alignItems="center">
                      {elementConfig.icon}
                      <Typography>{elementConfig.label}</Typography>
                    </Stack>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        )}
      </LoadingData>
    </Paper>
  );
};

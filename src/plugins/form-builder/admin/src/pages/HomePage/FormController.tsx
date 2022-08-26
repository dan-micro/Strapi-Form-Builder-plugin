import React, { RefObject } from "react";
import { groupBy } from "lodash-es";
import { useQuery } from "@tanstack/react-query";
import { Grid, Paper, Stack, Typography } from "@mui/material";
import { controlElementsConfig } from "./FormController/controlElementsConfig";
import { Search } from "./FormController/Search";
import { getWidgetsTypes } from "../../api/widgets/getWidgetsTypes";
import { LoadingData } from "../../components/LoadingData/LoadingData";
import { useDnd } from "./FormController/useDnd";

interface FormControllerProps {
  dropRef: RefObject<HTMLDivElement>;
}

export const FormController = (props: FormControllerProps) => {
  const { data, isLoading, error } = useQuery(["getWidgetsTypes"], () =>
    getWidgetsTypes()
  );
  const controlElementsConfigToName = groupBy(controlElementsConfig, "name");
  const { addWidgetRefToWidgetsRefs } = useDnd(props.dropRef, data);

  return (
    <Paper elevation={3} sx={{ p: 2, flexBasis: "20%" }}>
      <Search />
      <LoadingData loading={isLoading} error={error}>
        {() => (
          <Grid container gap={2} sx={{ position: "sticky" }}>
            {data.map((el) => {
              const widgetName = el.attributes.name;
              const elementConfig = controlElementsConfigToName[widgetName][0];
              return (
                <Grid
                  key={widgetName}
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

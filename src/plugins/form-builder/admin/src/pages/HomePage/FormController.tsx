import React from "react";
import { Grid, Paper, Stack, Typography } from "@mui/material";
import { controlElementsConfig } from "./FormController/controlElementsConfig";
import { Search } from "./FormController/Search";
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
  Droppable,
} from "react-beautiful-dnd";
export const FormController = () => {
  return (
    <Paper elevation={3} sx={{ p: 2, flexBasis: "20%" }}>
      <Search />
      <Droppable droppableId="List">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <Grid container gap={2} sx={{ position: "sticky" }}>
              {controlElementsConfig.map((el, idx) => (
                <Grid item xs sx={{ minWidth: "max-content" }}>
                  <Draggable index={idx} draggableId={el.name}>
                    {(
                      dragProvided: DraggableProvided
                      // dragSnapshot: DraggableStateSnapshot
                    ) => (
                      <div
                        key={idx}
                        ref={dragProvided.innerRef}
                        {...dragProvided.draggableProps}
                        {...dragProvided.dragHandleProps}
                      >
                        <Paper
                          sx={{
                            p: 2,
                            cursor: "pointer",
                          }}
                        >
                          <Stack gap={2} alignItems="center">
                            {el.icon}
                            <Typography>{el.label}</Typography>
                          </Stack>
                        </Paper>
                      </div>
                    )}
                  </Draggable>
                </Grid>
              ))}
            </Grid>
          </div>
        )}
      </Droppable>
    </Paper>
  );
};

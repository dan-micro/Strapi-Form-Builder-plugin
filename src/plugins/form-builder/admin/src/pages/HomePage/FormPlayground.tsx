import { Box, styled } from "@mui/material";
import React from "react";
import { Droppable } from "react-beautiful-dnd";
export const FormPlayground = () => {
  return (
    <Box
      sx={{
        flex: 1,
        minWidth: "400px",
        borderRadius: 2,
        p: 2,
        border: "2px dashed #000",
        mx: 2,
      }}
    >
      <Droppable style={{ flex: 1 }} droppableId="List1">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {provided.placeholder}
            <div>Playground</div>
          </div>
        )}
      </Droppable>
    </Box>
  );
};

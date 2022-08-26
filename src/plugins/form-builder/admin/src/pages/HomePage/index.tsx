import React from "react";
import styled from "styled-components";
import { FormPlayground } from "./FormPlayground";
import { FormController } from "./FormController";
import { Stack, Button } from "@mui/material";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const HomePage = () => {
  const handleDragEnd = (result: DropResult) => {
    console.log("==> result ==>", result);
  };

  return (
    <Stack flexWrap="wrap" direction="row" gap={2} sx={{ pt: 10, px: 3 }}>
      <DragDropContext onDargEnd={handleDragEnd}>
        <FormPlayground />
        <FormController />
      </DragDropContext>
    </Stack>
  );
};

export default HomePage;

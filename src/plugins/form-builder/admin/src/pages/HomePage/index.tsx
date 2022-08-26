import React, { useRef } from "react";

import { FormPlayground } from "./FormPlayground";
import { FormController } from "./FormController";
import { Stack } from "@mui/material";

const HomePage = () => {
  const dropRef = useRef<HTMLDivElement>(null);

  return (
    <Stack flexWrap="wrap" direction="row" gap={2} sx={{ pt: 10, px: 3 }}>
      <FormPlayground ref={dropRef} />
      <FormController dropRef={dropRef} />
    </Stack>
  );
};

export default HomePage;

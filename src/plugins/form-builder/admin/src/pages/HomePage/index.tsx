import React, { useRef } from "react";

import { FormPlayground } from "./FormPlayground";
import { FormController } from "./FormController";
import { Stack } from "@mui/material";
import { formBuildModalAtom } from "./store";
import { useAtomValue } from "jotai";
import { ConfigModal } from "./ConfigModal";
import { isEmpty } from "lodash-es";
import { useDraftFormDnd } from "./useDraftFormDnd";

const HomePage = () => {
  const dropRef = useRef<HTMLDivElement>(null);
  const formBuildModal = useAtomValue(formBuildModalAtom);
  const { addFormFields, formFieldsRef } = useDraftFormDnd();

  return (
    <Stack flexWrap="wrap" direction="row" gap={2} sx={{ pt: 10, px: 3 }}>
      <FormPlayground ref={dropRef} addFormFields={addFormFields} />
      <FormController dropRef={dropRef} formFieldsRef={formFieldsRef} />
      {!isEmpty(formBuildModal) && <ConfigModal />}
    </Stack>
  );
};

export default HomePage;

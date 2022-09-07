import React, { useRef, useState } from 'react';

import { Button, Stack } from '@mui/material';
import { useAtomValue } from 'jotai';
import { isEmpty } from 'lodash-es';

import { ConfigModal } from './ConfigModal';
import { FormController } from './FormController';
import { FormPlayground } from './FormPlayground';
import { ShowResultConfig } from './ShowResultConfig';
import { formBuildModalAtom } from './store';
import { useDraftFormDnd } from './useDraftFormDnd';

const HomePage = () => {
  const dropRef = useRef<HTMLDivElement>(null);
  const formBuildModal = useAtomValue(formBuildModalAtom);
  const { addFormFields, formFieldsRef, addDragFields } = useDraftFormDnd();
  const [open, setOpen] = useState(false);
  const closeHandler = () => setOpen(false);
  const openHandler = () => setOpen(true);
  return (
    <>
      <Stack flexWrap="wrap" direction="row" gap={2} sx={{ pt: 10, px: 3 }}>
        <FormPlayground
          ref={dropRef}
          addFormFields={addFormFields}
          addDragFields={addDragFields}
        />
        <FormController dropRef={dropRef} formFieldsRef={formFieldsRef} />
        {!isEmpty(formBuildModal) && <ConfigModal />}
      </Stack>
      <Button
        variant="contained"
        onClick={openHandler}
        sx={{
          width: '10rem',
          textTransform: 'capitalize',
          fontWeight: 'bold',
          my: 2,
          mx: 5,
        }}
      >
        Show Result
      </Button>
      {open && <ShowResultConfig onClose={closeHandler} />}
    </>
  );
};

export default HomePage;

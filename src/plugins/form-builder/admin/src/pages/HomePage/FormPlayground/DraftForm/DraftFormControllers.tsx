import React from 'react';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { IconButton, Stack } from '@mui/material';
import { useUpdateAtom } from 'jotai/utils';

import { formBuildModalAtom, FormConfig, formConfigAtom } from '../../store';

interface DraftFormControllersProps {
  config: FormConfig;
  position: number;
}
export const DraftFormControllers = ({ config, position }: DraftFormControllersProps) => {
  const setFormConfig = useUpdateAtom(formConfigAtom);
  const setFormBuildModal = useUpdateAtom(formBuildModalAtom);

  const deleteHandler = () => {
    setFormConfig((prev) => {
      const newPrev = [...prev];
      newPrev.splice(position, 1);
      return newPrev;
    });
  };

  const copyPastHandler = () => {
    setFormConfig((prev) => {
      const newPrev = [...prev];
      newPrev.splice(position, 0, config);
      return newPrev;
    });
  };

  const editHandler = () => {
    setFormBuildModal({
      mode: 'edit',
      interfaceComponent: config.interfaceComponent,
      predefinedValues: config.options,
      title: config.title,
      idx: String(position),
    });
  };

  return (
    <Stack
      sx={{
        position: 'absolute',
        right: 0,
        top: 0,
        background: '#505050',
        mr: 1,
        mt: 1,
        borderRadius: '8px',
        svg: { fill: '#fff' },
      }}
      gap={1}
      alignItems="center"
      direction="row"
      justifyContent="end"
    >
      <IconButton size="small" onClick={() => editHandler()}>
        <ModeEditIcon />
      </IconButton>
      <IconButton size="small" onClick={() => copyPastHandler()}>
        <ContentCopyIcon />
      </IconButton>
      <IconButton size="small" onClick={() => deleteHandler()}>
        <DeleteForeverIcon />
      </IconButton>
    </Stack>
  );
};

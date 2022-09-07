import React, { ReactElement } from 'react';

// import { ReactElement } from "react";
import FilePresentIcon from '@mui/icons-material/FilePresent';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';

interface ControlElement {
  name: string;
  label: string;
  icon: ReactElement;
  moreOptions?: ReactElement;
}

export const controlElementsConfig: ControlElement[] = [
  {
    name: 'input',
    label: 'Text Input',
    icon: <FormatColorTextIcon />,
  },
  {
    name: 'select',
    label: 'Select',
    icon: <FormatListBulletedIcon />,
  },
  { name: 'toggle', label: 'Toggle', icon: <ToggleOffIcon /> },
  {
    name: 'button',
    label: 'Button',
    icon: <SmartButtonIcon />,
  },
  { name: 'fileUpload', label: 'File', icon: <FilePresentIcon /> },
  {
    name: 'grid',
    label: 'Columns',
    icon: <ViewQuiltIcon />,
  },
];

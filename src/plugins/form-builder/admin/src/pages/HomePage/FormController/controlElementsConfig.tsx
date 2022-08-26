import React, { ReactElement } from "react";
// import { ReactElement } from "react";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import SmartButtonIcon from "@mui/icons-material/SmartButton";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
interface ControlElement {
  name: string;
  label: string;
  icon: ReactElement;
  moreOptions?: ReactElement;
}

export const controlElementsConfig: ControlElement[] = [
  {
    name: "Text input",
    label: "Text Input",
    icon: <FormatColorTextIcon />,
  },
  {
    name: "Select input",
    label: "Select",
    icon: <FormatListBulletedIcon />,
  },
  { name: "Toggle input", label: "Check Box", icon: <ToggleOffIcon /> },
  {
    name: "Button",
    label: "Button",
    icon: <SmartButtonIcon />,
  },
  { name: "File upload", label: "File", icon: <FilePresentIcon /> },
  {
    name: "grid",
    label: "Columns",
    icon: <ViewQuiltIcon />,
  },
];

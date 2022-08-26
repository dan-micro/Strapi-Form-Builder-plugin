import React, { ReactElement } from "react";
// import { ReactElement } from "react";
import { MdOutlineFormatColorText } from "react-icons/md";

interface ControlElement {
  name: string;
  icon: ReactElement;
  moreOptions?: ReactElement;
}

export const controlElements: ControlElement[] = [
  {
    name: "TextInput",
    icon: <MdOutlineFormatColorText />,
  },
  {
    name: "SelectInput",
    icon: IoMdArrowDropdown,
  },
];

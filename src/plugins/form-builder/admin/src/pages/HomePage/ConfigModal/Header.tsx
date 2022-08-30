import { Box, DialogTitle, IconButton, TextField } from "@mui/material";
import React, { ReactElement } from "react";
import CloseIcon from "@mui/icons-material/Close";

export interface DialogTitleProps {
  children?: React.ReactNode;
  onClose: () => void;
  icon: ReactElement;
}

export const Header = (props: DialogTitleProps) => {
  return (
    <DialogTitle
      sx={{
        m: 0,
        p: 2,
        display: "flex",
        fontWeight: 900,
        alignItems: "center",
      }}
    >
      <Box component="span" sx={{ px: 1 }}>
        {props.icon}
      </Box>
      {props.children}

      {props.onClose ? (
        <IconButton
          aria-label="close"
          onClick={props.onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

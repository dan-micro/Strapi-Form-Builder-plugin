import { Box, DialogTitle, IconButton, TextField } from "@mui/material";
import React, { ReactElement } from "react";
import CloseIcon from "@mui/icons-material/Close";

export interface DialogTitleProps {
  children?: React.ReactNode;
  titleDefaultValue?: string;
  title?: string;
  onClose: () => void;
  icon: ReactElement;
  onTitleChange: (title: string) => void;
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
      <TextField
        label="title"
        sx={{ ml: 5 }}
        size="small"
        variant="outlined"
        defaultValue={props.titleDefaultValue}
        value={props.title}
        onChange={(e) => props.onTitleChange(e.target.value)}
      ></TextField>
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
